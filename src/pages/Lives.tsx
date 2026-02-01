import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuantumBackground from "@/components/QuantumBackground";
import { 
  Radio, Users, Eye, Music, Palette, Gamepad2, 
  GraduationCap, MessageCircle, Heart, Share2, 
  Play, Volume2, Maximize2
} from "lucide-react";
import { Link } from "react-router-dom";

const Lives = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos", icon: Radio },
    { id: "music", name: "Música", icon: Music },
    { id: "art", name: "Arte", icon: Palette },
    { id: "gaming", name: "Gaming", icon: Gamepad2 },
    { id: "education", name: "Educación", icon: GraduationCap },
  ];

  const featuredLive = {
    title: "🎵 Festival KAOS Sensorial - Día 2",
    host: { name: "DJ Quantum", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=djquantum", verified: true },
    viewers: 45678,
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200",
    category: "Música",
    tags: ["#KAOS", "#Festival", "#Live"],
    duration: "2:34:15"
  };

  const liveStreams = [
    { 
      id: 1, 
      title: "🎨 Creando Arte 3D en Vivo", 
      host: { name: "ArtMaster", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=artmaster", verified: true },
      viewers: 12453, 
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", 
      category: "Arte",
      tags: ["#Arte3D", "#Tutorial"]
    },
    { 
      id: 2, 
      title: "🌌 Tour por DreamSpaces Épicos", 
      host: { name: "SpaceExplorer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=explorer", verified: false },
      viewers: 8934, 
      thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600", 
      category: "Exploración",
      tags: ["#DreamSpaces", "#Tour"]
    },
    { 
      id: 3, 
      title: "🎮 Torneo XR Championship", 
      host: { name: "ProGamerMX", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=progamer", verified: true },
      viewers: 23456, 
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600", 
      category: "Gaming",
      tags: ["#Esports", "#XR"]
    },
    { 
      id: 4, 
      title: "📚 Masterclass: IA Emocional", 
      host: { name: "DrNeuron", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=drneuron", verified: true },
      viewers: 5678, 
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", 
      category: "Educación",
      tags: ["#UTAMV", "#IsabellaAI"]
    },
    { 
      id: 5, 
      title: "🎵 DJ Set Ambient Cósmico", 
      host: { name: "CosmicBeats", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cosmicbeats", verified: false },
      viewers: 7890, 
      thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600", 
      category: "Música",
      tags: ["#Ambient", "#Chill"]
    },
    { 
      id: 6, 
      title: "🖌️ Speed Painting NFT", 
      host: { name: "CryptoArtist", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cryptoartist", verified: true },
      viewers: 4321, 
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600", 
      category: "Arte",
      tags: ["#NFT", "#SpeedArt"]
    },
  ];

  const formatViewers = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <QuantumBackground />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-destructive/20 to-accent/20 border border-destructive/30 relative">
              <Radio className="w-8 h-8 text-destructive" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-orbitron gradient-text">En Vivo</h1>
              <p className="text-muted-foreground">Transmisiones en tiempo real del Omniverso</p>
            </div>
          </div>
        </div>

        {/* Featured Live */}
        <div className="mb-8 fade-in-up">
          <Card className="glass-card border-destructive/30 overflow-hidden group">
            <div className="aspect-video md:aspect-[21/9] relative overflow-hidden">
              <img 
                src={featuredLive.thumbnail} 
                alt={featuredLive.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              {/* Live Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge className="bg-destructive animate-pulse gap-1">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  EN VIVO
                </Badge>
                <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm">
                  {featuredLive.duration}
                </Badge>
              </div>

              {/* Viewers */}
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm gap-1">
                  <Eye className="w-4 h-4" />
                  {formatViewers(featuredLive.viewers)}
                </Badge>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <Badge variant="outline" className="mb-3">{featuredLive.category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-2">
                      {featuredLive.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 ring-2 ring-primary/50">
                        <AvatarImage src={featuredLive.host.avatar} />
                        <AvatarFallback>{featuredLive.host.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{featuredLive.host.name}</span>
                          {featuredLive.host.verified && <span className="text-primary">✓</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="lg" className="btn-quantum gap-2">
                      <Play className="w-5 h-5" />
                      Ver Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              className={`gap-2 whitespace-nowrap ${selectedCategory === cat.id ? "btn-quantum" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Live Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream, idx) => (
            <Card 
              key={stream.id} 
              className="glass-card border-border/50 overflow-hidden group cursor-pointer fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={stream.thumbnail} 
                  alt={stream.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Live Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-destructive animate-pulse gap-1 text-xs">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    LIVE
                  </Badge>
                </div>

                {/* Viewers */}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-background/50 backdrop-blur-sm gap-1 text-xs">
                    <Eye className="w-3 h-3" />
                    {formatViewers(stream.viewers)}
                  </Badge>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/30 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2 text-xs">{stream.category}</Badge>
                <h3 className="font-semibold line-clamp-1 mb-2">{stream.title}</h3>
                
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={stream.host.avatar} />
                    <AvatarFallback>{stream.host.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    {stream.host.name}
                    {stream.host.verified && <span className="text-primary text-xs">✓</span>}
                  </span>
                </div>

                <div className="flex gap-1 mt-3">
                  {stream.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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

export default Lives;