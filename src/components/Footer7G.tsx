 import { Link } from "react-router-dom";
 import { 
   Globe, Shield, Brain, BookOpen, Github, Twitter,
   Mail, MapPin, Heart
 } from "lucide-react";
 import tamvEmblem from "@/assets/tamv-emblem.jpg";
 
 const footerLinks = {
   servicios: [
     { label: "Isabella AI", path: "/isabella" },
     { label: "DreamSpaces", path: "/dreamspaces" },
     { label: "Motor Económico", path: "/motor-economico" },
     { label: "UTAMV", path: "/utamv" },
     { label: "KAOS Music", path: "/kaos" },
     { label: "Marketplace", path: "/marketplace" },
   ],
   tecnologia: [
     { label: "Arquitectura", path: "/docs/architecture" },
     { label: "DEKATEOTL™", path: "/security" },
     { label: "Blockchain MSR", path: "/docs/web45" },
     { label: "API Docs", path: "/docs/api" },
     { label: "Componentes", path: "/docs/components" },
   ],
   comunidad: [
     { label: "DAO", path: "/dao" },
     { label: "Documentación", path: "/docs" },
     { label: "Status", path: "/status" },
     { label: "Trending", path: "/trending" },
     { label: "Eventos", path: "/events" },
   ],
 };
 
 export default function Footer7G() {
   return (
     <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-xl">
       {/* Gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
 
       <div className="container mx-auto px-6 py-16 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
           {/* Brand section */}
           <div className="lg:col-span-2">
             <div className="flex items-center gap-3 mb-6">
               <img src={tamvEmblem} alt="TAMV" className="w-12 h-12 rounded-full" />
               <div>
                 <h3 className="font-orbitron font-bold text-xl gradient-text">TAMV DM-X4™</h3>
                 <p className="text-xs text-muted-foreground">Civilización Digital Soberana</p>
               </div>
             </div>
             <p className="text-muted-foreground mb-6 max-w-sm">
               El primer ecosistema civilizacional del mundo. Web 4.0, XR 4D, IA ética y economía justa.
               Donde la dignidad humana dicta lo que la tecnología puede hacer.
             </p>
             <div className="flex items-center gap-4">
               <a href="#" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors">
                 <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
               </a>
               <a href="#" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors">
                 <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
               </a>
               <a href="#" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors">
                 <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
               </a>
             </div>
           </div>
 
           {/* Links sections */}
           <div>
             <h4 className="font-orbitron font-semibold mb-4 text-foreground">Servicios</h4>
             <ul className="space-y-3">
               {footerLinks.servicios.map((link, i) => (
                 <li key={i}>
                   <Link 
                     to={link.path}
                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
                   >
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           <div>
             <h4 className="font-orbitron font-semibold mb-4 text-foreground">Tecnología</h4>
             <ul className="space-y-3">
               {footerLinks.tecnologia.map((link, i) => (
                 <li key={i}>
                   <Link 
                     to={link.path}
                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
                   >
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           <div>
             <h4 className="font-orbitron font-semibold mb-4 text-foreground">Comunidad</h4>
             <ul className="space-y-3">
               {footerLinks.comunidad.map((link, i) => (
                 <li key={i}>
                   <Link 
                     to={link.path}
                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
                   >
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
         </div>
 
         {/* Bottom section */}
         <div className="mt-16 pt-8 border-t border-border/50">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
               <span>© 2026 TAMV Holdings</span>
               <span>·</span>
               <span className="flex items-center gap-1">
                 Hecho con <Heart className="w-4 h-4 text-destructive" /> en México
               </span>
             </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
               <MapPin className="w-4 h-4" />
               <span>Real del Monte, Hidalgo, México</span>
             </div>
           </div>
           <p className="text-center text-xs text-muted-foreground mt-4">
             Creado por Edwin Oswaldo Castillo Trejo (Anubis Villaseñor)
             <br />
             "Donde la memoria limita al poder, y la dignidad dicta lo que la tecnología puede hacer."
           </p>
         </div>
       </div>
     </footer>
   );
 }