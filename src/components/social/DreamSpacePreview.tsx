import { Globe2, Users, Sparkles, ExternalLink, Activity, BrainCircuit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DreamSpace {
  id: number;
  name: string;
  creator: string;
  visitors: number;
  preview: string;
  /** Línea de tiempo / estado MD‑X4 del espacio (alpha, live, legacy, experimental, etc.) */
  phase?: "alpha" | "live" | "legacy" | "experimental";
  /** Nivel de integración ISABELLA (0-3) para UI y analítica */
  isabellaLevel?: 0 | 1 | 2 | 3;
  /** Bandera para espacios con gobernanza o eventos civilizacionales */
  isSovereign?: boolean;
}

interface DreamSpacePreviewProps {
  space: DreamSpace;
  /** Si está dentro de un grid “destacado” para variar estilos */
  featured?: boolean;
}

const DreamSpacePreview = ({ space, featured }: DreamSpacePreviewProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  const getPhaseLabel = (phase?: DreamSpace["phase"]) => {
    switch (phase) {
      case "alpha":
        return "MD‑X4 · Alpha Cell";
      case "live":
        return "MD‑X4 · Línea Viva";
      case "legacy":
        return "MD‑X4 · Archivo Vivo";
      case "experimental":
        return "MD‑X4 · Experimental";
      default:
        return "MD‑X4 · DreamSpace";
    }
  };

  const getIsabellaLabel = (level: DreamSpace["isabellaLevel"] = 0) => {
    if (level === 3) return "ISABELLA · Inmersión 3D Completa";
    if (level === 2) return "ISABELLA · Curaduría Emocional";
    if (level === 1) return "ISABELLA · Presencia Básica";
    return "ISABELLA · Sincronización Pendiente";
  };

  const cardBase =
    "group rounded-2xl overflow-hidden glass-effect border transition-all duration-500 " +
    "hover:shadow-xl hover:shadow-primary/10 " +
    (featured
      ? "border-primary/60 hover:border-primary"
      : "border-border/50 hover:border-primary/50");

  return (
    <article
      className={cardBase}
      data-mdx4-phase={space.phase ?? "unknown"}
      data-isabella-level={space.isabellaLevel ?? 0}
    >
      {/* Preview XR */}
      <div className="relative aspect-[4/3]">
        <img
          src={space.preview}
          alt={`Vista previa del DreamSpace ${space.name}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        {/* Partículas MD‑X4 (pulso civilizacional) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-70" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-300 opacity-70" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-500 opacity-70" />
        </div>

        {/* Badges XR / Fase / Soberanía */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 shadow-md shadow-primary/30">
            <Globe2 className="w-3 h-3 mr-1.5" />
            DreamSpace XR
          </Badge>

          <Badge
            variant="outline"
            className="border-white/20 bg-black/50 backdrop-blur-xs text-[0.65rem] uppercase tracking-[0.18em]"
          >
            {getPhaseLabel(space.phase)}
          </Badge>

          {space.isSovereign && (
            <Badge
              variant="outline"
              className="border-amber-400/60 text-amber-300 bg-black/60 backdrop-blur-xs text-[0.65rem]"
            >
              <Activity className="w-3 h-3 mr-1" />
              Nodo soberano
            </Badge>
          )}
        </div>

        {/* Visitantes / Pulso */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm">
          <Users className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium text-white">
            {formatNumber(space.visitors)}
          </span>
        </div>

        {/* Botón de entrada */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={`/dreamspaces/${space.id}`}
            aria-label={`Entrar al DreamSpace ${space.name}`}
          >
            <Button className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl shadow-primary/30 gap-2">
              <Sparkles className="w-4 h-4" />
              Entrar al DreamSpace
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Info civilizacional */}
      <div className="p-4 space-y-2">
        <header className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            {space.name}
          </h3>
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
            MD‑X4 · Cell
          </span>
        </header>

        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6 ring-1 ring-primary/30">
            <AvatarImage src="/placeholder.svg" alt={space.creator} />
            <AvatarFallback className="text-xs">
              {space.creator.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground line-clamp-1">
            por <span className="font-medium text-foreground">{space.creator}</span>
          </span>
        </div>

        {/* Estado ISABELLA / MD‑X4 */}
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[0.7rem] text-muted-foreground">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 border border-border/50">
            <BrainCircuit className="w-3 h-3 text-primary" />
            {getIsabellaLabel(space.isabellaLevel)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default DreamSpacePreview;
