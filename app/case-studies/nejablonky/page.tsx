"use client";

import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";

export default function NejablonkyPage() {
    return (
        <CaseStudyLayout
            title="Nejbalonky.cz"
            subtitle="Создание и продвижение вебсайта с интеграцией логистики, оплаты, склада, кассы, аналитики и performance-маркетинга в единую систему продаж."
            tags={["E-commerce", "WooCommerce", "Google Ads", "Meta Ads", "Server-Side Tracking", "AI Search Visibility"]}
            visualColorClass="text-blue-500"
            heroImage="/images/case-studies/nejablonky_updated.png"
            analyticsImage="/images/case-studies/nejbalonky-analytics.png"
            mainStats={[
                { label: "Возватность Google Ads ", value: "6+" },
                { label: "Онлайн-заказов", value: "5000 +" },
                { label: "AI Search", value: "Visible" },
            ]}
            challenge={{
                title: "Запуск e-commerce проекта с нуля в нише товаров для праздника и доставки шаров.",
                description: "Проект стартовал в условиях, где ошибки в рекламе, логистике или ценообразовании напрямую приводят к убыточным заказам. С самого начала требовалось выстроить модель, в которой каждый заказ остаётся экономически оправданным, а рост возможен без увеличения операционных затрат.",
                points: [
                    "Выход на рынок без брендового спроса",
                    "Ограниченный маркетинговый бюджет на старте",
                    "Отсутствие данных для оптимизации рекламных алгоритмов",
                    "Необходимость автоматизации логистики и бухгалтерии",
                    "Корректный расчёт доставки для локальных и дальних заказов"
                ]
            }}
            solution={{
                title: "Performance-маркетинг и системная интеграция",
                description: "Проект выстраивался как e-commerce система, где реклама, аналитика, логистика, склад и оплата работают согласованно. Фокус — предсказуемая экономика заказов и масштабируемость с минимальным ручным управлением системными процессами.",
                technologies: ["WooCommerce", "Google Ads", "Meta Ads", "GTM Server-Side", "Meta CAPI", "iDoklad API", "PPL Integration", "Google Maps API"],
                features: [
                    "E-commerce платформа с локальными платёжными методами",
                    "Автоматизированная фактурация через iDoklad",
                    "Интеграция логистики PPL",
                    "Расчёт стоимости доставки на основе расстояния (Google Maps API)",
                    "Server-Side Tracking для более стабильной атрибуции",
                    "Performance-кампании в Google и Meta с фокусом на окупаемость"
                ]
            }}
            results={{
                title: "Лидер ниши с ROAS 6+",
                description: "Проект стабильно закрепился на чешском рынке товаров для праздника. Автоматизация ключевых процессов позволила масштабировать продажи без роста операционной нагрузки. Рекламные кампании в Google Ads стабильно показывают средний ROAS 6+.",
                stats: [
                    { label: "", value: "Устойчивый performance-результат с учётом сезонности" },
                    { label: "", value: "Автоматизация ключевых этапов обработки заказов" },
                    { label: "", value: "Видимость бизнеса в AI-поиске (ChatGPT, Google)" },
                ]
            }}
            cta={{
                title: "Готовы обсудить похожий проект?",
                text: "Каждый кейс начинается с понимания экономики бизнеса, а не с запуска рекламы."
            }}
        />
    );
}
