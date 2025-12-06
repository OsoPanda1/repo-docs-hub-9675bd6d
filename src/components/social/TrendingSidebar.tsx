import { TrendingUp, Hash, Sparkles, Music, Users, Zap, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const TrendingSidebar = () => {
  const trends = [
    { tag: "#MetaversoTAMV", posts: "23.4K", category: "Tecnología" },
    { tag: "#DreamSpaces", posts: "18.2K", category: "Creatividad" },
    { tag: "#IsabellaAI", posts: "15.7K", category: "IA" },
    { tag: "#ConciertoSensorial", posts: "12.1K", category: "Música" },
    { tag: "#ArteDigital", posts: "9.8K", category: "Arte" },
  ];

  const suggestedUsers = [
    { name: "VR Artist Pro", handle: "@vr_artist", avatar: "/placeholder.svg", followers: "125K", verified: true },
    { name: "Crypto DJ", handle: "@crypto_dj", avatar: "/placeholder.svg", followers: "89K", verified: true },
    { name: "Meta Creator", handle: "@meta_create", avatar: "/placeholder.svg", followers: "67K", verified: false },
  ];

  const upcomingEvents = [
    { title: "Concierto Cuántico", time: "Hoy 8PM", type: "Música" },
    { title: "Expo Arte 3D", time: "Mañana 3PM", type: "Arte" },
    { title: "Torneo XR", time: "Sáb 5PM", type: "Gaming" },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Oneiric Bridge Widget */}
      <div className="rounded-2xl p-4 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Puentes Oníricos</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Conecta con DreamSpaces aleatorios y descubre nuevos universos.
        </p>
        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
          <Sparkles className="w-4 h-4" />
          Iniciar Puente
        </Button>
      </div>

      {/* Trending Topics */}
      <div className="rounded-2xl p-4 glass-effect border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Tendencias</h3>
        </div>
        <div className="space-y-3">
          {trends.map((trend, index) => (
            <button 
              key={trend.tag}
              className="w-full flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
            >
              <span className="text-sm text-muted-foreground">{index + 1}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <Hash className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium text-foreground truncate">{trend.tag.slice(1)}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <Badge variant="outline" className="text-[10px] py-0 h-4">{trend.category}</Badge>
                  <span className="text-xs text-muted-foreground">{trend.posts} posts</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-2 text-primary">
          Ver más tendencias
        </Button>
      </div>

      {/* Upcoming Events */}
      <div className="rounded-2xl p-4 glass-effect border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <Music className="w-5 h-5 text-secondary" />
          <h3 className="font-semibold text-foreground">Próximos Eventos</h3>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <Link 
              key={event.title}
              to="/events"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                {event.type === "Música" && <Music className="w-5 h-5 text-primary" />}
                {event.type === "Arte" && <Sparkles className="w-5 h-5 text-secondary" />}
                {event.type === "Gaming" && <Zap className="w-5 h-5 text-aqua" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
                  {event.title}
                </p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>

      {/* Suggested Users */}
      <div className="rounded-2xl p-4 glass-effect border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-aqua" />
          <h3 className="font-semibold text-foreground">Creadores Sugeridos</h3>
        </div>
        <div className="space-y-3">
          {suggestedUsers.map((user) => (
            <div key={user.handle} className="flex items-center gap-3">
              <Avatar className="w-10 h-10 ring-2 ring-primary/30">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-medium text-sm text-foreground truncate">{user.name}</span>
                  {user.verified && (
                    <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{user.followers} seguidores</p>
              </div>
              <Button size="sm" variant="outline" className="text-xs h-7 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Seguir
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-xs text-muted-foreground space-y-2 px-2">
        <div className="flex flex-wrap gap-2">
          <Link to="/docs" className="hover:text-foreground transition-colors">Documentación</Link>
          <span>·</span>
          <Link to="/docs/privacy" className="hover:text-foreground transition-colors">Privacidad</Link>
          <span>·</span>
          <Link to="/docs/terms" className="hover:text-foreground transition-colors">Términos</Link>
        </div>
        <p className="text-muted-foreground/70">© 2025 TAMV DM-X4™ - Civilización Digital Soberana</p>
      </div>
    </div>
  );
};

export default TrendingSidebar;