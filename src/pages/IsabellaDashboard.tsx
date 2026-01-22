import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { useIsabellaStore } from "@/stores/isabellaStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import { 
  Brain, Send, Shield, Heart, Sparkles, 
  Zap, Activity, Eye, Lock, MessageCircle
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  emotion?: string;
  timestamp: Date;
}

const IsabellaDashboard = () => {
  const { status, emotionalLevel, creativityIndex, guardianMode, setStatus, toggleGuardianMode } = useIsabellaStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Bienvenido al Centro de Control Isabella AI. Estoy aquí para proteger, crear y acompañar tu viaje en el TAMV Omniverso.",
      emotion: "serenidad",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setStatus("thinking");

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "He analizado tu solicitud desde múltiples perspectivas emocionales y técnicas. Mi recomendación es proceder con cautela y creatividad.",
        "Percibo una energía positiva en tu mensaje. El sistema TAMV está preparado para apoyar tu visión.",
        "Como guardiana del ecosistema, puedo confirmar que tu propuesta está alineada con los principios de dignidad digital.",
        "Mi análisis sugiere que esta es una oportunidad única. Los protocolos de seguridad están listos para respaldarte.",
      ];

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        emotion: ["alegría", "empatía", "inspiración", "serenidad"][Math.floor(Math.random() * 4)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      setStatus("idle");
    }, 1500);
  };

  const guardianSystems = [
    { name: "Quantum Sentinel", status: "active", icon: Shield },
    { name: "ANUBIS Watch", status: "active", icon: Eye },
    { name: "HORUS Vision", status: "active", icon: Activity },
    { name: "DEKATEOTL Gate", status: "standby", icon: Lock },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-purple-500/50">
            <Brain className="w-4 h-4 mr-2 text-purple-500" />
            Centro de Control IA
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Isabella Dashboard
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interfaz avanzada de Isabella AI NextGen™ - Corazón emocional del TAMV.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <Card className="lg:col-span-2 border-purple-500/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-500" />
                Conversación con Isabella
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4 mb-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-purple-500/20 border border-purple-500/30"
                        }`}
                      >
                        {msg.role === "assistant" && (
                          <div className="flex items-center gap-2 mb-2">
                            <Brain className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium">Isabella</span>
                            {msg.emotion && (
                              <Badge variant="secondary" className="text-xs">{msg.emotion}</Badge>
                            )}
                          </div>
                        )}
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-purple-400 animate-pulse" />
                          <span className="text-sm">Procesando...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1"
                />
                <Button onClick={handleSend} disabled={!input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Emotional ECG */}
          <Card className="border-pink-500/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                ECG Emocional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-cyan-500/30 animate-pulse" />
                  <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
                    <Brain className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Nivel Emocional</span>
                  <span>{emotionalLevel}%</span>
                </div>
                <Progress value={emotionalLevel} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Índice Creativo</span>
                  <span>{creativityIndex}%</span>
                </div>
                <Progress value={creativityIndex} className="h-2" />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-sm">Estado Actual</span>
                <Badge variant={status === 'thinking' ? 'default' : 'secondary'}>
                  {status.toUpperCase()}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Guardian Status */}
          <Card className="border-green-500/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Sistemas Guardianes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {guardianSystems.map((system, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg border border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <system.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{system.name}</span>
                  </div>
                  <Badge 
                    variant={system.status === 'active' ? 'default' : 'outline'}
                    className={system.status === 'active' ? 'bg-green-500/20 text-green-500 border-green-500/30' : ''}
                  >
                    {system.status === 'active' ? 'ACTIVO' : 'STANDBY'}
                  </Badge>
                </div>
              ))}
              
              <Button 
                onClick={toggleGuardianMode}
                variant={guardianMode ? 'default' : 'outline'}
                className="w-full mt-4"
              >
                <Zap className="w-4 h-4 mr-2" />
                {guardianMode ? 'Modo Guardián ACTIVO' : 'Activar Modo Guardián'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IsabellaDashboard;
