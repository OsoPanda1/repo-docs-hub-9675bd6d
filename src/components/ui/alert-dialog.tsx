import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Modular hooks/context
const TamvCells = {
  PI: { usuario: "AnaMX", nivel: "Gold", log: "Consentimiento PI firmado", accion: "Exportar Compliance" },
  Finanzas: { ingreso: 120000, egreso: 85000, reservas: 24000, compliance: "97/100" },
  Crisis: { status: "Recovery Success ⬤", lastAction: "Backup multinube 2025-11-14" },
  Social: { comunidad: 18400, mentoring: 120 }
};

const TamvContext = React.createContext(TamvCells);
function useTamvCells() { return React.useContext(TamvContext); }

// Multicloud federation & BookPI integration (dummy, replace with real API)
async function exportPIasCSV() {
  // Simulación de exportación multinube
  const csv = "usuario,nivel,accion\nAnaMX,Gold,Exportar Compliance";
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  // Simulación de integración BookPI dummy/fetch
  // await fetch('/api/bookpi/export', { method: "POST", body: JSON.stringify({ csv }) });

  const link = document.createElement('a');
  link.href = url;
  link.download = "tamv_pi_export.csv";
  link.click();
  window.alert("PI exportado, federación multinube y BookPI concluida.");
}

// Crisis recovery (signal recursiva)
function signalCrisisRecovery(status = "OK") {
  window.alert("Crisis protocol activo - Recovery recursivo status: " + status);
  // Aquí puedes iterar y enviar señales a cells o federaciones partners
}

// Theming institucional
const tamvTheme = {
  overlay: "bg-gradient-to-br from-slate-900 via-yellow-900 to-teal-950/60",
  content: "bg-tamvDark border-tamvGold shadow-2xl text-yellow-100",
  action: "bg-teal-700 hover:bg-yellow-800 text-white font-bold",
  cancel: "border-teal-700 text-teal-500 font-bold"
};

// Componentes institucionales AlertDialog evolucionados
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      `fixed inset-0 z-50 ${tamvTheme.overlay} animate-fadeIn`,
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <TamvContext.Provider value={TamvCells}>
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-5 p-8 
          ${tamvTheme.content} rounded-2xl border-2 animate-fadeIn`,
          className,
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  </TamvContext.Provider>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-lg font-bold text-teal-200 pb-2", className)} {...props} />
);
const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid grid-cols-2 gap-3 pt-3", className)} {...props} />
);

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-2xl font-extrabold text-teal-300 mb-2", className)} {...props} />
));
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const pi = useTamvCells();
  return (
    <AlertDialogPrimitive.Description ref={ref} className={cn("text-base text-teal-300", className)} {...props}>
      Usuario: <b>{pi.PI.usuario}</b> — Nivel: <b>{pi.PI.nivel}</b><br />
      Último log: <span className="font-mono">{pi.PI.log}</span><br />
      Acción: <span>{pi.PI.accion}</span> <br />
      Finanzas: Ingreso: <b>${pi.Finanzas.ingreso}</b> / Egreso: <b>${pi.Finanzas.egreso}</b> / Reservas oro: <b>${pi.Finanzas.reservas}</b><br />
      Compliance: {pi.Finanzas.compliance}<br />
      Crisis: {pi.Crisis.status} / Acción: {pi.Crisis.lastAction}<br />
      Social: Comunidad <b>{pi.Social.comunidad}</b> / Mentoring <b>{pi.Social.mentoring}</b>
    </AlertDialogPrimitive.Description>
  );
});

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), tamvTheme.action, className)} {...props}
    onClick={() => { exportPIasCSV(); signalCrisisRecovery("OK"); }}>
    Exportar PI Compliance · Crisis Recovery
  </AlertDialogPrimitive.Action>
));

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), tamvTheme.cancel, "mt-2 sm:mt-0", className)}
    {...props}
  >
    Cancelar / Salir
  </AlertDialogPrimitive.Cancel>
));

export function QuantumAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn(buttonVariants(), "bg-teal-800 text-white px-6 py-2 rounded-full")}>
        Abrir Panel PI · Export Multinube
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          Panel Institucional Civilizatorio: PI, Finanzas, Crisis y Social
        </AlertDialogHeader>
        <AlertDialogTitle>Export Quantum Compliance / Crisis Recovery</AlertDialogTitle>
        <AlertDialogDescription />
        <AlertDialogFooter>
          <AlertDialogCancel />
          <AlertDialogAction />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
