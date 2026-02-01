import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import QuantumBackground from "@/components/QuantumBackground";
import { 
  Calendar as CalendarIcon, Clock, MapPin, Users, 
  Music, Palette, GraduationCap, Sparkles, 
  Bell, Share2, Ticket, Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Festival KAOS Sensorial 2026",
      description: "El mayor evento de música inmersiva en el metaverso. 48 horas de audio 10D y experiencias XR.",
      date: "2026-02-15",
      time: "20:00",
      location: "DreamSpace: Arena Cósmica",
      category: "Música",
      attendees: 45678,
      maxAttendees: 100000,
      price: "50 TC",
      featured: true,
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800"
    },
    {
      id: 2,
      title: "Exposición: Arte Digital Mexicano",
      description: "Celebración de artistas digitales mexicanos con NFTs exclusivos y galería 3D.",
      date: "2026-02-20",
      time: "18:00",
      location: "Galería XR Nacional",
      category: "Arte",
      attendees: 12345,
      maxAttendees: 50000,
      price: "Gratis",
      featured: false,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    },
    {
      id: 3,
      title: "UTAMV: Masterclass IA Emocional",
      description: "Aprende los fundamentos de Isabella AI y cómo crear experiencias empáticas.",
      date: "2026-02-22",
      time: "16:00",
      location: "Campus Virtual UTAMV",
      category: "Educación",
      attendees: 5678,
      maxAttendees: 10000,
      price: "25 TC",
      featured: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
    },
    {
      id: 4,
      title: "DAO Summit: Gobernanza Digital",
      description: "Cumbre anual de gobernanza descentralizada. Votaciones en vivo y propuestas ciudadanas.",
      date: "2026-03-01",
      time: "14:00",
      location: "Ágora Central TAMV",
      category: "Gobernanza",
      attendees: 8901,
      maxAttendees: 25000,
      price: "10 TC",
      featured: true,
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800"
    },
    {
      id: 5,
      title: "Torneo XR Championship Finals",
      description: "La gran final del campeonato de gaming XR. Premios de 1M TC.",
      date: "2026-03-05",
      time: "19:00",
      location: "Estadio Quantum",
      category: "Gaming",
      attendees: 34567,
      maxAttendees: 75000,
      price: "15 TC",
      featured: false,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Música": return Music;
      case "Arte": return Palette;
      case "Educación": return GraduationCap;
      case "Gobernanza": return Star;
      default: return Sparkles;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Música": return "from-purple-500/20 to-pink-500/20 border-purple-500/30";
      case "Arte": return "from-cyan-500/20 to-blue-500/20 border-cyan-500/30";
      case "Educación": return "from-green-500/20 to-emerald-500/20 border-green-500/30";
      case "Gobernanza": return "from-yellow-500/20 to-orange-500/20 border-yellow-500/30";
      default: return "from-primary/20 to-secondary/20 border-primary/30";
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <QuantumBackground />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
              <CalendarIcon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-orbitron gradient-text">Eventos</h1>
              <p className="text-muted-foreground">Experiencias únicas en el Omniverso TAMV</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-border/50 sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  Calendario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={es}
                  className="rounded-md"
                />
                
                <div className="mt-6 space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Categorías</h4>
                  {["Música", "Arte", "Educación", "Gobernanza", "Gaming"].map((cat) => {
                    const Icon = getCategoryIcon(cat);
                    return (
                      <button
                        key={cat}
                        className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{cat}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Featured Events */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-orbitron flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Eventos Destacados
              </h2>
              
              {upcomingEvents.filter(e => e.featured).map((event, idx) => {
                const CategoryIcon = getCategoryIcon(event.category);
                return (
                  <Card 
                    key={event.id} 
                    className={`glass-card overflow-hidden fade-in-up bg-gradient-to-br ${getCategoryColor(event.category)}`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90 hidden md:block" />
                        <Badge className="absolute top-3 left-3 bg-yellow-500/90 text-yellow-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Destacado
                        </Badge>
                      </div>
                      
                      <CardContent className="p-6 md:w-2/3">
                        <div className="flex items-start justify-between mb-3">
                          <Badge variant="outline" className="gap-1">
                            <CategoryIcon className="w-3 h-3" />
                            {event.category}
                          </Badge>
                          <Badge variant="secondary">{event.price}</Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold font-orbitron mb-2">{event.title}</h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {format(new Date(event.date), "d MMMM, yyyy", { locale: es })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {event.attendees.toLocaleString()} / {event.maxAttendees.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button className="btn-quantum gap-2">
                            <Ticket className="w-4 h-4" />
                            Reservar Lugar
                          </Button>
                          <Button variant="outline" size="icon">
                            <Bell className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* All Events */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-orbitron">Próximos Eventos</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {upcomingEvents.filter(e => !e.featured).map((event, idx) => {
                  const CategoryIcon = getCategoryIcon(event.category);
                  return (
                    <Card 
                      key={event.id} 
                      className="glass-card border-border/50 overflow-hidden group fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <Badge className="absolute top-3 left-3" variant="secondary">
                          {event.price}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4">
                        <Badge variant="outline" className="mb-2 gap-1 text-xs">
                          <CategoryIcon className="w-3 h-3" />
                          {event.category}
                        </Badge>
                        
                        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{event.title}</h3>
                        
                        <div className="flex flex-col gap-1 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3" />
                            {format(new Date(event.date), "d MMMM", { locale: es })} · {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {event.attendees.toLocaleString()} asistentes
                          </span>
                        </div>
                        
                        <Button className="w-full" variant="outline" size="sm">
                          Ver Detalles
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="gap-2">
              ← Volver al Inicio
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Events;