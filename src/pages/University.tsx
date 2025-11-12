import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users,
  Clock,
  Star,
  Play,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const University = () => {
  const courses = [
    {
      id: 1,
      title: "Desarrollo en DreamSpaces XR",
      instructor: "Prof. Isabella Cortez",
      level: "Intermedio",
      duration: "8 semanas",
      students: 1247,
      rating: 4.9,
      price: "Gratuito",
      image: "/placeholder.svg",
      category: "XR Development"
    },
    {
      id: 2,
      title: "IA Emocional y Ética Digital",
      instructor: "Dr. Marcus Chen",
      level: "Avanzado",
      duration: "12 semanas",
      students: 892,
      rating: 5.0,
      price: "Gratuito",
      image: "/placeholder.svg",
      category: "AI & Ethics"
    },
    {
      id: 3,
      title: "Economía Digital y Blockchain",
      instructor: "Dra. Sofia Ramirez",
      level: "Principiante",
      duration: "6 semanas",
      students: 2156,
      rating: 4.8,
      price: "Gratuito",
      image: "/placeholder.svg",
      category: "Economy"
    },
    {
      id: 4,
      title: "Creación de Contenido 4D",
      instructor: "Prof. Diego Vargas",
      level: "Intermedio",
      duration: "10 semanas",
      students: 1543,
      rating: 4.9,
      price: "Gratuito",
      image: "/placeholder.svg",
      category: "Content Creation"
    },
    {
      id: 5,
      title: "Seguridad Cuántica",
      instructor: "Dr. Ana Torres",
      level: "Avanzado",
      duration: "14 semanas",
      students: 678,
      rating: 5.0,
      price: "Gratuito",
      image: "/placeholder.svg",
      category: "Security"
    },
    {
      id: 6,
      title: "Producción Musical Digital",
      instructor: "Maestro Carlos Ruiz",
      level: "Intermedio",
      duration: "8 semanas",
      students: 1834,
      rating: 4.7,
      price: "Gratuito",
      image: "/placeholder.svg",
      category: "Music"
    }
  ];

  const stats = [
    { label: "Cursos Disponibles", value: "127", icon: BookOpen },
    { label: "Estudiantes Activos", value: "24,567", icon: Users },
    { label: "Certificaciones", value: "8,943", icon: Award },
    { label: "Tasa de Finalización", value: "87%", icon: TrendingUp },
  ];

  const myProgress = [
    { course: "Desarrollo en DreamSpaces XR", progress: 65, completed: 13, total: 20 },
    { course: "IA Emocional y Ética Digital", progress: 30, completed: 6, total: 20 },
    { course: "Producción Musical Digital", progress: 90, completed: 18, total: 20 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-orbitron">
            Universidad TAMV
          </h1>
          <p className="text-muted-foreground">
            Educación Gratuita, Certificada y Profesionalizante
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="explore" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="explore">Explorar Cursos</TabsTrigger>
            <TabsTrigger value="progress">Mi Progreso</TabsTrigger>
          </TabsList>

          <TabsContent value="explore" className="space-y-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Categorías Principales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">XR Development</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">AI & Ethics</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Economy</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Content Creation</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Security</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Music</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Blockchain</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">Marketing</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="border-primary/20 bg-card/50 backdrop-blur overflow-hidden group hover:border-primary/40 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="lg" className="rounded-full">
                        <Play className="h-5 w-5 mr-2" />
                        Vista Previa
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2">
                      {course.level}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{course.category}</Badge>
                      <span className="font-bold text-primary">{course.price}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <CardDescription>{course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <Button className="w-full">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Inscribirse
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Mis Cursos en Progreso</CardTitle>
                <CardDescription>Continúa tu aprendizaje donde lo dejaste</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {myProgress.map((item, idx) => (
                  <div key={idx} className="p-4 border border-border/50 rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{item.course}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.completed} de {item.total} lecciones completadas
                        </p>
                      </div>
                      <Badge>{item.progress}%</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-purple-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <Button className="w-full" variant="outline">
                        <Play className="h-4 w-4 mr-2" />
                        Continuar Curso
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certificaciones Obtenidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">¡Completa tu primer curso!</h3>
                  <p className="text-muted-foreground">
                    Tus certificaciones aparecerán aquí una vez completes un curso
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default University;
