import { Metadata } from "next";
import AdsPageClient from "./AdsPageClient";

export const metadata: Metadata = {
    title: "Реклама в Google и Facebook в Чехии | Таргетинг и контекст — HaloAgency",
    description:
        "Настройка и ведение рекламы в Google Ads, Instagram и Facebook. Помогаем бизнесу в Чехии получать заявки и продажи — не просто клики.",
    keywords: [
        "реклама в google",
        "google ads чехия",
        "контекстная реклама google",
        "настройка рекламы google",
        "реклама в instagram",
        "реклама в facebook",
        "таргетированная реклама",
        "настройка таргетированной рекламы",
        "таргет instagram",
        "таргет facebook",
        "ведение рекламных кампаний",
        "маркетинговое агентство чехия",
        "реклама для бизнеса в чехии",
        "маркетинг прага",
        "таргет прага",
        "настройка таргет",
    ],
    openGraph: {
        title: "Реклама в Google и Facebook в Чехии — HaloAgency",
        description:
            "Настройка и ведение рекламы в Google Ads, Instagram и Facebook. Помогаем бизнесу в Чехии получать заявки и продажи — не просто клики.",
    },
};

export default function AdsPage() {
    return <AdsPageClient />;
}
