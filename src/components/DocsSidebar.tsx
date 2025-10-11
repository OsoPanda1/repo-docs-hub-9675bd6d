import { Book, Code, Cpu, Database, FileText, Layers, Network, Settings, Sparkles, BookOpen, Box, Scroll, Map, BookMarked, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DocsSidebar = () => {
  const location = useLocation();

  const sections = [
    {
      title: "Dominio 0: Prólogo",
      items: [
        { name: "El Manifiesto TAMV", href: "/docs/manifest", icon: Scroll },
        { name: "Guía de Roles", href: "/docs/roles-guide", icon: Map },
        { name: "Glosario Universal", href: "/docs/glossary", icon: BookMarked },
      ],
    },
    {
      title: "Dominio I: Propósito",
      items: [
        { name: "Estado del Proyecto", href: "/docs/project-status", icon: FileText },
        { name: "Dignificación Digital", href: "/docs/digital-dignity", icon: Sparkles },
        { name: "Historia del Fundador", href: "/docs/founder-story", icon: BookOpen },
        { name: "ISABELLA AI™", href: "/docs/isabella-ai", icon: Sparkles },
        { name: "Arte y Cultura", href: "/docs/creativity", icon: Sparkles },
        { name: "Panteón de Titanes", href: "/docs/titans", icon: BookMarked },
      ],
    },
    {
      title: "Dominio II: Gobernanza",
      items: [
        { name: "Arquitectura del Sistema", href: "/docs/architecture", icon: Layers },
        { name: "Anubis Quantum Guardian™", href: "/docs/anubis", icon: Shield },
        { name: "Dekateotl Synthesis™", href: "/docs/dekateotl", icon: Shield },
        { name: "Protocolo ID-NVIDA™", href: "/docs/id-nvida", icon: Shield },
        { name: "Roadmap de Implementación", href: "/docs/implementation-roadmap", icon: Map },
      ],
    },
    {
      title: "Introducción",
      items: [
        { name: "Visión General", href: "/docs", icon: Book },
        { name: "Inicio Rápido", href: "/docs/quickstart", icon: FileText },
      ],
    },
    {
      title: "Protocolo Kórima",
      items: [
        { name: "Filosofía y Diseño", href: "/docs/korima", icon: Sparkles },
        { name: "Endpoints de API", href: "/docs/api-endpoints", icon: Code },
        { name: "Modelos de Datos", href: "/docs/models", icon: Box },
        { name: "Ejemplos", href: "/docs/examples", icon: BookOpen },
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
