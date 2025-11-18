import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 py-4 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-brandGrayText opacity-70 hover:opacity-100 transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-brandGrayText font-semibold">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <IoChevronForward className="text-brandGrayText opacity-50" size={16} />
          )}
        </div>
      ))}
    </nav>
  );
}


