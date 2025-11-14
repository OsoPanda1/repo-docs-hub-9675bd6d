import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Contexto PI institucional y dummy data
const PiContext = React.createContext();
const dummyLogs = [
  { fecha: "2025-11-14", tipo: "Consentimiento PI", user: "AnaMX", status: "Aprobado" },
  { fecha: "2025-11-13", tipo: "Transacción", user: "CarlosLAT", status: "Validado" },
  { fecha: "2025-11-13", tipo: "Auditoría", user: "Isabella", status: "Compliant" },
];
const dummyFinanzas = {
  ingresos: "$120,000 USD",
  egresos: "$85,000 USD",
  activos: "$540,000 USD",
  complianceScore: "97/100",
  reservasOro: "$24,000 USD"
};
const dummyMetricaSocial = {
  usuarios: 18400,
  onboardingCompleto: "81%",
  colaboradores: 36,
  sesionesMentoring: 120,
};

function usePi() { return {
  logs: dummyLogs,
  finanzas: dummyFinanzas,
  metrica: dummyMetricaSocial,
  exportar: () => window.alert("Logs, PI y métricas exportados en formato institucional CSV/MerkleRoot.")
}; }

// Tailwind Theme base TAMV
const tamvTheme = {
  root: "rounded-2xl shadow-lg bg-gradient-to-br from-slate-900 to-teal-900",
  item: "border-b border-teal-500 tamv-cell",
  trigger: "flex flex-1 items-center justify-between py-5 px-4 text-lg font-bold tracking-wide bg-slate-950 hover:bg-teal-950 transition-all tamv-accordion-trigger [&[data-state=open]>svg]:rotate-180",
  content: "bg-slate-900 text-teal-200 px-6 pb-6 pt-1 text-base animate-fadeIn tamv-accordion-content"
};

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(tamvTheme.item, className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(tamvTheme.trigger, className)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(tamvTheme.content, className)}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// QuantumAccordion TAMV DM-X4
export function QuantumAccordion() {
  const { logs, finanzas, metrica, exportar } = usePi();
  return (
    <Accordion type="multiple" className={tamvTheme.root}>
      <AccordionItem value="pi-panel">
        <AccordionTrigger>Panel Institucional PI · Consentimientos</AccordionTrigger>
        <AccordionContent>
          <ul>
            {logs.map((log, i) => (
              <li key={i} className="mb-2 text-xs">
                {log.fecha}: <b>{log.tipo}</b> — {log.user} [{log.status}]
              </li>
            ))}
          </ul>
          <button onClick={exportar} className="mt-2 bg-teal-700 hover:bg-yellow-800 text-white px-4 py-2 rounded">Exportar Institucional</button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="crisis">
        <AccordionTrigger>Protocolo Crisis & Recovery Antifrágil</AccordionTrigger>
        <AccordionContent>
          Activación instantánea de backup multinube, sandbox PI, rollback, recuperación ética y reporte legal.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="finance">
        <AccordionTrigger>Panel Financiero · Economía PI</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>Ingresos:</div><div>{finanzas.ingresos}</div>
            <div>Egresos:</div><div>{finanzas.egresos}</div>
            <div>Activos:</div><div>{finanzas.activos}</div>
            <div>Reservas Oro:</div><div>{finanzas.reservasOro}</div>
            <div>Score Legal/Compliance:</div><div>{finanzas.complianceScore}</div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="social">
        <AccordionTrigger>Interacción Social · Comunidad Quantum</AccordionTrigger>
        <AccordionContent>
          Comunidad viva: <b>{metrica.usuarios}</b> usuarios,
          <b>{metrica.onboardingCompleto}</b> onboarding completado,
          <b>{metrica.colaboradores}</b> colaboradores,
          <b>{metrica.sesionesMentoring}</b> sesiones de mentoring activas.<br />
          <button className="mt-2 bg-indigo-700 text-white px-3 py-1 rounded">Abrir Wall/Chat Civilizatorio</button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="metrics">
        <AccordionTrigger>Paneles, Métricas e Export Institucional</AccordionTrigger>
        <AccordionContent>
          Compliance actualizado (ISO, GDPR, AI Act), export PI con timestamp y Merkle-root, paneles visuales de BookPI, licencias y dashboard emocional. <br />
          <button className="mt-2 bg-yellow-700 text-white px-4 py-2 rounded">Ver Panel Compliance & Auditoría</button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cells">
        <AccordionTrigger>QuantumCells · Modularidad, Inclusión y XR</AccordionTrigger>
        <AccordionContent>
          Modularidad: integra nuevos widgets, verticales, cells, marketplace, mentorías y experiencias XR federadas dentro del ecosistema TAMV.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Exports institucionales y para cells/verticales
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

