 import { Link } from "react-router-dom";
 import { 
   Brain, Sparkles, Shield, Landmark, Music, GraduationCap,
   Globe, Users, Palette, Video, Radio, BookOpen,
   ArrowRight, Zap, Star
 } from "lucide-react";
 
 const services = [
   {
     icon: Brain,
     title: "Isabella AI™",
     description: "IA emocional y ética con explicabilidad total. El núcleo consciente del metaverso.",
     path: "/isabella",
     color: "primary",
     stats: { label: "Precisión Ética", value: "99.2%" },
     badge: "Núcleo",
   },
   {
     icon: Sparkles,
     title: "DreamSpaces 4D",
     description: "Construye y explora metaversos inmersivos con experiencias multisensoriales.",
     path: "/dreamspaces",
     color: "secondary",
     stats: { label: "Espacios Creados", value: "156K" },
     badge: "XR/VR",
   },
   {
     icon: Shield,
     title: "DEKATEOTL™",
     description: "Sistema de seguridad con 11 capas de blindaje cuántico-emocional.",
     path: "/security",
     color: "accent",
     stats: { label: "Amenazas Bloqueadas", value: "1.2M" },
     badge: "Seguridad",
   },
   {
     icon: Landmark,
     title: "Motor Económico",
     description: "Economía justa donde 75% de ingresos van a creadores. Blockchain MSR.",
     path: "/motor-economico",
     color: "warning",
     stats: { label: "Para Creadores", value: "75%" },
     badge: "DeFi",
   },
   {
     icon: GraduationCap,
     title: "UTAMV",
     description: "Universidad inmersiva con cursos XR, certificaciones y mentorías.",
     path: "/utamv",
     color: "success",
     stats: { label: "Cursos Activos", value: "2.4K" },
     badge: "Educación",
   },
   {
     icon: Music,
     title: "KAOS Music",
     description: "Plataforma de música 3D espacial con conciertos inmersivos en vivo.",
     path: "/kaos",
     color: "cosmic",
     stats: { label: "Artistas", value: "45K" },
     badge: "Audio 10D",
   },
   {
     icon: Users,
     title: "DAO Governance",
     description: "Gobernanza descentralizada con votación cuadrática y democracia líquida.",
     path: "/dao",
     color: "plasma",
     stats: { label: "Propuestas Activas", value: "127" },
     badge: "Web3",
   },
   {
     icon: Palette,
     title: "Marketplace",
     description: "Mercado de NFTs, activos digitales y experiencias tokenizadas.",
     path: "/marketplace",
     color: "nebula",
     stats: { label: "NFTs Listados", value: "89K" },
     badge: "NFT",
   },
 ];
 
 const getColorClasses = (color: string) => {
   const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
     primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30", glow: "shadow-primary/30" },
     secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/30", glow: "shadow-secondary/30" },
     accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30", glow: "shadow-accent/30" },
     warning: { bg: "bg-warning/10", text: "text-warning", border: "border-warning/30", glow: "shadow-warning/30" },
     success: { bg: "bg-success/10", text: "text-success", border: "border-success/30", glow: "shadow-success/30" },
     cosmic: { bg: "bg-cosmic/10", text: "text-cosmic", border: "border-cosmic/30", glow: "shadow-cosmic/30" },
     plasma: { bg: "bg-plasma/10", text: "text-plasma", border: "border-plasma/30", glow: "shadow-plasma/30" },
     nebula: { bg: "bg-nebula/10", text: "text-nebula", border: "border-nebula/30", glow: "shadow-nebula/30" },
   };
   return colors[color] || colors.primary;
 };
 
 export default function ServicesGrid7G() {
   return (
     <section className="py-24 relative">
       <div className="container mx-auto px-6">
         {/* Section header */}
         <div className="text-center mb-16">
           <div className="badge-7g mx-auto mb-6">
             <span className="text-sm">35+ Servicios Integrados</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
             <span className="gradient-text">Ecosistema</span> Completo
           </h2>
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Todo lo que necesitas para crear, conectar y prosperar en la civilización digital del futuro.
           </p>
         </div>
 
         {/* Services grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {services.map((service, i) => {
             const colors = getColorClasses(service.color);
             return (
               <Link 
                 key={i} 
                 to={service.path}
                 className="group"
               >
                 <div className={`card-7g p-6 h-full transition-all duration-500 hover:shadow-lg ${colors.glow}`}>
                   {/* Badge */}
                   <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} mb-4`}>
                     <Zap className="w-3 h-3" />
                     {service.badge}
                   </div>
 
                   {/* Icon */}
                   <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                     <service.icon className={`w-7 h-7 ${colors.text}`} />
                   </div>
 
                   {/* Content */}
                   <h3 className="text-xl font-orbitron font-semibold mb-2 group-hover:text-primary transition-colors">
                     {service.title}
                   </h3>
                   <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                     {service.description}
                   </p>
 
                   {/* Stats */}
                   <div className="flex items-center justify-between pt-4 border-t border-border/50">
                     <div>
                       <div className={`text-lg font-bold ${colors.text}`}>{service.stats.value}</div>
                       <div className="text-xs text-muted-foreground">{service.stats.label}</div>
                     </div>
                     <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                   </div>
                 </div>
               </Link>
             );
           })}
         </div>
 
         {/* Bottom CTA */}
         <div className="text-center mt-12">
           <Link 
             to="/docs" 
             className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
           >
             <BookOpen className="w-5 h-5" />
             <span>Ver documentación completa</span>
             <ArrowRight className="w-4 h-4" />
           </Link>
         </div>
       </div>
     </section>
   );
 }