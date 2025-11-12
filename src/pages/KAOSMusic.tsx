import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Music, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack,
  Heart,
  Share2,
  Download,
  Radio,
  ListMusic,
  Mic2,
  Volume2,
  Repeat,
  Shuffle,
  Search
} from "lucide-react";
import { useState } from "react";

const KAOSMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);

  const featuredTracks = [
    {
      id: 1,
      title: "Quantum Dreams",
      artist: "KAOS Collective",
      album: "Digital Emotions Vol.1",
      duration: "4:32",
      plays: "124K",
      likes: 8934,
      image: "/placeholder.svg",
      genre: "Electronic"
    },
    {
      id: 2,
      title: "Latinoamérica Digital",
      artist: "Isabella AI feat. Anubis",
      album: "Civilización Cuántica",
      duration: "5:18",
      plays: "892K",
      likes: 45671,
      image: "/placeholder.svg",
      genre: "Hybrid"
    },
    {
      id: 3,
      title: "DreamSpace Odyssey",
      artist: "XR Sound Engineers",
      album: "Spatial Audio Collection",
      duration: "6:45",
      plays: "234K",
      likes: 12456,
      image: "/placeholder.svg",
      genre: "Ambient"
    },
    {
      id: 4,
      title: "Código Emocional",
      artist: "Neural Beats",
      album: "AI Compositions",
      duration: "3:54",
      plays: "567K",
      likes: 23789,
      image: "/placeholder.svg",
      genre: "AI Generated"
    }
  ];

  const playlists = [
    { name: "Top TAMV 2025", tracks: 50, image: "/placeholder.svg" },
    { name: "Chill XR", tracks: 34, image: "/placeholder.svg" },
    { name: "Latinoamérica Rising", tracks: 67, image: "/placeholder.svg" },
    { name: "Focus Deep", tracks: 42, image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10 pb-32">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-orbitron">
            KAOS Music Studio
          </h1>
          <p className="text-muted-foreground">
            Audio Posicional 3D, Voz Emocional y Síntesis Cuántica
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Buscar artistas, canciones, álbumes..." 
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="discover" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="discover">Descubrir</TabsTrigger>
            <TabsTrigger value="library">Mi Biblioteca</TabsTrigger>
            <TabsTrigger value="radio">Radio TAMV</TabsTrigger>
            <TabsTrigger value="studio">Studio</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            {/* Featured Track */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20">
                  <img 
                    src={featuredTracks[1].image}
                    alt={featuredTracks[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">Trending #1</Badge>
                  <h2 className="text-3xl font-bold mb-2">{featuredTracks[1].title}</h2>
                  <p className="text-xl text-muted-foreground mb-4">{featuredTracks[1].artist}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{featuredTracks[1].plays} reproducciones</span>
                    <span>•</span>
                    <span>{featuredTracks[1].likes.toLocaleString()} likes</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="lg">
                      <Play className="h-5 w-5 mr-2" />
                      Reproducir
                    </Button>
                    <Button size="lg" variant="outline">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Track List */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Más Escuchado Hoy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {featuredTracks.map((track, idx) => (
                    <div 
                      key={track.id}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 cursor-pointer group transition-colors"
                    >
                      <div className="text-muted-foreground font-medium w-6">
                        {idx + 1}
                      </div>
                      <div className="w-12 h-12 rounded overflow-hidden relative">
                        <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{track.title}</p>
                        <p className="text-sm text-muted-foreground">{track.artist}</p>
                      </div>
                      <Badge variant="outline">{track.genre}</Badge>
                      <span className="text-sm text-muted-foreground">{track.duration}</span>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Playlists */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Playlists Destacadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {playlists.map((playlist, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="aspect-square rounded-lg overflow-hidden mb-2 relative">
                        <img src={playlist.image} alt={playlist.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="lg" className="rounded-full">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <h3 className="font-medium">{playlist.name}</h3>
                      <p className="text-sm text-muted-foreground">{playlist.tracks} canciones</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="library">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="py-12">
                <div className="text-center">
                  <ListMusic className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold mb-2">Tu Biblioteca Está Vacía</h3>
                  <p className="text-muted-foreground mb-4">
                    Empieza a guardar tus canciones y playlists favoritas
                  </p>
                  <Button>Explorar Música</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="radio">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="py-12">
                <div className="text-center">
                  <Radio className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Radio TAMV 24/7</h3>
                  <p className="text-muted-foreground mb-4">
                    Transmisión continua de lo mejor de la música TAMV
                  </p>
                  <Button size="lg">
                    <Play className="h-5 w-5 mr-2" />
                    Escuchar Ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="studio">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic2 className="h-5 w-5" />
                  Estudio de Producción
                </CardTitle>
                <CardDescription>
                  Crea y publica tu música con herramientas profesionales
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-primary/20 cursor-pointer hover:border-primary/40 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <Music className="h-12 w-12 mx-auto mb-3 text-primary" />
                      <h3 className="font-medium mb-2">Subir Canción</h3>
                      <p className="text-sm text-muted-foreground">Comparte tu música con la comunidad</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 cursor-pointer hover:border-primary/40 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <Mic2 className="h-12 w-12 mx-auto mb-3 text-primary" />
                      <h3 className="font-medium mb-2">Grabar Audio</h3>
                      <p className="text-sm text-muted-foreground">Graba directamente en el navegador</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 cursor-pointer hover:border-primary/40 transition-colors">
                    <CardContent className="pt-6 text-center">
                      <Radio className="h-12 w-12 mx-auto mb-3 text-primary" />
                      <h3 className="font-medium mb-2">Crear Playlist</h3>
                      <p className="text-sm text-muted-foreground">Organiza tus canciones favoritas</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Fixed Player */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* Current Track */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded overflow-hidden">
                <img src={featuredTracks[0].image} alt="Current" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium text-sm">{featuredTracks[0].title}</p>
                <p className="text-xs text-muted-foreground">{featuredTracks[0].artist}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Shuffle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button 
                  size="sm" 
                  className="rounded-full h-10 w-10"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="sm">
                  <SkipForward className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Repeat className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 w-full">
                <span className="text-xs text-muted-foreground">1:24</span>
                <Slider defaultValue={[30]} max={100} step={1} className="flex-1" />
                <span className="text-xs text-muted-foreground">4:32</span>
              </div>
            </div>

            {/* Volume */}
            <div className="flex items-center justify-end gap-2">
              <Volume2 className="h-5 w-5" />
              <Slider 
                value={volume} 
                onValueChange={setVolume}
                max={100} 
                step={1} 
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KAOSMusic;
