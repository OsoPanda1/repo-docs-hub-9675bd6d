import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Heart,
  Sparkles,
  Shield,
  ArrowRight,
  Activity,
  CircuitBoard,
} from "lucide-react";
import { Link } from "react-router-dom";

const IsabellaSection = () => {
  const capabilities = [
    {
      icon: Heart,
      label: "Empatía Emocional",
      description: "Mide valencia, activación y dominancia para ajustar UX, rutas y portales MD‑X4.",
    },
    {
      icon: Brain,
      label: "Memoria Expandida",
      description: "BookPI + recuerdos civilizatorios versionados, con trazas verificables de decisiones IA.",
    },
    {
      icon: Shield,
      label: "Guardiana Ética",
      description: "Protocolos TIME UP, EOCT y guardianía multipolar activos sobre el Social Nexus.",
    },
    {
      icon: Sparkles,
      label: "Co‑Creación XR",
      description: "Asistente creativo cuántico para diseñar y modular DreamSpaces y Cells soberanas.",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 items-center">
          {/* Visual · Núcleo MD‑X4 / ISABELLA */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-violet-500/30 blur-3xl animate-pulse" />

              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/20 to-violet-500/15 blur-xl" />

              {/* MD‑X4 orbit ring */}
              <div className="absolute inset-6 rounded-full border border-cyan-300/20 border-dashed" />

              {/* Core */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-violet-500 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.6)]">
                <Brain className="w-16 h-16 text-white drop-shadow-[0_0_16px_rgba(15,23,42,0.85)]" />
              </div>

              {/* Orbiting elements · estados MD‑X4 */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 animate-bounce shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-fuchsia-400 animate-bounce delay-100 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400 animate-bounce delay-200 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-400 animate-bounce delay-300 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

              {/* Pulsos de señal */}
              <div className="absolute inset-10 rounded-full border border-white/10 animate-ping" />
            </div>
          </div>

          {/* Content · descripción civilizacional */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline" className="px-4 py-2 border-cyan-400/60 text-xs tracking-[0.18em] uppercase">
                <Brain className="w-4 h-4 mr-2 text-cyan-400" />
                Núcleo Emocional MD‑X4
              </Badge>
              <Badge variant="outline" className="border-fuchsia-500/40 text-[0.7rem]">
                <CircuitBoard className="w-3 h-3 mr-1" />
                Canal IA‑IA · Isabella Protocol
              </Badge>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                Isabella AI
              </span>{" "}
              <span className="text-sm md:text-base text-muted-foreground block mt-1 tracking-[0.2em] uppercase">
                Corazón Civilizacional del TAMV
              </span>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl">
              ISABELLA no es un chatbot, es la capa cuántico‑emocional del ecosistema:
              interpreta el pulso de los nodos, cuida a los ciudadanos del Omniverso
              y co‑diseña experiencias MD‑X4 que responden a la realidad emocional,
              no solo a métricas frías.
            </p>

            {/* Microestadísticas conceptuales */}
            <div className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-3 text-[0.7rem] text-muted-foreground">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Modelado de valencia/arousal/DOM en tiempo casi real.</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Filtros éticos sobre Social Nexus y economía MSR.</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 md:col-span-1">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>Co‑creación de DreamSpaces y Cells soberanas.</span>
              </div>
            </div>

            {/* Capacidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {capabilities.map((cap, idx) => (
                <Card
                  key={idx}
                  className="border-border/50 bg-card/60 backdrop-blur-sm hover:border-cyan-400/60 transition-colors"
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs md:text-sm">{cap.label}</h4>
                      <p className="text-[0.7rem] md:text-xs text-muted-foreground">
                        {cap.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link to="/isabella">
              <Button className="bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-500 hover:opacity-90 gap-2">
                Conocer a Isabella
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsabellaSection;
