import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  ShoppingBag, 
  Search, 
  Filter,
  Star,
  Zap,
  Music,
  Image as ImageIcon,
  Video,
  Palette,
  TrendingUp
} from "lucide-react";

const Marketplace = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Avatar Cuántico Premium",
      creator: "QuantumArt Studios",
      price: "150 TC",
      image: "/placeholder.svg",
      category: "Avatars",
      rating: 4.8,
      sales: 234
    },
    {
      id: 2,
      title: "DreamSpace Tropical Paradise",
      creator: "VirtualArchitects",
      price: "300 TC",
      image: "/placeholder.svg",
      category: "Spaces",
      rating: 4.9,
      sales: 156
    },
    {
      id: 3,
      title: "Soundtrack Emocional Vol.1",
      creator: "KAOS Audio Collective",
      price: "50 TC",
      image: "/placeholder.svg",
      category: "Music",
      rating: 4.7,
      sales: 892
    },
    {
      id: 4,
      title: "NFT Fractal Dreams",
      creator: "AnubisCreative",
      price: "500 TC",
      image: "/placeholder.svg",
      category: "Art",
      rating: 5.0,
      sales: 45
    },
    {
      id: 5,
      title: "Tutorial XR Development",
      creator: "TAMV University",
      price: "100 TC",
      image: "/placeholder.svg",
      category: "Education",
      rating: 4.9,
      sales: 567
    },
    {
      id: 6,
      title: "Animación 4D Interactiva",
      creator: "MotionWorks",
      price: "250 TC",
      image: "/placeholder.svg",
      category: "Video",
      rating: 4.6,
      sales: 123
    }
  ];

  const categories = [
    { name: "Todo", icon: ShoppingBag, count: 2456 },
    { name: "Avatars", icon: Palette, count: 456 },
    { name: "DreamSpaces", icon: Zap, count: 234 },
    { name: "Música", icon: Music, count: 892 },
    { name: "Arte", icon: ImageIcon, count: 678 },
    { name: "Video", icon: Video, count: 345 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            TAMV Marketplace
          </h1>
          <p className="text-muted-foreground">
            Compra, vende y descubre contenido exclusivo del metaverso
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-primary/20 bg-card/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar productos, creadores, categorías..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, idx) => (
              <Card key={idx} className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <category.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-medium text-sm">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Items */}
        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList>
            <TabsTrigger value="featured">Destacados</TabsTrigger>
            <TabsTrigger value="trending">Tendencias</TabsTrigger>
            <TabsTrigger value="new">Nuevos</TabsTrigger>
            <TabsTrigger value="top">Top Ventas</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <Card key={item.id} className="border-primary/20 bg-card/50 backdrop-blur overflow-hidden group hover:border-primary/40 transition-all">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2">
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{item.title}</CardTitle>
                        <CardDescription className="text-sm">
                          por {item.creator}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                        <span className="text-xs text-muted-foreground">({item.sales} ventas)</span>
                      </div>
                      <Badge variant="secondary">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <Button>
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Comprar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold mb-2">Contenido en Tendencia</h3>
              <p className="text-muted-foreground">
                Los productos más populares de esta semana aparecerán aquí
              </p>
            </div>
          </TabsContent>

          <TabsContent value="new">
            <div className="text-center py-12">
              <Zap className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold mb-2">Últimos Lanzamientos</h3>
              <p className="text-muted-foreground">
                Descubre el contenido más reciente del marketplace
              </p>
            </div>
          </TabsContent>

          <TabsContent value="top">
            <div className="text-center py-12">
              <Star className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold mb-2">Mejores Vendidos</h3>
              <p className="text-muted-foreground">
                Los productos con más ventas de todos los tiempos
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Seller Info */}
        <Card className="mt-8 border-primary/20 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>¿Quieres vender en TAMV Marketplace?</CardTitle>
            <CardDescription>
              Únete a miles de creadores monetizando su contenido
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Crea</h3>
                <p className="text-sm text-muted-foreground">
                  Produce contenido original y de calidad
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Vende</h3>
                <p className="text-sm text-muted-foreground">
                  Establece tus precios y condiciones
                </p>
              </div>
              <div className="text-center p-4">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Gana</h3>
                <p className="text-sm text-muted-foreground">
                  Recibe pagos directos en TAMV Credits
                </p>
              </div>
            </div>
            <Button className="w-full mt-6">
              Convertirme en Vendedor
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
