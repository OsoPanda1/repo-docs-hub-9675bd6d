import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle, QrCode, BookText, Mining, Users, Cloud, Loader2, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

// Quantum Civilizatory Dummy Context
const useQuantumPanel = () => ({
  usuario: "Isabella",
  panel: "PI Book Audit",
  mentoring: { sesiones: 120, feedback: "4.99/5" },
  wall: { posts: 320, activo: true },
  mining: { blocks: 312, auditoria: "100%" },
  federacion: ["Cloud A", "Node XR", "Cell Quantum Latam"],
  loading: false,
  feedback: "Panel Quantum Civilizatorio: mentoring, wall XR, minería PI, auditoría BookPI/API y defensa multinube.",
  qr: "https://api.qrserver.com/v1/create-qr-code/?data=Audit-PI-TAMV",
});

// Menubar core primitives
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

// Menubar Quantum, multisensorial, federada y auditable
const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-14 items-center space-x-2 px-3 py-2 rounded-2xl border-2 bg-gradient-to-r from-teal-900 via-yellow-900 to-slate-900 shadow-2xl quantum-menubar",
      className)}
    {...props}
  />
));
Menubar.displayName = "QuantumMenubarRoot";

// MenubarTrigger Quantum con popover a paneles civilizatorios
const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const ctx = useQuantumPanel();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenubarPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex items-center gap-1.5 cursor-pointer select-none rounded-xl px-5 py-3 font-bold text-base outline-none bg-teal-950 text-yellow-100 hover:bg-yellow-900 quantum-menubar-trigger transition-all",
            className
          )}
          {...props}
        >
          <BookText className="h-5 w-5 mr-2 text-yellow-400" /> {children}
        </MenubarPrimitive.Trigger>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-72 p-4 bg-gradient-to-tr from-teal-900 to-yellow-900 rounded-xl text-yellow-100 shadow-lg">
          <b>Panel Menú Civilizatorio Quantum</b>
          <div className="mt-2 flex flex-col gap-2 text-base">
            <div><UserCheck className="inline h-4 w-4" /> Mentoring: {ctx.mentoring.sesiones} / Feedback: {ctx.mentoring.feedback}</div>
            <div><Users className="inline h-4 w-4" /> Wall XR: {ctx.wall.posts} posts, status: {ctx.wall.activo ? "Activo" : "Inactivo"}</div>
            <div><Mining className="inline h-4 w-4" /> Minado: {ctx.mining.blocks} blocks, Auditoría: {ctx.mining.auditoria}</div>
            <div><Cloud className="inline h-4 w-4" /> Federación: {ctx.federacion.join(", ")}</div>
          </div>
          <div className="my-3"><QrCode className="inline h-6 w-6 text-yellow-300" /> <img src={ctx.qr} className="h-8 w-8 rounded inline ml-2" /> Auditoría PI QR</div>
          <span className="block mt-3 text-xs">{ctx.feedback}</span>
        </div>
      </PopoverContent>
    </Popover>
  );
});
MenubarTrigger.displayName = "QuantumMenubarTrigger";

// SubTrigger Quantum con link federado y badge PI
const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex items-center gap-1 cursor-pointer select-none rounded-xl px-4 py-3 font-medium outline-none bg-yellow-950 text-teal-100 hover:bg-teal-950 transition-all quantum-menubar-subtrigger",
      inset && "pl-10",
      className,
    )}
    {...props}
  >
    <QrCode className="h-4 w-4 mr-2 text-yellow-300" /> {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = "QuantumMenubarSubTrigger";

// SubContent panel quantum federado PI, logs, QR, paneles XR
const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[10rem] overflow-hidden rounded-xl border-2 bg-teal-950 p-3 text-yellow-100 shadow-2xl quantum-menubar-subcontent",
      className)}
    {...props}
  >
    <div className="text-xs mb-2">
      <b>Export QR PI audit trail:</b><br/>
      <img src="https://api.qrserver.com/v1/create-qr-code/?data=Audit-PI-TAMV" className="rounded h-6 w-6 mt-2" />
    </div>
    <div className="text-xs">Panel federación: BookPI, Wall XR, Mentoring, Mining, Compliance.</div>
  </MenubarPrimitive.SubContent>
));
MenubarSubContent.displayName = "QuantumMenubarSubContent";

// Content elegante, multinube federado
const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "center", alignOffset = 0, sideOffset = 10, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[14rem] overflow-hidden rounded-xl border-2 bg-gradient-to-br from-yellow-950 via-teal-900 to-slate-900 p-3 shadow-xl quantum-menubar-content",
        className)}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = "QuantumMenubarContent";

// MenubarItem Quantum con loading, feedback y modularidad defense
const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => {
  const [loading, setLoading] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");
  async function handleClick() {
    setLoading(true);
    setFeedback("");
    await new Promise(res => setTimeout(res, 1200));
    setFeedback("✅ Acción civilizatoria Quantum DM-X4 completada.");
    setLoading(false);
  }
  return (
    <MenubarPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex items-center gap-1 rounded-xl px-4 py-3 text-base outline-none bg-slate-900 text-teal-100 hover:bg-yellow-800 hover:text-white transition-all font-bold quantum-menubar-item",
        inset && "pl-10",
        className,
      )}
      {...props}
      onClick={handleClick}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Circle className="h-4 w-4" />}
      {children}
      {feedback && <span className="ml-2 text-yellow-100">{feedback}</span>}
    </MenubarPrimitive.Item>
  );
});
MenubarItem.displayName = "QuantumMenubarItem";

// Checkbox, radio, label, separator, shortcut institucional
const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex items-center rounded-xl py-3 pl-10 pr-4 text-base bg-yellow-950 text-teal-200 font-bold transition-all quantum-menubar-checkbox",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-3 flex h-4 w-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-5 w-5" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = "QuantumMenubarCheckbox";

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex items-center rounded-xl py-3 pl-10 pr-4 text-base bg-teal-950 text-yellow-200 font-bold transition-all quantum-menubar-radio",
      className,
    )}
    {...props}
  >
    <span className="absolute left-3 flex h-4 w-4 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-3 w-3 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = "QuantumMenubarRadio";

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-4 py-3 text-base font-bold text-yellow-100 quantum-menubar-label", inset && "pl-10", className)}
    {...props}
  />
));
MenubarLabel.displayName = "QuantumMenubarLabel";

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("my-2 h-px bg-yellow-800 quantum-menubar-sep", className)} {...props} />
));
MenubarSeparator.displayName = "QuantumMenubarSeparator";

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-base tracking-widest text-teal-400 quantum-menubar-shortcut", className)} {...props} />;
};
MenubarShortcut.displayname = "QuantumMenubarShortcut";

// EXPORTS TAMV DM-X4
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
