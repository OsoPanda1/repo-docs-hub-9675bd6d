import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { QrCode, UserCheck, BookText, Share2, Database, Cloud, Pickaxe, Users, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-lg px-5",
  {
    variants: {
      variant: {
        default: "bg-teal-900 text-yellow-100 hover:bg-yellow-800",
        destructive: "bg-red-900 text-red-100 hover:bg-red-800",
        outline: "border-2 border-yellow-700 bg-background hover:bg-teal-950 hover:text-yellow-200",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        quantum: "bg-gradient-to-r from-teal-900 via-yellow-900 to-slate-900",
        export: "bg-yellow-700 text-white hover:bg-teal-900",
        mentoring: "bg-indigo-900 text-indigo-100 hover:bg-teal-700",
        mining: "bg-yellow-900 text-teal-100 hover:bg-yellow-800",
        wall: "bg-slate-900 text-pink-200 hover:bg-pink-900",
        qr: "bg-teal-800 text-white hover:bg-yellow-700",
        loading: "bg-teal-800 text-white animate-pulse",
      },
      size: {
        default: "h-12 min-w-[120px] py-3",
        sm: "h-10 rounded-lg px-4 py-2",
        lg: "h-14 rounded-2xl px-8 py-3 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "quantum",
      size: "default",
    },
  },
);

const ButtonFeedback = ({ message = "", status = "info" }) => (
  <div className={cn(
    "mt-2 text-xs px-2 py-1 rounded shadow-lg",
    status === "success" && "bg-green-700 text-white",
    status === "error" && "bg-red-700 text-white",
    status === "info" && "bg-yellow-800 text-white"
  )}>
    {message}
  </div>
);

async function simulateAPICall(delay = 1200) {
  return new Promise(res => setTimeout(res, delay));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  actionType?: "bookpi" | "qrpi" | "mentoring" | "mining" | "wall" | "exportcloud";
  popover?: boolean; // Show popover panel mentoring, wall, etc.
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, actionType, popover, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [loading, setLoading] = React.useState(false);
    const [feedback, setFeedback] = React.useState("");

    // Define icons for each button
    const icons = {
      bookpi: <BookText />,
      qrpi: <QrCode />,
      mentoring: <UserCheck />,
      mining: <Pickaxe />,
      wall: <Users />,
      exportcloud: <Cloud />,
      loading: <Loader2 className="animate-spin" />,
      default: <Share2 />,
    };

    // Panel content for popovers (wall social XR, mentoring, etc.)
    const popoverPanels: any = {
      mentoring: (
        <div className="w-64 p-3 text-indigo-200 bg-indigo-950 rounded-xl">
          <h4 className="font-bold mb-2">Panel Mentoring Quantum</h4>
          Feedback: <b>4.99/5</b><br />
          Sesiones Globales: <b>121</b> <br />
          Comunidad activa, onboarding y mentoring avanzados.
        </div>
      ),
      wall: (
        <div className="w-64 p-3 text-pink-100 bg-pink-900 rounded-xl">
          <h4 className="font-bold mb-2">Wall Social XR Civilizatorio</h4>
          Último logro: "Gran éxito Quantum"<br />
          Posts: 320<br />
          Usuarios activos: 18400<br />
          Modo XR activado.
        </div>
      ),
      mining: (
        <div className="w-64 p-3 text-yellow-100 bg-yellow-900 rounded-xl">
          <h4 className="font-bold mb-2">Minado Institucional Quantum</h4>
          Blocks: 312<br />
          Auditoría: 100%<br />
          Pool: Latam Quantum<br />
          Registro PI audit trail multinube exportado.
        </div>
      ),
      exportcloud: (
        <div className="w-64 p-3 text-teal-100 bg-teal-900 rounded-xl">
          <h4 className="font-bold mb-2">Federación Multinube / Export</h4>
          Export multinube: compliance, Merkle, CSV, BookPI API<br />
          Estado: Completado.<br />
          {feedback && <ButtonFeedback message={feedback} status="success" />}
        </div>
      )
    };

    // Handle actions as defense system, audit, feedback and loading
    async function handleAction() {
      setLoading(true); setFeedback("");
      switch (actionType) {
        case "bookpi":
          await simulateAPICall();
          setFeedback("📚 Exportación BookPI API: compliant Quantum.");
          break;
        case "qrpi":
          window.open("https://api.qrserver.com/v1/create-qr-code/?data=Auditoria-PI-TAMV", "_blank");
          setFeedback("✅ QR PI Book generado y auditado civilizatoriamente.");
          break;
        case "mentoring":
          await simulateAPICall();
          setFeedback("👩‍🏫 Panel mentoring: sesiones, feedback, onboarding abierto.");
          break;
        case "mining":
          await simulateAPICall();
          setFeedback("⛏️ Minado institucional Quantum realizado.");
          break;
        case "wall":
          await simulateAPICall();
          setFeedback("🌐 Wall XR social Quantum generado.");
          break;
        case "exportcloud":
          await simulateAPICall();
          setFeedback("☁️ Exportación Quantum, federación multinube, BookPI y audit trail completados.");
          break;
        default:
          setFeedback("✅ Acción civilizatoria TAMV DM-X4 completada.");
          break;
      }
      setLoading(false);
    }

    const icon = icons[loading ? "loading" : (actionType || "default")];

    // Si requiere popover, extiende el botón
    if (popover && actionType && popoverPanels[actionType]) {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Comp
              className={cn(buttonVariants({ variant, size, className }))}
              ref={ref}
              {...props}
              onClick={handleAction}
              disabled={loading}
            >
              {icon} {children}
            </Comp>
          </PopoverTrigger>
          <PopoverContent>
            {loading && <ButtonFeedback message="Procesando..." status="info" />}
            {!loading && popoverPanels[actionType]}
            {feedback && <ButtonFeedback message={feedback} status="success" />}
          </PopoverContent>
        </Popover>
      );
    }

    // Si no, botón normal pero con loading/feedback/audit
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={handleAction}
        disabled={loading}
      >
        {icon} {children}
        {loading && <span className="ml-2">Procesando...</span>}
        {feedback && <ButtonFeedback message={feedback} status="success" />}
      </Comp>
    );
  },
);
Button.displayName = "QuantumButton";

export { Button, buttonVariants };
