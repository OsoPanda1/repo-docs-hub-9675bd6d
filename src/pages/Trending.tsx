import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import QuantumBackground from "@/components/QuantumBackground";
import { 
  TrendingUp, Hash, Flame, Users, Music, Palette, 
  Gamepad2, BookOpen, Globe, Sparkles, Eye, Heart,
  MessageCircle, Share2, ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Trending = () => {
  const [timeFilter, setTimeFilter] = useState("24h");

  const trendingTopics = [
    { rank: 1, tag: "#MetaversoTAMV", posts: "45.2K", change: "+234%", category: "Tecnología", heat: 98 },
    { rank: 2, tag: "#DreamSpaces", posts: "32.8K", change: "+156%", category: "XR", heat: 92 },
    { rank: 3, tag: "#IsabellaAI", posts: "28.4K", change: "+189%", category: "IA", heat: 88 },
    { rank: 4, tag: "#ConciertoKAOS", posts: "21.7K", change: "+312%", category: "Música", heat: 95 },
    { rank: 5, tag: "#ArteDigitalMX", posts: "18.9K", change: "+87%", category: "Arte", heat: 75 },
    { rank: 6, tag: "#DAOVoting", posts: "15.2K", change: "+67%", category: "Gobernanza", heat: 68 },
    { rank: 7, tag: "#NFTsMexicanos", posts: "12.8K", change: "+123%", category: "Blockchain", heat: 71 },
    { rank: 8, tag: "#UTAMVCertificado", posts: "9.5K", change: "+45%", category: "Educación", heat: 55 },
  ];

  const trendingCreators = [
    { name: "QuantumArtist", handle: "@quantum_art", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=quantum", followers: "245K", growth: "+12.4K", verified: true },
    { name: "NeonDreamer", handle: "@neon_dreams", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neon", followers: "189K", growth: "+8.7K", verified: true },
    { name: "CosmicFlow", handle: "@cosmic_flow", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cosmic", followers: "156K", growth: "+15.2K", verified: true },
    { name: "MetaBuilder", handle: "@meta_build", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=meta", followers: "134K", growth: "+6.3K", verified: false },
  ];

  const viralContent = [
    { type: "video", title: "Mi primer DreamSpace 4D", creator: "@cosmic_flow", views: "2.3M", likes: "456K", thumbnail: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400" },
    { type: "post", title: "Isabella AI salvó mi noche", creator: "@healing_soul", views: "1.8M", likes: "312K", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" },
    { type: "dreamspace", title: "Nebulosa Cristalina", creator: "@quantum_art", views: "987K", likes: "234K", thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400" },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Música": return Music;
      case "Arte": return Palette;
      case "XR": return Globe;
      case "Tecnología": return Sparkles;
      case "Educación": return BookOpen;
      default: return Hash;
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
              <Flame className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-orbitron gradient-text">Tendencias</h1>
              <p className="text-muted-foreground">Lo más viral del Omniverso TAMV</p>
            </div>
          </div>
          
          {/* Time Filter */}
          <div className="flex gap-2">
            {["1h", "24h", "7d", "30d"].map((filter) => (
              <Button
                key={filter}
                variant={timeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeFilter(filter)}
                className={timeFilter === filter ? "btn-quantum" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="topics" className="space-y-6">
          <TabsList className="glass-effect p-1">
            <TabsTrigger value="topics" className="gap-2">
              <Hash className="w-4 h-4" />
              Temas
            </TabsTrigger>
            <TabsTrigger value="creators" className="gap-2">
              <Users className="w-4 h-4" />
              Creadores
            </TabsTrigger>
            <TabsTrigger value="viral" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              Contenido Viral
            </TabsTrigger>
          </TabsList>

          {/* Trending Topics */}
          <TabsContent value="topics" className="space-y-4">
            <div className="grid gap-3">
              {trendingTopics.map((topic, idx) => {
                const CategoryIcon = getCategoryIcon(topic.category);
                return (
                  <Card 
                    key={topic.tag} 
                    className="glass-card border-border/50 hover:border-primary/50 transition-all cursor-pointer fade-in-up"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        {/* Rank */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-orbitron font-bold text-lg ${
                          topic.rank <= 3 
                            ? "bg-gradient-to-br from-primary/30 to-secondary/30 text-primary" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          #{topic.rank}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Hash className="w-4 h-4 text-primary" />
                            <span className="font-semibold text-lg">{topic.tag.slice(1)}</span>
                            <Badge variant="outline" className="text-xs">
                              <CategoryIcon className="w-3 h-3 mr-1" />
                              {topic.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                            <span>{topic.posts} posts</span>
                            <span className="text-primary font-medium">{topic.change}</span>
                          </div>
                        </div>

                        {/* Heat Indicator */}
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-primary">
                            <Flame className="w-4 h-4" />
                            <span className="font-bold">{topic.heat}°</span>
                          </div>
                          <div className="w-20 h-2 bg-muted rounded-full mt-2 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                              style={{ width: `${topic.heat}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Trending Creators */}
          <TabsContent value="creators" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {trendingCreators.map((creator, idx) => (
                <Card 
                  key={creator.handle} 
                  className="glass-card border-border/50 fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 ring-2 ring-primary/30">
                        <AvatarImage src={creator.avatar} />
                        <AvatarFallback>{creator.name[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-lg">{creator.name}</span>
                          {creator.verified && (
                            <Badge variant="secondary" className="text-xs bg-primary/20 text-primary">
                              ✓
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{creator.handle}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className="text-foreground font-medium">{creator.followers} seguidores</span>
                          <span className="text-primary">+{creator.growth} esta semana</span>
                        </div>
                      </div>

                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Seguir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Viral Content */}
          <TabsContent value="viral" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              {viralContent.map((content, idx) => (
                <Card 
                  key={content.title} 
                  className="glass-card border-border/50 overflow-hidden group fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={content.thumbnail} 
                      alt={content.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm">
                      {content.type === "video" && "🎬 Video"}
                      {content.type === "post" && "📝 Post"}
                      {content.type === "dreamspace" && "🌌 DreamSpace"}
                    </Badge>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-semibold text-lg truncate">{content.title}</h3>
                      <p className="text-sm text-muted-foreground">{content.creator}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {content.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {content.likes}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

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

export default Trending;