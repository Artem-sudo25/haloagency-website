import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-6 ${className}`.trim()}
    >
      <ol className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/45">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.href ?? item.label}-${item.label}`}
              className="flex items-center gap-2"
            >
              {isLast || !item.href ? (
                <span className="text-[#1A1A1A]">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[#FF3366]"
                >
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
