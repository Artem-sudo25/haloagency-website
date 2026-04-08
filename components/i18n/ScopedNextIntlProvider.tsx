import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { getScopedMessages } from "@/lib/i18n-messages";

type ScopedNextIntlProviderProps = {
  children: ReactNode;
  namespaces: readonly string[];
};

export default async function ScopedNextIntlProvider({
  children,
  namespaces,
}: ScopedNextIntlProviderProps) {
  const locale = await getLocale();
  const messages = await getScopedMessages(namespaces);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
