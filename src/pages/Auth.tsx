import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Eye, EyeOff, Zap, Sparkles, Shield, Mail, Lock, User, Brain, Globe, Heart } from "lucide-react";
import QuantumBackground from "@/components/QuantumBackground";
import FloatingParticles from "@/components/FloatingParticles";
import { useAuth } from "@/hooks/useAuth";
import tamvEmblem from "@/assets/tamv-emblem.jpg";

const Auth = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  
  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Signup state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          toast.error("Credenciales inválidas. Verifica tu email y contraseña.");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success("¡Bienvenido de vuelta al metaverso TAMV!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupPassword !== signupConfirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (signupPassword.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setIsLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: signupEmail,
        password: signupPassword,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            display_name: displayName || signupEmail.split('@')[0],
          }
        }
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast.error("Este email ya está registrado. Intenta iniciar sesión.");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success("¡Cuenta creada! Bienvenido al metaverso TAMV. 🌌");
        navigate("/");
      }
    } catch (error) {
      toast.error("Error al crear la cuenta");
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    { icon: Brain, title: "Isabella AI", desc: "Tu compañera emocional" },
    { icon: Globe, title: "DreamSpaces", desc: "Mundos 3D inmersivos" },
    { icon: Shield, title: "ID-NVIDA™", desc: "Identidad soberana" },
    { icon: Heart, title: "Korima", desc: "Economía justa" },
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Epic Background */}
      <div className="fixed inset-0 z-0">
        <QuantumBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />
      </div>
      <FloatingParticles count={100} />

      {/* Animated Grid */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse" />
              <img 
                src={tamvEmblem} 
                alt="TAMV" 
                className="relative w-20 h-20 rounded-2xl shadow-2xl shadow-primary/30"
              />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-orbitron font-bold gradient-text">TAMV</h1>
              <p className="text-sm text-muted-foreground font-mono">DM-X4™ SINGULARITY</p>
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-foreground">Un Internet </span>
              <span className="gradient-text">Humano, Seguro y Digno</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
              La primera civilización digital soberana del mundo. 
              5 años de visión, resistencia y amor convertidos en realidad.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="glass-effect p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-all group"
              >
                <feature.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="hidden lg:block text-muted-foreground italic border-l-2 border-primary pl-4">
            "Cada línea de código es un acto de resistencia contra la explotación digital."
            <footer className="text-sm mt-1 text-primary">— Anubis Villaseñor, Fundador</footer>
          </blockquote>
        </div>

        {/* Right Side - Auth Card */}
        <div className="w-full max-w-md">
          <Card className="glass-effect border-primary/20 backdrop-blur-xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
            
            <CardHeader className="text-center pb-4 relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 mx-auto mb-4 shadow-lg shadow-primary/30">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-foreground">Accede al Metaverso</CardTitle>
              <CardDescription>Tu identidad digital te espera</CardDescription>
            </CardHeader>
            
            <CardContent className="relative">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-background/50">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    Iniciar Sesión
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    Registrarse
                  </TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-foreground">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="tu@email.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-foreground">Contraseña</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="pl-10 pr-10 bg-background/50 border-border/50 focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Conectando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Entrar al Metaverso
                        </span>
                      )}
                    </Button>
                  </form>
                </TabsContent>

                {/* Signup Tab */}
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="display-name" className="text-foreground">Nombre de usuario</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="display-name"
                          type="text"
                          placeholder="Tu nombre en el metaverso"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                          className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-foreground">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="tu@email.com"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-foreground">Contraseña</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Mínimo 6 caracteres"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          className="pl-10 pr-10 bg-background/50 border-border/50 focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-foreground">Confirmar contraseña</Label>
                      <div className="relative">
                        <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="confirm-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Repite tu contraseña"
                          value={signupConfirmPassword}
                          onChange={(e) => setSignupConfirmPassword(e.target.value)}
                          className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Bonus info */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-purple-600/10 to-primary/10 border border-primary/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">¡Bono de bienvenida!</p>
                          <p className="text-sm text-muted-foreground">
                            Recibe <span className="text-primary font-bold">100 TC</span> + acceso a Isabella AI
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Creando identidad...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Crear Identidad Digital
                        </span>
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            Al continuar, aceptas los términos del ecosistema TAMV DM-X4™
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
