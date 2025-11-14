import * as React from "react";
import { Sparkles, Users, MessageSquare, ShieldCheck, QrCode, Cloud, UserCheck, Mic2, Megaphone, Music, Image, Video, ShoppingBag, Bell, Cat, Settings, FileText, Camera, Globe2, Star, Key, Lock, BookText, DollarSign, Heart, Loader2, EyeOff, BookOpen, Gem, User, FileCheck2, Layers, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import useAuth from "@/hooks/useAuth";
import useAuditTrail from "@/hooks/useAuditTrail";
import useMonitoring from "@/hooks/useMonitoring";
import useUserProfile from "@/hooks/useUserProfile";
import usePICompliance from "@/hooks/usePICompliance";
import useMultifactor from "@/hooks/useMultifactor";
import useCellApi from "@/hooks/useCellApi";

const tamvSections = [
  { key: "groups",      icon: Users, label: "Grupos & Canales",        desc: "Comunidades Quantum, channels federados y organización social avanzada." },
  { key: "chats",       icon: MessageSquare, label: "Chats Privados",  desc: "Mensajería ultrasegura PI, logs auditable y cifrado extremo." },
  { key: "dreamspaces", icon: Star, label: "Dreamspaces XR",           desc: "Espacios federados, colaborativos y multisensoriales, XR/AI live." },
  { key: "concerts",    icon: Mic2, label: "Conciertos Sensoriales",   desc: "Audio 3D, eventos streaming, integración PI y compliance." },
  { key: "gallery",     icon: Image, label: "Galería de Arte XR",      desc: "NFTs auditados, galerías PI, exposiciones multisensoriales." },
  { key: "bridges",     icon: Globe2, label: "Puentes de Conocimiento",desc: "Mentoring global, IA, cells federadas y curaduría por PI." },
  { key: "videochat",   icon: Camera, label: "Videollamadas/Webcams",  desc: "NVIDIA, multifactor, grabación PI y registro federado." },
  { key: "marketplace", icon: ShoppingBag, label: "Marketplace",       desc: "Tienda digital, subastas, integración wallets PI y compliance." },
  { key: "pets",        icon: Cat, label: "Mascotas Digitales",        desc: "Avatares AI, autenticación de identidad, PI infantil." },
  { key: "wallet",      icon: Lock, label: "Wallet PI/Multifactor",    desc: "Credenciales PI, pagos federados, monitoreo y defensa anti-fraude." },
  { key: "reels",       icon: Heart, label: "Reels & Galería Multimedia",desc: "Publicaciones MR, clips, privacidad PI y muro global." },
  { key: "settings",    icon: Settings, label: "Panel de Ajustes",     desc: "Configuración, seguridad, preferencias PI y multifactor." },
  { key: "docs",        icon: BookText, label: "Documentación Oficial",desc: "Reglas, compliance, informes y APIs institucionales." },
  { key: "auctions",    icon: DollarSign, label: "Subastas Digitales", desc: "NFTs verificados, PI por block, trazabilidad y compliance." },
  { key: "login",       icon: Key, label: "Inicio/Registro/QMF",       desc: "Login Quantum, onboarding auditado, Deep PI compliance." },
  { key: "audit",       icon: FileCheck2, label: "Demo Auditoría PI",  desc: "BookPI, auditores externos, logs y revisión federada en vivo." },
  { key: "defense",     icon: ShieldCheck, label: "Anubis KAOS/PI Sentinel",desc: "Security, monitoreo QA pi, antifraude y AI defense." },
  { key: "wall",        icon: Bell, label: "Wall Global + Notif",      desc: "Feed, logros, alertas, log panel y compliance PI." },
  { key: "music",       icon: Music, label: "TAMV Music",              desc: "Eventos, mentoring, administración PI/royalties, comunidad." },
  { key: "membership",  icon: Megaphone, label: "Membresías/+18",      desc: "Contenido controlado, PI/age gating, pagos y compliance global." },
  { key: "isabella",    icon: Sparkles, label: "Isabella Chat/AI Asst.",desc: "AI chat, mentoring instantáneo, wall ayuda multisensorial." },
  { key: "profile",     icon: User, label: "Perfil Usuario",           desc: "Verificaciones, wallet, historial PI, logros y acceso cells." },
  { key: "settings_adv",icon: SlidersHorizontal, label: "Ajustes Avanzados",desc: "XR, IA, defensa, registro y logs globales PI cell API." },
  { key: "cellmarket",  icon: Layers, label: "Marketplace/Subastas",   desc: "API cells, PI contracts, subastas, verificación real-time." },
  { key: "premium",     icon: Gem, label: "Galería Premium",           desc: "Comunidad premium, activos PI, verificación, log global." },
  { key: "kaos18",      icon: EyeOff, label: "Contenido +18/Filtrado", desc: "Bloqueo PI, auditoría anti-leaks, cumplimiento estricto." },
  { key: "library",     icon: BookOpen, label: "Centro Académico",     desc: "MOOCs, papers, AI, mentoring y cell research PI." },
];

const SectionPopover = ({ sec }) => {
  // SEGURIDAD: Revisar roles, multifactor, compliance y logs PI en cada cell
  const { isAuthenticated } = useAuth();
  const { hasAccess, getSectionAudit, getRoles } = useAuditTrail();
  const { logSectionAccess, startMonitoring } = useMonitoring();
  const { user } = useUserProfile();
  const { validatePI, isCompliant } = usePICompliance();
  const { checkMF } = useMultifactor();
  const { fetchCell } = useCellApi();

  React.useEffect(() => {
    logSectionAccess(sec.key, user?.id);
    startMonitoring(sec.key);
  }, [sec.key, user?.id]);

  // Protección ultrafuerte para cell sensible
  let cellContent;
  if (sec.key === "kaos18" && (!user?.isAdult || !checkMF(user?.id))) {
    cellContent = (
      <div className="text-red-400 text-center font-bold">
        ⚠️ Acceso Restringido. Verifica tu PI y credenciales Adult/Multifactor.
      </div>
    );
  } else if (!hasAccess(sec.key, user)) {
    cellContent = (
      <div className="text-yellow-400 text-center font-bold">
        Acceso denegado PI/compliance. Contacte al gestor PI.
      </div>
    );
  } else if (!isCompliant(sec.key)) {
    cellContent = (
      <div className="text-red-300 text-center font-bold">
        Compliance PI no superado, revisa logs y defensa.
      </div>
    );
  } else {
    cellContent = (
      <>
        <div className="font-extrabold text-xl mb-2 flex items-center gap-2">
          <sec.icon className="h-7 w-7" /> {sec.label}
        </div>
        <div className="text-base mb-2">{sec.desc}</div>
        <div className="bg-teal-900 p-2 mt-2 rounded-md text-xs text-teal-200">
          {getSectionAudit(sec.key)}
        </div>
        <button
          onClick={() => fetchCell(sec.key)}
          className="mt-4 px-5 py-2 bg-yellow-900 rounded-xl text-yellow-50 shadow-lg hover:bg-teal-900 transition-all"
        >Abrir cell/API</button>
      </>
    );
  }

  return (
    <PopoverContent align="center" className="max-w-md bg-indigo-950 p-6 rounded-2xl shadow-2xl text-yellow-100">
      {cellContent}
    </PopoverContent>
  );
};

export default function TAMVMegaDashboard() {
  return (
    <nav className="w-full max-w-7xl mx-auto py-8 px-4 flex flex-wrap justify-center gap-10 rounded-3xl shadow-2xl bg-gradient-to-r from-yellow-900 via-teal-900 to-indigo-900 animate-fadeIn">
      {tamvSections.map((sec) => (
        <Popover key={sec.key}>
          <PopoverTrigger asChild>
            <button
              className={cn(
                "flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-3xl bg-gradient-to-br from-teal-900 via-yellow-900 to-indigo-900 text-yellow-100 font-bold shadow-2xl hover:scale-105 focus:ring-4 focus:ring-violet-700 ring-2 ring-yellow-600 quantum-cell transition-all"
              )}
              tabIndex={0}
              aria-label={sec.label}
            >
              <sec.icon className="h-10 w-10 text-yellow-300 mb-2" />
              <span className="text-lg">{sec.label}</span>
            </button>
          </PopoverTrigger>
          <SectionPopover sec={sec} />
        </Popover>
      ))}
    </nav>
  );
}
