import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  CircleUser,
  Heart,
  Home,
  Library,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/browse", label: "Home", icon: Home },
  { to: "/search", label: "Search", icon: Search },
  { to: "/library", label: "Your Library", icon: Library },
] as const;

const secondaryItems = [
  { to: "/library?filter=liked", label: "Liked Songs", icon: Heart },
  { to: "/artist/me", label: "Artist", icon: CircleUser },
] as const;

function NavItem({
  to,
  label,
  icon: Icon,
}: {
  to: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "group flex items-center gap-4 rounded-md px-3 py-2.5 text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]",
          isActive && "text-[var(--accent-green)]",
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={cn(
              "size-6 shrink-0",
              isActive
                ? "fill-[var(--accent-green)] stroke-[var(--accent-green)]"
                : "stroke-current",
            )}
            strokeWidth={isActive ? 0 : 2}
          />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
}

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex h-full w-[var(--sidebar-width)] shrink-0 flex-col bg-black px-2 py-6",
        className,
      )}
    >
      <div className="mb-6 px-3">
        <NavLink
          to="/browse"
          className="text-xl font-bold tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--accent-green)]"
        >
          Portfolio
        </NavLink>
      </div>

      <nav className="flex flex-col gap-1" aria-label="Main">
        {navItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>

      <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-4">
        {secondaryItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </div>
    </aside>
  );
}
