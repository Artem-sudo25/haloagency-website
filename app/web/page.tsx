import { Metadata } from "next";
import WebPageClient from "./WebPageClient";

export const metadata: Metadata = {
    title: "Создание сайтов в Чехии | Лендинги и e-shop под ключ — HaloAgency",
    description:
        "Создаём сайты для бизнеса в Чехии: лендинги, корпоративные сайты и e-shop. Структура под рекламу, заявки и рост продаж. Готово за 3–7 дней.",
    keywords: [
        "создание сайтов",
        "создание сайтов для бизнеса",
        "разработка сайтов",
        "сайт для бизнеса",
        "создание лендинга",
        "создание landing page",
        "создание интернет магазина",
        "создание e shop",
        "создание сайтов чехия",
        "разработка сайтов прага",
        "wordpress сайт",
        "woocommerce интернет магазин",
    ],
    openGraph: {
        title: "Создание сайтов для бизнеса в Чехии — HaloAgency",
        description:
            "Создаём сайты для бизнеса в Чехии: лендинги, корпоративные сайты и e-shop. Структура под рекламу, заявки и рост продаж. Готово за 3–7 дней.",
    },
};

export default function WebPage() {
    return <WebPageClient />;
}
