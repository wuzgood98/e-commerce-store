"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

export function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          aria-label={route.label}
          className={cn(
            "hover:text-black motion-safe:transition-colors motion-reduce:transition-none",
            route.active ? "text-black font-medium" : "text-muted-foreground"
          )}
          href={route.href}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
