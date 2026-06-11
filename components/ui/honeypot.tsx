"use client";

import { useId, useRef } from "react";

/**
 * Honeypot field name. Must match the field checked server-side in
 * app/api/webhook/lead/route.ts — submissions with a non-empty value
 * are silently dropped there.
 */
export const HONEYPOT_FIELD = "website_url";

/**
 * Anti-spam honeypot: a visually hidden input that real users never see
 * or fill, but bots that auto-fill every form field will populate.
 *
 * The input is uncontrolled and read from the DOM at submit time, so it
 * also catches bots that type into the rendered form instead of posting
 * to the API directly. Hidden via off-screen positioning (not
 * `display:none`) because some bots skip display-none fields.
 *
 * Usage:
 * ```tsx
 * const honeypot = useHoneypot();
 *
 * <form onSubmit={...}>
 *   {honeypot.field}
 *   ...
 * </form>
 *
 * // in the submit handler:
 * body: JSON.stringify({ ..., [HONEYPOT_FIELD]: honeypot.value() })
 * ```
 */
export function useHoneypot() {
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);

  const field = (
    <div
      aria-hidden="true"
      className="absolute -left-[9999px] h-px w-px overflow-hidden"
    >
      <label htmlFor={id}>Your website</label>
      <input
        ref={ref}
        id={id}
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );

  return {
    field,
    value: () => ref.current?.value ?? "",
  };
}
