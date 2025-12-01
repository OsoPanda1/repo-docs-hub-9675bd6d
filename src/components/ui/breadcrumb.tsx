import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal, BookText, Share2, Cloud, UserCheck, QrCode, Users, Database, Pickaxe } from "lucide-react";
import { cn } from "@/lib/utils";

// Dummy context: API, logs, paneles, minería
const QuantumContext = React.createContext({
  civilizacion: "TAMV DM-X4",
  usuario: "Isabella",
  auditTrail: ["Inicio", "Panel PI", "Mentoring XR", "BookPI Audit", "Crisis", "Wall Social", "Mining"],
  piScore: "98.7%",
  exportable: true,
  apiEndpoint: "/api/bookpi/export",
  federacion: ["Cloud A", "Cloud B", "Node XR"],
  qr: "https://api.qrserver.com/v1/create-qr-code/?data=PI-Book-Audit-TAMV",
  mentoring: { sesiones: 121, feedback: "4.99/5", log: ["Mentoría XR 2025-11-14", "Mentor Latam"] },
  wall: { posts: 320, activos: true, ultimo: "Gran logro civilizatorio" },
  mining: { blocks: 312, registros: 120200, auditoria: "100%", pool: "Latam Quantum" }
});
function useQuantumBreadcrumb() { return React.useContext(QuantumContext); }

export const QuantumPanel = () => {
  const ctx = useQuantumBreadcrumb();
  return (
    <div className="bg-gradient-to-r from-teal-900 to-yellow-900 text-yellow-100 p-4 rounded-xl mb-2 shadow-lg">
      <div className="flex items-center gap-3">
        <BookText className="h-6 w-6 text-yellow-400" /><b>Trazabilidad:</b> {ctx.auditTrail.join(" → ")}
        <Cloud className="h-6 w-6 text-teal-300 ml-4" /><b>Federación:</b> {ctx.federacion.join(", ")}
        <UserCheck className="ml-2 h-6 w-6 text-teal-400" /><b>PI Score:</b> {ctx.piScore}
        <QrCode className="ml-2 h-7 w-7 text-yellow-300" />
        <img src={ctx.qr} alt="PI Book QR" className="h-6 w-6 ml-2 rounded" />
        {ctx.exportable && (
          <button onClick={async () => {
              // Dummy BookPI API call/export
              await fetch(ctx.apiEndpoint, { method: "POST", body: JSON.stringify({ data: "full export" }) });
              window.alert("Export civilizatorio multinube, QR PI y BookPI API ok!");
            }}
            className="ml-4 px-3 py-1 bg-teal-700 hover:bg-yellow-700 text-white rounded-full font-bold">
            <Share2 className="h-4 w-4 inline" /> Export Quantum
          </button>
        )}
        <Pickaxe className="ml-2 h-5 w-5 text-yellow-300" /> <span>Mining:</span> {ctx.mining.blocks} blocks / {ctx.mining.auditoria}
      </div>
      <div className="mt-2 flex flex-wrap gap-6">
        <div><Users className="inline h-4 w-4 text-teal-200" /> Wall Social: {ctx.wall.posts} posts, status: {ctx.wall.activos ? "Activo" : "Inactivo"}, Último post: "{ctx.wall.ultimo}"</div>
        <div><Database className="inline h-4 w-4 text-teal-200" /> Mentoring: {ctx.mentoring.sesiones} sesiones, Feedback: {ctx.mentoring.feedback}</div>
      </div>
    </div>
  );
};

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & { separator?: React.ReactNode }
>(({ ...props }, ref) => (
  <QuantumContext.Provider value={{
    civilizacion: "TAMV DM-X4",
    usuario: "Isabella",
    auditTrail: ["Inicio", "Panel PI", "Mentoring XR", "BookPI Audit", "Crisis", "Wall Social", "Mining"],
    piScore: "98.7%",
    exportable: true,
    apiEndpoint: "/api/bookpi/export",
    federacion: ["Cloud A", "Cloud B", "Node XR"],
    qr: "https://api.qrserver.com/v1/create-qr-code/?data=PI-Book-Audit-TAMV",
    mentoring: { sesiones: 121, feedback: "4.99/5", log: ["Mentoría XR 2025-11-14", "Mentor Latam"] },
    wall: { posts: 320, activos: true, ultimo: "Gran logro civilizatorio" },
    mining: { blocks: 312, registros: 120200, auditoria: "100%", pool: "Latam Quantum" }
  }}>
    <nav ref={ref} aria-label="breadcrumb" {...props}>
      <QuantumPanel />
      {props.children}
      <div className="text-xs text-teal-200 mt-2 text-right pr-2">Trazabilidad, auditoría, export multinube y paneles XR civilizatorios DM-X4</div>
    </nav>
  </QuantumContext.Provider>
));
Breadcrumb.displayName = "Breadcrumb";

// El resto de la definición permanece igual, puedes expandir cada elemento con popover, modal PI, Peer review, XR wall, mentoring details, mining/export panel...

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn("flex flex-wrap items-center gap-2 break-words py-1 text-base text-yellow-100 bg-slate-900 rounded-xl shadow tamv-breadcrumb-list sm:gap-3", className)}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5 tamv-breadcrumb-item font-bold", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return <Comp ref={ref} className={cn("transition-colors hover:text-teal-300 tamv-breadcrumb-link font-semibold underline", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-black text-yellow-300 bg-teal-950 px-2 py-1 rounded tamv-breadcrumb-page shadow-md", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-5 text-yellow-500", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span role="presentation" aria-hidden="true" className={cn("flex h-9 w-9 items-center justify-center bg-gradient-to-br from-teal-900 to-yellow-900 rounded-full", className)} {...props}>
    <MoreHorizontal className="h-5 w-5" />
    <span className="sr-only">Más</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

