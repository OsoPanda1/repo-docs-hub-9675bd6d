import { Shield, Zap, Activity, AlertTriangle, Lock, Server, Network, Code, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DocsQuantumSentinel() {
  const endpoints = [
    {
      method: "POST",
      path: "/scan",
      description: "Inicia un escaneo de seguridad completo en un host objetivo",
      auth: true,
      request: {
        host: "tamv.network",
        ports: [22, 80, 443, 3306, 5432, 8080]
      },
      response: {
        results: [
          {
            host: "tamv.network",
            port: 443,
            status: "open",
            service: "Web",
            banner: "nginx/1.21.0",
            response_time: 0.045,
            vulnerabilities: ["CVE-2021-23017"],
            technologies: ["Nginx", "ReactJS Framework"],
            threat_info: {
              service: "Web",
              threat_score: 3
            }
          }
        ]
      }
    },
    {
      method: "GET",
      path: "/report",
      description: "Obtiene el último reporte de seguridad generado",
      auth: true
    },
    {
      method: "GET",
      path: "/health",
      description: "Verifica el estado del microservicio",
      auth: false,
      response: {
        status: "OK",
        microservice: "TAMV Quantum Sentinel"
      }
    }
  ];

  const features = [
    {
      icon: Network,
      title: "Escaneo Multi-Hilo",
      description: "Hasta 64 threads paralelos (escalable a 1000+) para análisis de red ultrarrápido",
      color: "text-aqua-iridescent"
    },
    {
      icon: AlertTriangle,
      title: "Detección de CVEs",
      description: "Integración directa con NVD (National Vulnerability Database) para identificación de vulnerabilidades en tiempo real",
      color: "text-silver-metallic"
    },
    {
      icon: Server,
      title: "Banner Grabbing",
      description: "Captura y análisis de banners de servicios para identificación precisa de tecnologías",
      color: "text-navy-metallic"
    },
    {
      icon: Activity,
      title: "Análisis de Correlación",
      description: "Motor de IA que calcula threat scores basados en vulnerabilidades, tecnologías y patrones de ataque",
      color: "text-pearl-white"
    },
    {
      icon: Code,
      title: "API REST Completa",
      description: "Endpoints JSON para integración seamless con dashboards, CI/CD y sistemas de monitoreo",
      color: "text-aqua-iridescent"
    },
    {
      icon: Lock,
      title: "Exportación Segura",
      description: "Reportes JSON estructurados con audit trails y timestamps para compliance",
      color: "text-silver-metallic"
    }
  ];

  const techStack = [
    { name: "Python 3.10+", category: "Core" },
    { name: "Flask", category: "Framework" },
    { name: "Threading", category: "Concurrency" },
    { name: "Socket", category: "Networking" },
    { name: "Requests", category: "HTTP Client" },
    { name: "NVD API", category: "CVE Database" },
    { name: "Docker", category: "Deployment" },
    { name: "JSON", category: "Data Format" }
  ];

  const getMethodColor = (method: string) => {
    const colors = {
      GET: "bg-aqua-iridescent/20 text-aqua-iridescent border-aqua-iridescent/40",
      POST: "bg-silver-metallic/20 text-silver-metallic border-silver-metallic/40",
      PUT: "bg-navy-metallic/20 text-navy-metallic border-navy-metallic/40",
      DELETE: "bg-red-500/20 text-red-400 border-red-500/40"
    };
    return colors[method as keyof typeof colors] || colors.GET;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg border border-silver-metallic/20 bg-gradient-to-br from-deep-space via-deep-space/95 to-navy-metallic/10 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-aqua-iridescent animate-pulse" />
            <div>
              <h1 className="text-4xl font-bold metallic-text">TAMV Quantum Sentinel</h1>
              <p className="text-silver-metallic/80 font-orbitron">Advanced Security & Threat Analyzer</p>
            </div>
          </div>
          <p className="text-pearl-white/90 text-lg leading-relaxed mb-4">
            Microservicio de seguridad cuántica de próxima generación. Análisis de amenazas en tiempo real, 
            detección de vulnerabilidades CVE, correlación de ataques y auditoría institucional.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-aqua-iridescent/20 text-aqua-iridescent border-aqua-iridescent/40">
              Multi-threaded
            </Badge>
            <Badge className="bg-silver-metallic/20 text-silver-metallic border-silver-metallic/40">
              CVE Detection
            </Badge>
            <Badge className="bg-navy-metallic/20 text-navy-metallic border-navy-metallic/40">
              REST API
            </Badge>
            <Badge className="bg-pearl-white/20 text-pearl-white border-pearl-white/40">
              Docker Ready
            </Badge>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-aqua-iridescent" />
          Capacidades Cuánticas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-deep-space/50 border-silver-metallic/20 hover:border-aqua-iridescent/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]">
              <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
              <h3 className="text-lg font-semibold text-pearl-white mb-2">{feature.title}</h3>
              <p className="text-silver-metallic/70 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* API Documentation */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6 flex items-center gap-2">
          <Code className="w-6 h-6 text-aqua-iridescent" />
          API REST Endpoints
        </h2>
        <div className="space-y-4">
          <div className="bg-navy-metallic/10 border border-silver-metallic/20 rounded-lg p-4">
            <p className="text-sm text-silver-metallic/70 mb-2">Base URL</p>
            <code className="text-aqua-iridescent font-mono">http://localhost:5222/</code>
          </div>

          {endpoints.map((endpoint, index) => (
            <Card key={index} className="p-6 bg-deep-space/50 border-silver-metallic/20">
              <div className="flex items-start gap-4 mb-4">
                <Badge className={`${getMethodColor(endpoint.method)} font-mono`}>
                  {endpoint.method}
                </Badge>
                <div className="flex-1">
                  <code className="text-pearl-white font-mono text-lg">{endpoint.path}</code>
                  <p className="text-silver-metallic/70 mt-2">{endpoint.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {endpoint.auth ? (
                    <Badge className="bg-aqua-iridescent/20 text-aqua-iridescent border-aqua-iridescent/40">
                      <Lock className="w-3 h-3 mr-1" />
                      Auth
                    </Badge>
                  ) : (
                    <Badge className="bg-silver-metallic/20 text-silver-metallic border-silver-metallic/40">
                      Public
                    </Badge>
                  )}
                </div>
              </div>

              {endpoint.request && (
                <div className="mb-4">
                  <p className="text-sm text-silver-metallic/70 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Request Body
                  </p>
                  <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                    <code className="text-aqua-iridescent text-sm font-mono">
                      {JSON.stringify(endpoint.request, null, 2)}
                    </code>
                  </pre>
                </div>
              )}

              {endpoint.response && (
                <div>
                  <p className="text-sm text-silver-metallic/70 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Response Example
                  </p>
                  <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                    <code className="text-aqua-iridescent text-sm font-mono">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </code>
                  </pre>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Implementation Guide */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Guía de Implementación</h2>
        <Tabs defaultValue="docker" className="w-full">
          <TabsList className="bg-deep-space/50 border border-silver-metallic/20">
            <TabsTrigger value="docker">Docker</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="integration">Integración</TabsTrigger>
          </TabsList>

          <TabsContent value="docker" className="space-y-4">
            <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
              <h3 className="text-lg font-semibold text-pearl-white mb-4">Dockerfile</h3>
              <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                <code className="text-aqua-iridescent text-sm font-mono">{`FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY quantum_sentinel.py .

EXPOSE 5222

CMD ["python", "quantum_sentinel.py"]`}</code>
              </pre>
            </Card>

            <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
              <h3 className="text-lg font-semibold text-pearl-white mb-4">Docker Compose</h3>
              <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                <code className="text-aqua-iridescent text-sm font-mono">{`version: '3.8'

services:
  quantum-sentinel:
    build: .
    ports:
      - "5222:5222"
    environment:
      - FLASK_ENV=production
    restart: unless-stopped
    networks:
      - tamv-network

networks:
  tamv-network:
    driver: bridge`}</code>
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="python" className="space-y-4">
            <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
              <h3 className="text-lg font-semibold text-pearl-white mb-4">Instalación</h3>
              <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                <code className="text-aqua-iridescent text-sm font-mono">{`# Clonar repositorio
git clone https://github.com/tamv-online/quantum-sentinel.git
cd quantum-sentinel

# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # En Windows: venv\\Scripts\\activate

# Instalar dependencias
pip install flask requests

# Ejecutar
python quantum_sentinel.py`}</code>
              </pre>
            </Card>

            <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
              <h3 className="text-lg font-semibold text-pearl-white mb-4">Uso Directo</h3>
              <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                <code className="text-aqua-iridescent text-sm font-mono">{`from quantum_sentinel import QuantumSentinelScanner

# Crear instancia
scanner = QuantumSentinelScanner(timeout=1.2, threads=64)

# Escanear host
scanner.scan_host("tamv.network", [80, 443, 3306, 5432])

# Exportar reporte
scanner.export_to_json("security_report.json")

# Ver resultados
for result in scanner.results:
    print(f"{result.host}:{result.port} - {result.status}")
    print(f"  Service: {result.service}")
    print(f"  Vulns: {len(result.vulnerabilities)}")`}</code>
              </pre>
            </Card>
          </TabsContent>

          <TabsContent value="integration" className="space-y-4">
            <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
              <h3 className="text-lg font-semibold text-pearl-white mb-4">Integración React + Dashboard</h3>
              <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                <code className="text-aqua-iridescent text-sm font-mono">{`import { useState } from 'react';

const SENTINEL_URL = 'http://localhost:5222';

export function SecurityScanner() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const runScan = async () => {
    setLoading(true);
    try {
      const response = await fetch(\`\${SENTINEL_URL}/scan\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: 'tamv.network',
          ports: [80, 443, 3306, 5432, 8080]
        })
      });
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Scan failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={runScan} disabled={loading}>
        {loading ? 'Scanning...' : 'Run Security Scan'}
      </button>
      {results && (
        <div className="results">
          {results.map((r, i) => (
            <div key={i}>
              <h3>{r.host}:{r.port} - {r.status}</h3>
              <p>Service: {r.service}</p>
              <p>Vulnerabilities: {r.vulnerabilities.length}</p>
              <p>Threat Score: {r.threat_info.threat_score}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`}</code>
              </pre>
            </Card>

            <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
              <h3 className="text-lg font-semibold text-pearl-white mb-4">CI/CD Integration</h3>
              <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
                <code className="text-aqua-iridescent text-sm font-mono">{`# .github/workflows/security-scan.yml
name: Security Scan

on:
  push:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Quantum Sentinel
        run: |
          docker-compose up -d quantum-sentinel
          sleep 10
          curl -X POST http://localhost:5222/scan \\
            -H "Content-Type: application/json" \\
            -d '{"host":"tamv.network","ports":[80,443]}'
      
      - name: Download Report
        run: |
          curl http://localhost:5222/report > security-report.json
      
      - name: Upload Report
        uses: actions/upload-artifact@v4
        with:
          name: security-report
          path: security-report.json`}</code>
              </pre>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Stack Tecnológico</h2>
        <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="p-4 bg-navy-metallic/10 rounded-lg border border-silver-metallic/20">
                <div className="text-xs text-silver-metallic/70 mb-1">{tech.category}</div>
                <div className="text-pearl-white font-semibold">{tech.name}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Architecture Diagram */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Arquitectura del Sistema</h2>
        <Card className="p-8 bg-deep-space/50 border-silver-metallic/20">
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-aqua-iridescent/20 border border-aqua-iridescent/40 rounded-lg">
                <Server className="w-8 h-8 text-aqua-iridescent mx-auto mb-2" />
                <p className="text-pearl-white font-semibold">TAMV Dashboard</p>
                <p className="text-xs text-silver-metallic/70">React Frontend</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-px h-12 bg-silver-metallic/30"></div>
            </div>
            
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-navy-metallic/20 border border-navy-metallic/40 rounded-lg">
                <Network className="w-8 h-8 text-navy-metallic mx-auto mb-2" />
                <p className="text-pearl-white font-semibold">REST API Layer</p>
                <p className="text-xs text-silver-metallic/70">Flask Microservice</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-px h-12 bg-silver-metallic/30"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="px-6 py-3 bg-silver-metallic/10 border border-silver-metallic/30 rounded-lg text-center">
                <Shield className="w-6 h-6 text-silver-metallic mx-auto mb-2" />
                <p className="text-pearl-white text-sm font-semibold">Port Scanner</p>
                <p className="text-xs text-silver-metallic/70">64-1000 threads</p>
              </div>
              <div className="px-6 py-3 bg-silver-metallic/10 border border-silver-metallic/30 rounded-lg text-center">
                <AlertTriangle className="w-6 h-6 text-silver-metallic mx-auto mb-2" />
                <p className="text-pearl-white text-sm font-semibold">CVE Engine</p>
                <p className="text-xs text-silver-metallic/70">NVD Integration</p>
              </div>
              <div className="px-6 py-3 bg-silver-metallic/10 border border-silver-metallic/30 rounded-lg text-center">
                <Activity className="w-6 h-6 text-silver-metallic mx-auto mb-2" />
                <p className="text-pearl-white text-sm font-semibold">Threat Correlator</p>
                <p className="text-xs text-silver-metallic/70">AI Analysis</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Métricas de Performance</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-aqua-iridescent/10 to-deep-space border-aqua-iridescent/20">
            <div className="text-3xl font-bold text-aqua-iridescent mb-2">64-1000</div>
            <div className="text-sm text-silver-metallic/70">Threads Paralelos</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-navy-metallic/10 to-deep-space border-navy-metallic/20">
            <div className="text-3xl font-bold text-navy-metallic mb-2">&lt;1.2s</div>
            <div className="text-sm text-silver-metallic/70">Timeout por Puerto</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-silver-metallic/10 to-deep-space border-silver-metallic/20">
            <div className="text-3xl font-bold text-silver-metallic mb-2">100%</div>
            <div className="text-sm text-silver-metallic/70">API Coverage</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-pearl-white/10 to-deep-space border-pearl-white/20">
            <div className="text-3xl font-bold text-pearl-white mb-2">Real-time</div>
            <div className="text-sm text-silver-metallic/70">CVE Detection</div>
          </Card>
        </div>
      </div>

      {/* Security Features */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Características de Seguridad</h2>
        <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-aqua-iridescent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-pearl-white font-semibold mb-1">Escaneo No-Invasivo</h4>
                <p className="text-silver-metallic/70 text-sm">Detección pasiva de servicios sin afectar disponibilidad</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-aqua-iridescent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-pearl-white font-semibold mb-1">Rate Limiting Inteligente</h4>
                <p className="text-silver-metallic/70 text-sm">Control automático de velocidad de escaneo para evitar detección</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-aqua-iridescent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-pearl-white font-semibold mb-1">Audit Trail Completo</h4>
                <p className="text-silver-metallic/70 text-sm">Registro detallado de todas las operaciones para compliance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-aqua-iridescent mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-pearl-white font-semibold mb-1">Escalabilidad Cloud-Native</h4>
                <p className="text-silver-metallic/70 text-sm">Deployable en Kubernetes, Docker Swarm, o bare metal</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="relative overflow-hidden border-aqua-iridescent/30 bg-gradient-to-br from-deep-space via-navy-metallic/20 to-aqua-iridescent/10 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.15),transparent_70%)]" />
        <div className="relative text-center">
          <Shield className="w-16 h-16 text-aqua-iridescent mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold metallic-text mb-3">
            Protege Tu Infraestructura Digital
          </h3>
          <p className="text-silver-metallic/80 mb-6 max-w-2xl mx-auto">
            El TAMV Quantum Sentinel está listo para deployment en producción. 
            Comienza a proteger tu ecosistema digital hoy mismo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://github.com/tamv-online/quantum-sentinel" 
              className="px-6 py-3 bg-aqua-iridescent/20 hover:bg-aqua-iridescent/30 border border-aqua-iridescent/40 rounded-lg text-aqua-iridescent font-semibold transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
            <a 
              href="mailto:security@tamv.online" 
              className="px-6 py-3 bg-silver-metallic/20 hover:bg-silver-metallic/30 border border-silver-metallic/40 rounded-lg text-silver-metallic font-semibold transition-all duration-300"
            >
              Contactar Equipo
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
