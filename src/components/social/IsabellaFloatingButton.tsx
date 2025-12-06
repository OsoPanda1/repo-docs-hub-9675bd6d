import { useState, useEffect } from "react";
import { Brain, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const IsabellaFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      role: "assistant", 
      content: "¡Hola! Soy Isabella AI 💫 Tu compañera emocional en el metaverso TAMV. ¿En qué puedo ayudarte hoy?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "¿Qué son los DreamSpaces?",
    "¿Cómo gano TC?",
    "Muéstrame tendencias",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { id: Date.now(), role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulated response - in production this would call the chat-isabella edge function
    setTimeout(() => {
      const responses = [
        "¡Qué interesante pregunta! En el metaverso TAMV, cada experiencia es única y personal. 🌌",
        "Me encanta que explores nuevas posibilidades. ¿Te gustaría que te guíe hacia algo específico?",
        "El universo TAMV está lleno de maravillas. Déjame mostrarte lo que puedes descubrir hoy. ✨",
      ];
      const assistantMessage: Message = {
        id: Date.now(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl transition-all duration-500 flex items-center justify-center group ${
          isOpen 
            ? 'bg-destructive rotate-90' 
            : 'bg-gradient-to-r from-primary to-secondary hover:scale-110'
        }`}
        style={{
          boxShadow: isOpen 
            ? '0 0 20px rgba(239, 68, 68, 0.5)' 
            : '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)'
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <Brain className="w-6 h-6 text-white" />
            {/* Pulse animation */}
            <span className="absolute w-full h-full rounded-full animate-ping bg-primary/30" />
          </>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300 border border-primary/30"
          style={{
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 ring-2 ring-white/50">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-white/20 text-white">IA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">Isabella AI</span>
                  <Sparkles className="w-4 h-4 text-white/80" />
                </div>
                <p className="text-xs text-white/70">Tu compañera emocional</p>
              </div>
              <Link to="/isabella">
                <Button size="sm" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 text-xs">
                  Chat Completo
                </Button>
              </Link>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[300px] bg-background/95 backdrop-blur-xl p-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-muted text-foreground rounded-bl-md'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Replies */}
          <div className="bg-background/95 border-t border-border/50 px-4 py-2">
            <ScrollArea className="w-full">
              <div className="flex gap-2 pb-1">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => setInput(reply)}
                    className="shrink-0 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Input */}
          <div className="bg-background/95 border-t border-border/50 p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-muted border-0 rounded-full"
              />
              <Button 
                size="icon" 
                onClick={handleSend}
                disabled={!input.trim()}
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IsabellaFloatingButton;