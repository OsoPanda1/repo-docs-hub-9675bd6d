import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap } from "lucide-react";

const DocsExamples = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Ejemplos de Implementación</h1>
        <p className="text-xl text-muted-foreground">
          Guías prácticas para integrar el Protocolo Kórima en tus aplicaciones
        </p>
      </div>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Cliente JavaScript/TypeScript
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Implementación completa de un cliente para interactuar con la API:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre className="text-foreground/90">{`const API_BASE_URL = "https://api.tamv.civilization/v1";
let accessToken = "";

// Función de autenticación
async function login(email, password) {
  const response = await fetch(\`\${API_BASE_URL}/auth/login\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  accessToken = data.accessToken;
  return data;
}

// Manifestar una intención
async function manifestIntention(content) {
  try {
    const response = await fetch(\`\${API_BASE_URL}/moments\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${accessToken}\`
      },
      body: JSON.stringify({ content, metadata: { is_reply: false } })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(\`Error \${response.status}: \${error.message}\`);
    }
    
    const moment = await response.json();
    console.log("Momento Manifestado:", moment);
    return moment;
  } catch (error) {
    console.error("Error:", error);
  }
}`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            React Hook Personalizado
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Hook de React para gestionar la autenticación y las peticiones:
          </p>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre className="text-foreground/90">{`import { useState } from 'react';

export function useKorima() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const login = async (email, password) => {
    setLoading(true);
    const response = await fetch('https://api.tamv.civilization/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    setToken(data.accessToken);
    setUser(data.user);
    setLoading(false);
  };
  
  const createMoment = async (content) => {
    const response = await fetch('https://api.tamv.civilization/v1/moments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${token}\`
      },
      body: JSON.stringify({ content, metadata: { is_reply: false } })
    });
    return await response.json();
  };
  
  return { user, login, createMoment, loading };
}`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Mejores Prácticas</CardTitle>
          <CardContent className="pt-4 px-0">
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Almacena el token de forma segura (httpOnly cookies o sessionStorage)</li>
              <li>✓ Implementa manejo de errores para todos los códigos de estado HTTP</li>
              <li>✓ Refresca el token automáticamente antes de que expire</li>
              <li>✓ Utiliza TypeScript para aprovechar los tipos de datos definidos</li>
              <li>✓ Implementa retry logic para peticiones fallidas</li>
            </ul>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default DocsExamples;
