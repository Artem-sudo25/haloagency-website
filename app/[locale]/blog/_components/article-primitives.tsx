import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-3xl font-extrabold leading-tight text-[#1A1A1A] sm:text-4xl"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h2>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-2xl font-extrabold leading-tight text-[#1A1A1A]">
      {children}
    </h3>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[17px] font-medium leading-relaxed text-[#1A1A1A]/80"
        >
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF3366]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NoteCard({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
        {label}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}
