"use client";

import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";

export default function PropradloPage() {
    return (
        <CaseStudyLayout
            title="ProPradlo.cz"
            subtitle="Цифровая трансформация для прачечной: современный лендинг, автоматизация заказов и доминирование в локальном поиске."
            tags={["Landing Page", "Local SEO", "Automation", "Lead Magnet", "PPC"]}
            visualColorClass="text-teal-500"
            heroImage="/images/case-studies/propradlo.png"
            mainStats={[
                { label: "Рост заявок", value: "3.5x" },
                { label: "Локальный поиск", value: "TOP 3" },
                { label: "Конверсия сайта", value: "12%" },
                { label: "Экономия времени", value: "20ч/мес" },
            ]}
            challenge={{
                title: "Проблема: Ручная обработка и низкая видимость",
                description: "Бизнес тратил часы на ручную обработку заказов по телефону. Старый сайт не приносил заявок, а в локальном поиске (Google Maps) компания терялась среди конкурентов.",
                points: [
                    "Прием заказов только по телефону или email",
                    "Сайт не адаптирован под мобильные устройства",
                    "Отсутствие в выдаче Google Maps по ключевым запросам",
                    "Нет системы удержания клиентов (LTV)"
                ]
            }}
            solution={{
                title: "Решение: Автоматизация и локальное доминирование",
                description: "Мы создали конверсионный лендинг с формой онлайн-заказа, внедрили лид-магнит для сбора базы и оптимизировали профиль компании для локального поиска.",
                technologies: ["Next.js", "Resend Email API", "Google My Business", "Framer Motion"],
                features: [
                    "Разработали современный Landing Page с 'липким' CTA",
                    "Автоматизировали прием заявок (уведомления в Telegram/Email)",
                    "Внедрили Лид-магнит: чек-лист по уходу за тканями",
                    "Оптимизировали Google Business Profile (Reviews, Photos, Posts)",
                    "Запустили локальную рекламу Google Ads"
                ]
            }}
            results={{
                title: "Результат: Поток заявок и автопилот",
                description: "Теперь 70% заказов приходят онлайн без участия администратора. Прачечная занимает первые позиции в Google Maps в своем районе.",
                stats: [
                    { label: "Доля онлайн-заказов", value: "70%" },
                    { label: "Стоимость заявки (CPA)", value: "↓ 40%" },
                    { label: "Повторные обращения", value: "+25%" },
                ]
            }}
        />
    );
}
