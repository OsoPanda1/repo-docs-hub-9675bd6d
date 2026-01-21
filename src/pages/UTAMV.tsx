import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users,
  Play,
  Clock,
  Star,
  Trophy,
  CheckCircle,
  Lock,
  Sparkles
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced" | "master";
  duration: string;
  enrolled: number;
  rating: number;
  price: number;
  isFree: boolean;
  certified: boolean;
  xrEnabled: boolean;
}

const UTAMV = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const courses: Course[] = [
    {
      id: "1",
      title: "Fundamentos del TAMV",
      instructor: "TAMV Academy",
      category: "Core",
      level: "beginner",
      duration: "4h 30m",
      enrolled: 1247,
      rating: 4.9,
      price: 0,
      isFree: true,
      certified: true,
      xrEnabled: false
    },
    {
      id: "2",
      title: "Arquitectura de 7 Capas Federadas",
      instructor: "Edwin O. Castillo Trejo",
      category: "Arquitectura",
      level: "advanced",
      duration: "12h",
      enrolled: 456,
      rating: 5.0,
      price: 49.99,
      isFree: false,
      certified: true,
      xrEnabled: true
    },
    {
      id: "3",
      title: "Creación de DreamSpaces 3D/4D",
      instructor: "XR Studio TAMV",
      category: "XR/3D",
      level: "intermediate",
      duration: "8h 15m",
      enrolled: 892,
      rating: 4.8,
      price: 29.99,
      isFree: false,
      certified: true,
      xrEnabled: true
    },
    {
      id: "4",
      title: "Isabella AI: Integración y Personalización",
      instructor: "AI Labs TAMV",
      category: "IA",
      level: "intermediate",
      duration: "6h",
      enrolled: 634,
      rating: 4.7,
      price: 39.99,
      isFree: false,
      certified: true,
      xrEnabled: false
    },
    {
      id: "5",
      title: "Economía TAU y Motor de 33+ Fuentes",
      instructor: "TAMV Economics",
      category: "Economía",
      level: "advanced",
      duration: "10h",
      enrolled: 321,
      rating: 4.9,
      price: 59.99,
      isFree: false,
      certified: true,
      xrEnabled: false
    },
    {
      id: "6",
      title: "Gobernanza DEKATEOTL",
      instructor: "Governance Institute",
      category: "Gobernanza",
      level: "master",
      duration: "15h",
      enrolled: 187,
      rating: 5.0,
      price: 79.99,
      isFree: false,
      certified: true,
      xrEnabled: true
    },
    {
      id: "7",
      title: "Seguridad Post-Cuántica ANUBIS",
      instructor: "Security Division",
      category: "Seguridad",
      level: "advanced",
      duration: "8h",
      enrolled: 234,
      rating: 4.8,
      price: 49.99,
      isFree: false,
      certified: true,
      xrEnabled: false
    },
    {
      id: "8",
      title: "BookPI: Registro Inmutable",
      instructor: "Blockchain TAMV",
      category: "Blockchain",
      level: "intermediate",
      duration: "5h",
      enrolled: 412,
      rating: 4.6,
      price: 0,
      isFree: true,
      certified: true,
      xrEnabled: false
    }
  ];

  const stats = {
    totalCourses: courses.length,
    totalEnrolled: courses.reduce((sum, c) => sum + c.enrolled, 0),
    freeCourses: courses.filter(c => c.isFree).length,
    xrCourses: courses.filter(c => c.xrEnabled).length
  };

  const categories = ["all", ...new Set(courses.map(c => c.category))];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner": return "bg-green-500";
      case "intermediate": return "bg-blue-500";
      case "advanced": return "bg-purple-500";
      case "master": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            <GraduationCap className="w-3 h-3 mr-1" />
            Universidad TAMV
          </Badge>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            UTAMV - Universidad TAMV
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Educación inmersiva con certificación blockchain. Aprende, crea y evoluciona 
            en el ecosistema civilizatorio más avanzado.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 mx-auto mb-2 text-purple-400" />
              <div className="text-2xl font-bold">{stats.totalCourses}</div>
              <div className="text-xs text-muted-foreground">Cursos</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold">{stats.totalEnrolled.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Estudiantes</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Award className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
              <div className="text-2xl font-bold">{stats.freeCourses}</div>
              <div className="text-xs text-muted-foreground">Cursos Gratis</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-4 text-center">
              <Sparkles className="h-6 w-6 mx-auto mb-2 text-pink-400" />
              <div className="text-2xl font-bold">{stats.xrCourses}</div>
              <div className="text-xs text-muted-foreground">Cursos XR</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              size="sm"
            >
              {cat === "all" ? "Todos" : cat}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="bg-card/50 backdrop-blur border-primary/20 overflow-hidden group hover:border-primary/40 transition-all">
              {/* Course Header */}
              <div className="h-32 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 relative">
                <div className="absolute top-2 left-2 flex gap-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  {course.xrEnabled && (
                    <Badge variant="secondary">
                      <Sparkles className="w-3 h-3 mr-1" />
                      XR
                    </Badge>
                  )}
                </div>
                {course.isFree && (
                  <Badge className="absolute top-2 right-2 bg-green-500">
                    GRATIS
                  </Badge>
                )}
                <div className="absolute bottom-2 right-2">
                  {course.certified && (
                    <Badge variant="outline" className="bg-background/50">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Certificado
                    </Badge>
                  )}
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                <CardDescription>{course.instructor}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {course.enrolled}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    {course.rating}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">
                    {course.isFree ? (
                      <span className="text-green-400">Gratis</span>
                    ) : (
                      <span>${course.price}</span>
                    )}
                  </div>
                  <Button size="sm" className="gap-2">
                    <Play className="w-4 h-4" />
                    {course.isFree ? "Comenzar" : "Inscribirse"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instructor CTA */}
        <Card className="mt-12 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 border-purple-500/30">
          <CardContent className="p-8 text-center">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-purple-400" />
            <h2 className="text-2xl font-bold mb-2">¿Eres experto en algo?</h2>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              Publica tu primer curso gratis y comienza a generar ingresos. 
              TAMV retiene solo 25% de comisión sobre ventas.
            </p>
            <Button size="lg" className="gap-2">
              <Trophy className="w-5 h-5" />
              Convertirme en Instructor
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default UTAMV;
