import { Book, Code, Cpu, Database, FileText, Layers, Network, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DocsSidebar = () => {
  const location = useLocation();

  const sections = [
    {
      title: "Introducción",
      items: [
        { name: "Visión General", href: "/docs", icon: Book },
        { name: "Inicio Rápido", href: "/docs/quickstart", icon: FileText },
      ],
    },
    {
      title: "Infraestructura",
      items: [
        { name: "Arquitectura", href: "/docs/infrastructure", icon: Layers },
        { name: "Base de Datos", href: "/docs/database", icon: Database },
        { name: "Red", href: "/docs/network", icon: Network },
      ],
    },
    {
      title: "Desarrollo",
      items: [
        { name: "API Reference", href: "/docs/api", icon: Code },
        { name: "Componentes", href: "/docs/components", icon: Cpu },
        { name: "Configuración", href: "/docs/config", icon: Settings },
      ],
    },
  ];

  return (
    <aside className="w-64 glass-effect rounded-xl p-6 sticky top-20 h-fit">
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default DocsSidebar;
