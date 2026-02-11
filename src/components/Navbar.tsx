import { useState } from "react";
import {
  Menu,
  X,
  Brain,
  Wallet,
  ShoppingBag,
  Box,
  Shield,
  Users,
  GraduationCap,
  Music,
  Activity,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import tamvLogo from "@/assets/tamv-online-logo.jpg";

type NavItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ size?: number | string; className?: string }>;
  group?: "core" | "ecosistema" | "docs";
  hot?: boolean;
};

const navigation: NavItem[] = [
  { name: "Inicio", href: "/", group: "core" },
  { name: "Dashboard", href: "/dashboard", icon: Box, group: "core" },
  { name: "Isabella AI", href: "/isabella", icon: Brain, group: "core", hot: true },
  { name: "DreamSpaces", href: "/dreamspaces", icon: Box, group: "core" },
  { name: "Economía", href: "/economy", icon: Wallet, group: "core" },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag, group: "ecosistema" },
  { name: "ANUBIS", href: "/anubis", icon: Shield, group: "ecosistema" },
  { name: "DAO", href: "/dao", icon: Users, group: "ecosistema" },
  { name: "Universidad", href: "/university", icon: GraduationCap, group: "ecosistema" },
  { name: "KAOS Music", href: "/kaos", icon: Music, group: "ecosistema" },
  { name: "Documentación", href: "/docs", group: "docs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  const coreNav = navigation.filter((n) => n.group === "core");
  const ecoNav = navigation.filter((n) => n.group === "ecosistema");
  const docsNav = navigation.filter((n) => n.group === "docs");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo + Identidad */}
          <Link to="/" className="flex items-center gap-3 group" onClick={close}>
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden border border-cyan-400/50 bg-black/60 shadow-[0_0_18px_rgba(34,211,238,0.45)] transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(34,211,238,0.8)] group-hover:border-cyan-300">
              <img
                src={tamvLogo}
                alt="TAMV MD‑X4"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-transparent opacity-60" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold font-orbitron tracking-[0.25em] uppercase gradient-text leading-tight">
                TAMV MD‑X4
              </span>
              <span className="hidden sm:inline text-[0.65rem] text-muted-foreground tracking-[0.18em] uppercase">
                Civilización Digital · Metaverso Latino
              </span>
            </div>
          </Link>

          {/* Estado MD‑X4 · Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Badge
              variant="outline"
              className="hidden lg:inline-flex items-center gap-1.5 border-cyan-400/60 text-[0.65rem] tracking-[0.18em] uppercase"
            >
              <Activity className="w-3 h-3 text-cyan-400" />
              MD‑X4 · Línea Viva
            </Badge>
          </div>

          {/* Navegación principal · Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {coreNav.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={close}
                  className={[
                    "text-xs font-medium font-orbitron flex items-center gap-1.5 tracking-[0.16em] uppercase transition-colors",
                    active
                      ? "text-cyan-300 border-b border-cyan-400"
                      : "text-muted-foreground hover:text-cyan-300",
                    "pb-1 border-b border-transparent",
                  ].join(" ")}
                >
                  {Icon && <Icon size={14} className="opacity-90" />}
                  {item.name}
                  {item.hot && (
                    <span className="ml-1 text-[0.55rem] text-fuchsia-300 uppercase">
                      Nuevo
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Menú ecosistema */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="font-orbitron text-[0.7rem] tracking-[0.18em] uppercase border-cyan-400/60 hover:bg-cyan-500/10"
                onClick={toggle}
              >
                Ecosistema
                <Menu size={14} className="ml-1" />
              </Button>
            </div>
          </div>

          {/* Toggle móvil */}
          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-border/60 bg-background/80"
            onClick={toggle}
            aria-label="Abrir/cerrar navegación TAMV"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Menú desplegable · Desktop (ecosistema) */}
        {isOpen && (
          <div className="hidden md:block pb-4 animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div className="mt-2 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl px-4 py-3 grid grid-cols-3 gap-3">
              <div className="col-span-2 flex flex-wrap gap-3">
                {ecoNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={close}
                      className="flex items-center gap-2 text-[0.7rem] font-medium text-muted-foreground hover:text-cyan-300 transition-colors"
                    >
                      {Icon && (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                          <Icon size={14} className="text-cyan-300" />
                        </span>
                      )}
                      <span className="tracking-[0.14em] uppercase">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2 text-[0.7rem] text-muted-foreground">
                <span className="uppercase tracking-[0.18em] text-xs text-foreground/70">
                  Códice & Docs
                </span>
                {docsNav.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={close}
                    className="hover:text-cyan-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Menú móvil completo */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div className="mt-2 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl px-3 py-3 space-y-4">
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                  Núcleo MD‑X4
                </p>
                {coreNav.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={close}
                      className={[
                        "flex items-center gap-2 text-sm py-1.5 rounded-md px-1.5",
                        active
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "text-foreground/80 hover:bg-cyan-500/5 hover:text-cyan-200",
                      ].join(" ")}
                    >
                      {Icon && <Icon size={16} className="opacity-90" />}
                      <span className="text-xs font-orbitron tracking-[0.14em] uppercase">
                        {item.name}
                      </span>
                      {item.hot && (
                        <span className="ml-auto text-[0.6rem] uppercase text-fuchsia-300">
                          Nuevo
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                  Ecosistema
                </p>
                {ecoNav.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={close}
                      className={[
                        "flex items-center gap-2 text-sm py-1.5 rounded-md px-1.5",
                        active
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "text-foreground/80 hover:bg-cyan-500/5 hover:text-cyan-200",
                      ].join(" ")}
                    >
                      {Icon && <Icon size={16} className="opacity-90" />}
                      <span className="text-xs font-orbitron tracking-[0.14em] uppercase">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground mb-1">
                  Códice & Docs
                </p>
                {docsNav.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={close}
                    className="flex items-center gap-2 text-xs py-1.5 px-1.5 text-foreground/80 hover:text-cyan-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
