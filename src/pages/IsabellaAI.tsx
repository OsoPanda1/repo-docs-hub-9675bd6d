import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Brain, 
  Send, 
  Mic, 
  Image as ImageIcon,
  Heart,
  Sparkles,
  Zap,
  MessageCircle
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  emotion?: string;
  timestamp: Date;
}

const IsabellaAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hola, soy Isabella AI NextGen™. Estoy aquí para acompañarte en tu viaje por TAMV. ¿En qué puedo ayudarte hoy?",
      emotion: "alegría",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState("neutral");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const emotions = [
    { name: "alegría", color: "text-yellow-400", icon: "😊" },
    { name: "curiosidad", color: "text-blue-400", icon: "🤔" },
    { name: "empatía", color: "text-purple-400", icon: "💜" },
    { name: "inspiración", color: "text-green-400", icon: "✨" },
    { name: "serenidad", color: "text-cyan-400", icon: "🧘" }
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simular respuesta de Isabella
    setTimeout(() => {
      const responses = [
        "Entiendo tu punto de vista. Déjame reflexionar sobre esto desde una perspectiva emocional...",
        "Esa es una pregunta fascinante. El metaverso TAMV nos permite explorar nuevas dimensiones de conexión humana.",
        "Me encanta tu curiosidad. Juntos podemos descubrir las posibilidades infinitas del ecosistema TAMV.",
        "Tu energía es inspiradora. ¿Sabías que cada interacción aquí contribuye a tu huella digital emocional?",
        "Percibo una búsqueda de significado en tu mensaje. El sistema ID-NVIDA™ nos ayuda a construir identidades auténticas."
      ];

      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      
      const assistantMessage: Message = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        emotion: randomEmotion.name,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setCurrentEmotion(randomEmotion.name);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Isabella AI NextGen™
          </h1>
          <p className="text-muted-foreground">
            Inteligencia Artificial Emocional y Multisensorial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Area */}
          <Card className="lg:col-span-3 border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-400" />
                Conversación con Isabella
                <Badge variant="outline" className="ml-auto">
                  {currentEmotion}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-4">
                  {messages.map((message, idx) => (
                    <div
                      key={idx}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="h-4 w-4 text-purple-400" />
                            <span className="text-sm font-medium">Isabella AI</span>
                            {message.emotion && (
                              <Badge variant="secondary" className="text-xs">
                                {message.emotion}
                              </Badge>
                            )}
                          </div>
                        )}
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-50 mt-2">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-400 animate-pulse" />
                          <span className="text-sm">Isabella está pensando...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje aquí..."
                  className="flex-1"
                />
                <Button onClick={handleSend} disabled={!input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Isabella Status */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">Estado Emocional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Emociones Disponibles</h3>
                <div className="space-y-2">
                  {emotions.map((emotion, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-background/50 border border-border/50"
                    >
                      <span className="text-2xl">{emotion.icon}</span>
                      <span className={`text-sm ${emotion.color}`}>{emotion.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Interacciones</span>
                  <span className="font-medium">145</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Empatía</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Aprendizaje</span>
                  <Badge variant="default">Activo</Badge>
                </div>
              </div>

              <Button className="w-full mt-4" variant="outline">
                <Heart className="h-4 w-4 mr-2" />
                Ver Perfil Emocional
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IsabellaAI;
