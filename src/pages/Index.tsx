import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuantumBackground from "@/components/QuantumBackground";
import FloatingParticles from "@/components/FloatingParticles";
import FeedPost from "@/components/social/FeedPost";
import StoryBubble from "@/components/social/StoryBubble";
import ReelCard from "@/components/social/ReelCard";
import LiveStreamCard from "@/components/social/LiveStreamCard";
import DreamSpacePreview from "@/components/social/DreamSpacePreview";
import TrendingSidebar from "@/components/social/TrendingSidebar";
import IsabellaFloatingButton from "@/components/social/IsabellaFloatingButton";
import { Link } from "react-router-dom";
import { 
  Home, TrendingUp, Video, Sparkles, GraduationCap, Music, 
  Landmark, User, Brain, Search, Bell, MessageCircle, Plus,
  Flame, Radio, Users, Palette, Globe, Zap, Heart, Star,
  Camera, Mic, Send, Image as ImageIcon
} from "lucide-react";
import tamvEmblem from "@/assets/tamv-emblem.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [postText, setPostText] = useState("");

  const stories = [
    { id: 1, name: "Tu Historia", avatar: tamvEmblem, isOwn: true },
    { id: 2, name: "NeonDreamer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neon", hasNew: true },
    { id: 3, name: "QuantumArt", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=quantum", hasNew: true },
    { id: 4, name: "CosmicFlow", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cosmic", isLive: true },
    { id: 5, name: "MetaCreator", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=meta", hasNew: true },
    { id: 6, name: "DreamWeaver", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dream", hasNew: true },
    { id: 7, name: "PixelMaster", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixel" },
  ];

  const posts = [
    {
      id: 1,
      author: { name: "NeonDreamer", handle: "@neondreamer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neon", verified: true },
      content: "🌌 Acabo de lanzar mi nuevo DreamSpace inmersivo! Explora un universo de neón donde la música cobra vida en 3D. ✨ #TAMV #DreamSpaces #Metaverso",
      media: { type: "image" as const, url: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800" },
      stats: { likes: 2847, comments: 156, shares: 89, saves: 234 },
      timestamp: "2h",
      hasNFT: true
    },
    {
      id: 2, 
      author: { name: "QuantumArtist", handle: "@quantumart", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=quantum", verified: true },
      content: "Isabella AI me ayudó a superar un bloqueo creativo increíble. Esta IA realmente entiende las emociones. 🧠💜 #IsabellaAI #Creatividad",
      stats: { likes: 1923, comments: 234, shares: 67, saves: 189 },
      timestamp: "4h"
    },
    {
      id: 3,
      author: { name: "MetaBuilder", handle: "@metabuilder", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=builder", verified: false },
      content: "🏗️ Tutorial: Cómo construir tu primer espacio 3D en TAMV en menos de 10 minutos. ¡La revolución del metaverso está aquí!",
      media: { type: "video" as const, url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
      stats: { likes: 4521, comments: 312, shares: 189, saves: 567 },
      timestamp: "6h"
    }
  ];

  const reels = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400", views: "1.2M", author: "CosmicFlow", duration: "0:45" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400", views: "856K", author: "NeonWave", duration: "1:20" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400", views: "2.1M", author: "DigitalDreams", duration: "0:30" },
    { id: 4, thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400", views: "432K", author: "MetaMaster", duration: "0:55" },
  ];

  const liveStreams = [
    { id: 1, title: "🎨 Creando Arte 3D en Vivo", host: "ArtMaster", viewers: 12453, thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", category: "Arte Digital" },
    { id: 2, title: "🎵 Concierto Sensorial KAOS", host: "DJ Quantum", viewers: 45678, thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600", category: "Música" },
    { id: 3, title: "🌌 Tour por DreamSpaces Épicos", host: "SpaceExplorer", viewers: 8934, thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600", category: "Exploración" },
  ];

  const dreamSpaces = [
    { id: 1, name: "Nebulosa Cristalina", creator: "CosmicCreator", visitors: 124500, preview: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400" },
    { id: 2, name: "Jardín Cuántico", creator: "QuantumGardener", visitors: 89300, preview: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400" },
    { id: 3, name: "Océano Digital", creator: "DeepDiver", visitors: 156700, preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  ];

  const navItems = [
    { icon: Home, label: "Inicio", path: "/" },
    { icon: Flame, label: "Tendencias", path: "/trending" },
    { icon: Video, label: "Lives", path: "/lives" },
    { icon: Sparkles, label: "DreamSpaces", path: "/dreamspaces" },
    { icon: GraduationCap, label: "Universidad", path: "/university" },
    { icon: Music, label: "KAOS Music", path: "/kaos" },
    { icon: Landmark, label: "Banco TAMV", path: "/economy" },
    { icon: Users, label: "DAO", path: "/dao" },
    { icon: Palette, label: "Marketplace", path: "/marketplace" },
    { icon: User, label: "Mi Perfil", path: "/dashboard" },
    { icon: Brain, label: "Isabella AI", path: "/isabella" },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <QuantumBackground />
      <FloatingParticles count={80} />
      
      <div className="relative z-10 flex">
        {/* Left Sidebar - Navigation */}
        <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-border/50 bg-background/80 backdrop-blur-xl p-4">
          <div className="flex items-center gap-3 mb-8 px-2">
            <img src={tamvEmblem} alt="TAMV" className="w-10 h-10 rounded-full" />
            <span className="font-orbitron font-bold text-xl gradient-text">TAMV</span>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/10 transition-all group"
              >
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>

          <Button className="w-full mt-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
            <Plus className="w-4 h-4 mr-2" />
            Crear Post
          </Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Top Bar */}
          <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-3">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar en TAMV..." 
                    className="pl-10 bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] flex items-center justify-center">3</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
              </div>
            </div>
          </header>

          {/* Stories Section */}
          <section className="px-4 py-4 border-b border-border/50">
            <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {stories.map((story) => (
                  <StoryBubble key={story.id} story={story} />
                ))}
              </div>
            </div>
          </section>

          {/* Create Post Section */}
          <section className="px-4 py-4 border-b border-border/50">
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-4 border border-border/50">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <Input
                      placeholder="¿Qué está pasando en tu metaverso?"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      className="border-0 bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0"
                    />
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-primary">
                          <ImageIcon className="w-4 h-4 mr-1" />
                          Imagen
                        </Button>
                        <Button variant="ghost" size="sm" className="text-purple-500">
                          <Video className="w-4 h-4 mr-1" />
                          Video
                        </Button>
                        <Button variant="ghost" size="sm" className="text-cyan-500">
                          <Sparkles className="w-4 h-4 mr-1" />
                          3D Space
                        </Button>
                        <Button variant="ghost" size="sm" className="text-pink-500">
                          <Radio className="w-4 h-4 mr-1" />
                          Live
                        </Button>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600">
                        <Send className="w-4 h-4 mr-1" />
                        Publicar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Feed Tabs */}
          <section className="px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b border-border/50 rounded-none p-0 h-auto mb-6">
                  <TabsTrigger 
                    value="feed" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Para Ti
                  </TabsTrigger>
                  <TabsTrigger 
                    value="reels"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Reels
                  </TabsTrigger>
                  <TabsTrigger 
                    value="live"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                  >
                    <Radio className="w-4 h-4 mr-2" />
                    En Vivo
                  </TabsTrigger>
                  <TabsTrigger 
                    value="spaces"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    DreamSpaces
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="feed" className="mt-0 space-y-4">
                  {posts.map((post) => (
                    <FeedPost key={post.id} post={post} />
                  ))}
                </TabsContent>

                <TabsContent value="reels" className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {reels.map((reel) => (
                      <ReelCard key={reel.id} reel={reel} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="live" className="mt-0 space-y-4">
                  {liveStreams.map((stream) => (
                    <LiveStreamCard key={stream.id} stream={stream} />
                  ))}
                </TabsContent>

                <TabsContent value="spaces" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {dreamSpaces.map((space) => (
                      <DreamSpacePreview key={space.id} space={space} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>

        {/* Right Sidebar - Trending & Widgets */}
        <aside className="hidden xl:block w-80 h-screen sticky top-0 border-l border-border/50 bg-background/80 backdrop-blur-xl overflow-y-auto">
          <TrendingSidebar />
        </aside>
      </div>

      {/* Isabella AI Floating Button */}
      <IsabellaFloatingButton />
    </div>
  );
};

export default Index;
