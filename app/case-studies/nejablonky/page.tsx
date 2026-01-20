"use client";

import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";

export default function NejablonkyPage() {
    return (
        <CaseStudyLayout
            title="Nejbalonky.cz"
            subtitle="Масштабирование E-commerce для товаров для праздника: от локального магазина до лидера ниши с интеграцией 1С и Server-Side Tracking."
            tags={["E-commerce", "WooCommerce", "Google Ads", "Meta Ads", "Server-Side Tracking"]}
            visualColorClass="text-blue-500"
            heroImage="/images/case-studies/nejablonky.png"
            mainStats={[
                { label: "Рост конверсий", value: "+148%" },
                { label: "Восстановлено данных", value: "38%" },
                { label: "Снижение CPL", value: "-25%" },
                { label: "ROAS", value: "850%" },
            ]}
            challenge={{
                title: "Проблема: Потеря данных и 'стеклянный потолок' в рекламе",
                description: "Клиент столкнулся с классической проблемой роста: реклама перестала окупаться при масштабировании, а блокировщики рекламы и iOS 14+ скрывали до 40% реальных конверсий, делая аналитику слепой.",
                points: [
                    "Терялось до 40% данных о покупках из-за ITP и AdBlock",
                    "Сложно масштабировать рекламу без точных данных о LTV",
                    "Устаревший сайт не конвертировал мобильный трафик",
                    "Нет синхронизации остатков с 1С складом"
                ]
            }}
            solution={{
                title: "Решение: Полный перезапуск платформы и аналитики",
                description: "Мы переработали сайт с нуля на WooCommerce для гибкости, внедрили серверный трекинг для обхода блокировок и настроили сквозную аналитику.",
                technologies: ["Next.js (Headless)", "WooCommerce", "Google Tag Manager Server-side", "Meta CAPI", "1C Integration"],
                features: [
                    "Разработали новый быстрый E-commerce сайт",
                    "Настроили Server-Side Tracking (GTM + Meta CAPI)",
                    "Интегрировали каталог и остатки с 1С в реальном времени",
                    "Запустили динамический ремаркетинг на основе просмотренных товаров",
                    "Оптимизировали SEO структуру категорий"
                ]
            }}
            results={{
                title: "Результат: Прозрачная аналитика и кратный рост",
                description: "Благодаря точному трекингу мы смогли обучить алгоритмы Google и Meta находить более платящую аудиторию, что позволило кратно увеличить бюджет сохранив рентабельность.",
                stats: [
                    { label: "Рост коэффициента конверсии (CR)", value: "+45%" },
                    { label: "Снижение стоимости привлечения клиента (CAC)", value: "-25%" },
                    { label: "Точность данных аналитики", value: "98%" },
                ]
            }}
        />
    );
}
