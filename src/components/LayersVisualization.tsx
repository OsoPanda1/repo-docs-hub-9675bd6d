 import { useState } from 'react';
 import { Badge } from "@/components/ui/badge";
 import { 
   Cpu, Users, Coins, Glasses, Scale, BookOpen, Database,
   ChevronRight, Check, AlertTriangle
 } from "lucide-react";
 
 const layers = [
   {
     id: 0,
     name: "L0 HARDWARE",
     subtitle: "Hollow Wall · Hologram Projectors",
     icon: Database,
     color: "from-slate-500 to-slate-600",
     status: "active",
     modules: ["Hollow Wall", "Hologram Projectors", "Positional Tracking"],
     health: 100,
   },
   {
     id: 1,
     name: "L1 CORE",
     subtitle: "SovereignController · Isabella Núcleo",
     icon: Cpu,
     color: "from-cyan-500 to-cyan-600",
     status: "active",
     modules: ["SovereignController", "Isabella Núcleo", "SINDÉRESIS-X Bursts", "Anubis Shell"],
     health: 100,
   },
   {
     id: 2,
     name: "L2 SOCIAL",
     subtitle: "Nexus · Streams · Puentes Oníricos",
     icon: Users,
     color: "from-blue-500 to-blue-600",
     status: "active",
     modules: ["Nexus Social", "Live Streams", "Puentes Oníricos", "Comunidades"],
     health: 98,
   },
   {
     id: 3,
     name: "L3 ECON",
     subtitle: "Nubiwallet · V-Gifts · Resonance Mint",
     icon: Coins,
     color: "from-amber-500 to-amber-600",
     status: "active",
     modules: ["Nubiwallet", "V-Gifts", "Resonance Mint", "ID-Nvida", "Korima Codex"],
     health: 100,
   },
   {
     id: 4,
     name: "L4 XR",
     subtitle: "DreamSpaces 4D · HyperRender · Audio Kaos",
     icon: Glasses,
     color: "from-purple-500 to-purple-600",
     status: "active",
     modules: ["DreamSpaces 4D", "HyperRender", "Audio Kaos 3D", "WebXR Engine"],
     health: 97,
   },
   {
     id: 5,
     name: "L5 GOV",
     subtitle: "MSR Repair · Metagobernanza · DAOs",
     icon: Scale,
     color: "from-pink-500 to-pink-600",
     status: "active",
     modules: ["MSR Repair", "Metagobernanza", "DAOs Híbridas", "Ojo Ra/Quetzalcoatl"],
     health: 100,
   },
   {
     id: 6,
     name: "L6 META",
     subtitle: "BookPI · API Docs · Admin Aztek",
     icon: BookOpen,
     color: "from-rose-500 to-rose-600",
     status: "active",
     modules: ["BookPI", "API Docs", "Admin Aztek", "EOCT Triggers"],
     health: 99,
   },
 ];
 
 export default function LayersVisualization() {
   const [activeLayer, setActiveLayer] = useState<number | null>(null);
 
   return (
     <section className="py-24 relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 grid-7g opacity-30" />
 
       <div className="container mx-auto px-6 relative z-10">
         {/* Header */}
         <div className="text-center mb-16">
           <div className="badge-7g mx-auto mb-6">
             <span className="text-sm">Arquitectura Federada</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
             <span className="gradient-text">7 Capas</span> Federadas
           </h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Arquitectura modular inspirada en OSI, diseñada para resiliencia, escalabilidad y soberanía absoluta.
           </p>
         </div>
 
         {/* Layers visualization */}
         <div className="max-w-4xl mx-auto">
           <div className="space-y-3">
             {layers.map((layer, index) => (
               <div
                 key={layer.id}
                 className={`
                   relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer
                   ${activeLayer === layer.id 
                     ? 'border-primary bg-card/80 shadow-lg shadow-primary/20' 
                     : 'border-border/50 bg-card/40 hover:border-primary/50'}
                 `}
                 onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
               >
                 {/* Main row */}
                 <div className="flex items-center gap-4 p-4">
                   {/* Layer indicator */}
                   <div className={`
                     w-12 h-12 rounded-xl flex items-center justify-center
                     bg-gradient-to-br ${layer.color} text-white
                   `}>
                     <layer.icon className="w-6 h-6" />
                   </div>
 
                   {/* Info */}
                   <div className="flex-1 min-w-0">
                     <div className="flex items-center gap-2">
                       <h3 className="font-orbitron font-semibold text-lg">{layer.name}</h3>
                       <Badge 
                         variant={layer.status === 'active' ? 'default' : 'secondary'}
                         className="text-xs"
                       >
                         {layer.status === 'active' ? (
                           <><Check className="w-3 h-3 mr-1" /> Activo</>
                         ) : (
                           <><AlertTriangle className="w-3 h-3 mr-1" /> Pendiente</>
                         )}
                       </Badge>
                     </div>
                     <p className="text-sm text-muted-foreground truncate">{layer.subtitle}</p>
                   </div>
 
                   {/* Health */}
                   <div className="hidden sm:flex items-center gap-3">
                     <div className="text-right">
                       <div className="text-sm font-medium text-success">{layer.health}%</div>
                       <div className="text-xs text-muted-foreground">Health</div>
                     </div>
                     <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${activeLayer === layer.id ? 'rotate-90' : ''}`} />
                   </div>
                 </div>
 
                 {/* Expanded content */}
                 {activeLayer === layer.id && (
                   <div className="px-4 pb-4 pt-0 border-t border-border/50">
                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                       {layer.modules.map((module, i) => (
                         <div 
                           key={i}
                           className="px-3 py-2 rounded-lg bg-muted/50 text-sm text-muted-foreground border border-border/50"
                         >
                           {module}
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
 
                 {/* Connection line */}
                 {index < layers.length - 1 && (
                   <div className="absolute -bottom-3 left-1/2 w-px h-3 bg-gradient-to-b from-border to-transparent z-10" />
                 )}
               </div>
             ))}
           </div>
 
           {/* Connection description */}
           <div className="mt-8 text-center">
             <p className="text-sm text-muted-foreground">
               Flujo de datos bidireccional via <span className="text-primary">Event Bus</span> (Kafka + WebSockets)
               <br />
               Orquestación con <span className="text-secondary">ArgoCD + Kubernetes Edge</span>
             </p>
           </div>
         </div>
       </div>
     </section>
   );
 }