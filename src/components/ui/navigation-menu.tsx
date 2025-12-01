import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown, QrCode, BookText, Pickaxe, Users, Cloud, UserCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

// Quantum context - all sections visual/data
const useQuantumPanel = () => ({
  nombre: "TAMV DM-X4",
  usuario: "Isabella",
  mentoring: { sesiones: 120, feedback: "4.99/5" },
  wall: { posts: 320, activo: true },
  mining: { blocks: 312, auditoria: "100%" },
  federacion: ["Cloud A", "XR Node", "Latam Quantum"],
  qr: "https://api.qrserver.com/v1/create-qr-code/?data=TAMV-Quantum-PI",
  compliance: "PI Book Audit: 99.7% OK",
  feedback: "Innovación multisensorial, magia civilizatoria: mentoring, wall XR, compliance PI, federación multinube, mining, BookPI/API y QR.",
});

// Quantum Multisensorial Menu
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-30 flex w-full max-w-4xl items-center justify-between px-6 py-4 rounded-3xl border-4 shadow-2xl bg-gradient-to-r from-yellow-800 via-teal-800 to-violet-900 quantum-navmenu backdrop-blur-lg animate-fadeIn",
      className
    )}
    {...props}
  >
    <div className="flex-grow">{children}</div>
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = "QuantumNavigationMenuRoot";

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex w-full list-none items-center justify-between gap-8 py-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = "QuantumNavigationMenuList";

// Menú con efecto, iconos vivos, popover multisensorial
const NavigationMenuItem = ({ children, panelType = "default", ...props }) => {
  const ctx = useQuantumPanel();
  const panels = {
    mentoring: (
      <div className="w-80 p-6 bg-gradient-to-br from-indigo-950 via-yellow-900 to-teal-900 rounded-2xl text-indigo-100 border-2 border-yellow-500 shadow-2xl">
        <h2 className="flex items-center gap-2 font-extrabold text-lg"><UserCheck />Mentoring Quantum</h2>
        <div className="mt-2 text-base">Sesiones globales: <b>{ctx.mentoring.sesiones}</b></div>
        <div className="mb-2">Calificación: <b>{ctx.mentoring.feedback}</b></div>
        <Sparkles className="mx-auto mt-2 animate-spin text-yellow-400" /> Comunidad activa, onboarding y mentoría avanzada.
      </div>
    ),
    wall: (
      <div className="w-80 p-6 bg-gradient-to-br from-pink-900 via-yellow-900 to-teal-900 rounded-2xl text-pink-100 border-2 border-pink-400 shadow-2xl">
        <h2 className="flex items-center gap-2 font-extrabold text-lg"><Users />Wall Social XR</h2>
        <div>Posts: <b>{ctx.wall.posts}</b></div>
        <div className="mb-2">Usuarios activos: <span className="font-semibold text-yellow-100">18,400</span></div>
        <Sparkles className="mx-auto mt-2 animate-pulse text-pink-300" /> Estado: <b>{ctx.wall.activo ? "Activo" : "Inactivo"}</b>
      </div>
    ),
    mining: (
      <div className="w-80 p-6 bg-gradient-to-br from-yellow-900 via-teal-900 to-slate-900 rounded-2xl text-yellow-100 border-2 border-yellow-600 shadow-2xl">
        <h2 className="flex items-center gap-2 font-extrabold text-lg"><Pickaxe />Minado PI Quantum</h2>
        <div>Bloques minados: <b>{ctx.mining.blocks}</b></div>
        <div className="mb-2">Auditoría: <b>{ctx.mining.auditoria}</b></div>
        <Cloud className="mx-auto mt-2 animate-spin text-teal-300" /> Pool: <b>Latam Quantum</b>
      </div>
    ),
    compliance: (
      <div className="w-80 p-6 bg-teal-950 rounded-2xl text-teal-100 border-2 border-yellow-600 shadow-2xl">
        <h2 className="flex items-center gap-2 font-extrabold text-lg"><BookText />Compliance PI/BookPI API</h2>
        <div>Estado auditoría:</div>
        <div className="mb-2 font-bold">{ctx.compliance}</div>
        <Sparkles className="mx-auto mt-2 animate-bounce text-teal-200" />
      </div>
    ),
    federacion: (
      <div className="w-80 p-6 bg-gradient-to-tr from-teal-900 via-yellow-900 to-violet-900 rounded-2xl text-yellow-100 border-2 border-teal-600 shadow-2xl">
        <h2 className="flex items-center gap-2 font-extrabold text-lg"><Cloud />Federación Multinube</h2>
        <div className="mb-2">Nodos Quantum:</div>
        <div className="font-bold">{ctx.federacion.join(", ")}</div>
      </div>
    ),
    qr: (
      <div className="w-80 p-6 bg-teal-900 rounded-2xl text-yellow-100 border-2 border-yellow-400 shadow-2xl">
        <h2 className="flex items-center gap-2 font-extrabold text-lg"><QrCode />Export QR PI</h2>
        <img src={ctx.qr} className="h-16 w-16 rounded-lg mx-auto mt-1" alt="Audit QR PI" />
        <div className="mt-2">Audit Trail PI Book</div>
      </div>
    ),
    default: (
      <div className="w-80 p-6 bg-slate-900 rounded-2xl text-yellow-100 border-2 border-yellow-500 shadow-2xl">
        <h2 className="flex items-center gap-2 font-extrabold text-lg"><Sparkles />Panel Quantum Civilizatorio</h2>
        <div>{ctx.feedback}</div>
      </div>
    )
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <NavigationMenuPrimitive.Item
          className={cn(
            "inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-lg font-bold bg-yellow-900 hover:bg-teal-700 text-white transition-all shadow-lg quantum-navmenu-item backdrop-blur-lg ring-2 ring-violet-700",
          )}
          {...props}
        >
          {children}
        </NavigationMenuPrimitive.Item>
      </PopoverTrigger>
      <PopoverContent>{panels[panelType] || panels.default}</PopoverContent>
    </Popover>
  );
};

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-12 w-max items-center justify-center rounded-2xl bg-teal-950 px-6 py-3 text-xl font-extrabold transition-all hover:bg-yellow-900 hover:text-teal-900 focus:bg-yellow-700 focus:text-teal-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-yellow-900 data-[state=open]:bg-yellow-900 ring-2 ring-yellow-500"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}
    <ChevronDown className="relative top-[1px] ml-3 h-5 w-5 transition-transform group-data-[state=open]:rotate-180 animate-bounce" aria-hidden="true"/>
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = "QuantumNavigationMenuTrigger";

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "z-10 left-0 top-0 w-full data-[motion^=from-]:animate-fadeIn data-[motion^=to-]:animate-out rounded-2xl shadow-2xl backdrop-blur-2xl border-2 border-yellow-800",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "QuantumNavigationMenuContent";

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-yellow-900 via-teal-900 to-violet-900 text-yellow-100 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = "QuantumNavigationMenuViewport";

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-20 flex h-4 items-end justify-center drop-shadow-2xl data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-out",
      className,
    )}
    {...props}
  >
    <div className="relative top-2 h-6 w-6 rotate-45 rounded-tl-xl bg-yellow-800 shadow-lg" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = "QuantumNavigationMenuIndicator";

// EXPORTS Quantum DM-X4 Navigation Menu
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
