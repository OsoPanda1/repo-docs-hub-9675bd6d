 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import { 
   Sparkles, Brain, Globe, Rocket, Shield, Users, 
   Zap, ArrowRight, Play, Star
 } from "lucide-react";
 import tamvEmblem from "@/assets/tamv-emblem.jpg";
 
 const stats = [
   { value: "6.2M+", label: "Usuarios Activos", icon: Users },
   { value: "99.97%", label: "Uptime", icon: Shield },
   { value: "<50ms", label: "Latencia", icon: Zap },
   { value: "7", label: "Capas Federadas", icon: Globe },
 ];
 
 const features = [
   { icon: Brain, title: "Isabella AI™", desc: "IA ética y emocional" },
   { icon: Sparkles, title: "DreamSpaces 4D", desc: "Metaversos inmersivos" },
   { icon: Shield, title: "DEKATEOTL™", desc: "Seguridad cuántica" },
   { icon: Globe, title: "Web 4.0", desc: "Civilización digital" },
 ];
 
 export default function HeroSection7G() {
   return (
     <section className="hero-7g">
       {/* Grid overlay */}
       <div className="absolute inset-0 grid-7g" />
 
       {/* Central content */}
       <div className="relative z-10 container mx-auto px-6 py-20">
         <div className="max-w-6xl mx-auto text-center">
           {/* Status badge */}
           <div className="flex justify-center mb-8 fade-in-up">
             <div className="badge-7g">
               <span className="text-primary font-semibold">Sistema Operativo</span>
               <span className="text-muted-foreground">v2026.1.0</span>
             </div>
           </div>
 
           {/* Logo and title */}
           <div className="mb-8 fade-in-up stagger-1">
             <div className="flex justify-center mb-6">
               <div className="relative">
                 <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-quantum-pulse" />
                 <img 
                   src={tamvEmblem} 
                   alt="TAMV" 
                   className="w-28 h-28 rounded-full relative z-10 border-2 border-primary/50"
                 />
               </div>
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-4">
               <span className="gradient-text">TAMV</span>
               <span className="text-foreground"> DM-X4</span>
             </h1>
             <p className="text-xl md:text-2xl text-muted-foreground font-space max-w-3xl mx-auto">
               El primer <span className="text-primary">ecosistema civilizacional</span> del mundo.
               <br />
               <span className="text-secondary">Web 4.0</span> · <span className="text-accent">XR 4D</span> · <span className="text-primary">IA Ética</span>
             </p>
           </div>
 
           {/* Feature pills */}
           <div className="flex flex-wrap justify-center gap-3 mb-10 fade-in-up stagger-2">
             {features.map((feature, i) => (
               <div 
                 key={i}
                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm"
               >
                 <feature.icon className="w-4 h-4 text-primary" />
                 <span className="text-sm font-medium">{feature.title}</span>
                 <span className="text-xs text-muted-foreground hidden sm:inline">— {feature.desc}</span>
               </div>
             ))}
           </div>
 
           {/* CTA buttons */}
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up stagger-3">
             <Link to="/auth">
               <Button size="lg" className="btn-7g text-lg px-8 py-6 h-auto">
                 <Rocket className="w-5 h-5" />
                 Entrar al Metaverso
                 <ArrowRight className="w-5 h-5" />
               </Button>
             </Link>
             <Link to="/docs">
               <Button 
                 size="lg" 
                 variant="outline" 
                 className="text-lg px-8 py-6 h-auto border-primary/30 hover:bg-primary/10"
               >
                 <Play className="w-5 h-5" />
                 Ver Documentación
               </Button>
             </Link>
           </div>
 
           {/* Stats grid */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto fade-in-up stagger-4">
             {stats.map((stat, i) => (
               <div key={i} className="metric-7g">
                 <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                 <div className="metric-7g-value">{stat.value}</div>
                 <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
               </div>
             ))}
           </div>
 
           {/* Trust badges */}
           <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-muted-foreground fade-in-up stagger-5">
             <div className="flex items-center gap-2">
               <Star className="w-4 h-4 text-warning" />
               <span className="text-sm">Tecnología Post-Cuántica</span>
             </div>
             <div className="flex items-center gap-2">
               <Shield className="w-4 h-4 text-success" />
               <span className="text-sm">0 Brechas de Seguridad</span>
             </div>
             <div className="flex items-center gap-2">
               <Globe className="w-4 h-4 text-primary" />
               <span className="text-sm">Arquitectura Federada</span>
             </div>
           </div>
         </div>
       </div>
 
       {/* Bottom gradient fade */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
     </section>
   );
 }