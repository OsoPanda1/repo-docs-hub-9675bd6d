import { Shield, Lock, Fingerprint, Globe, Zap, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const DocsIdNvida = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Protocolo ID-NVIDA™
            </h1>
            <p className="text-muted-foreground">Sistema de Identidad Digital Soberana de Próxima Generación</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="default">Blockchain Híbrida</Badge>
          <Badge variant="secondary">Post-Cuántico</Badge>
          <Badge variant="outline">Biometría Cancelable</Badge>
          <Badge variant="outline">Zero-Knowledge</Badge>
        </div>
      </div>

      <Separator />

      {/* Resumen Ejecutivo */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Resumen Ejecutivo</h2>
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed mb-4">
              ID-NVIDA es un sistema de identidad digital soberana que integra blockchain híbrida, 
              criptografía post-cuántica y arquitecturas de seguridad multicapa avanzadas. Posiciona 
              la plataforma para la transición hacia Web 4.0, superando tanto sistemas Web2 tradicionales 
              como soluciones Web3 actuales.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong>Identificadores Derivados Contextuales:</strong>
                  <p className="text-sm text-muted-foreground">Anti-correlación entre servicios</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong>Biometría Cancelable:</strong>
                  <p className="text-sm text-muted-foreground">Protección homomórfica avanzada</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong>Red de Validadores Distribuida:</strong>
                  <p className="text-sm text-muted-foreground">Geográfica y jurisdiccionalmente</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <strong>Arquitectura de Sharding:</strong>
                  <p className="text-sm text-muted-foreground">Escalabilidad masiva horizontal</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Modelo de Negocio */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Modelo de Suscripción</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Basic</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">$0</span>/mes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Identidad básica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Verificación nivel 3</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Identificadores estáticos</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-lg">Premium</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">$9.99</span>/mes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>ID-NVIDA completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Identificadores derivados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Biometría cancelable</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Enterprise</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">$99</span>/mes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Multi-identidad corporativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>API access completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>SLA 99.99%</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Institution</CardTitle>
              <CardDescription>
                <span className="text-2xl font-bold text-foreground">Custom</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>White-label solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Nodos validadores propios</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Compliance personalizado</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Arquitectura Técnica */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Arquitectura Técnica Avanzada</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Fingerprint className="w-6 h-6 text-primary" />
                <CardTitle>Identificadores Derivados</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Sistema de IDs únicos por servicio que previene correlación de identidad entre plataformas.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <code className="text-xs">
                  NVIDA-SERV-1234-7f3a2b1c-A3F2
                </code>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Determinístico por periodo</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>No correlacionable entre servicios</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Rotable cada 90 días</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Revocable selectivamente</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                <CardTitle>Biometría Cancelable</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Templates biométricos transformados de forma no invertible con encriptación homomórfica.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Extracción de características</span>
                  <Badge variant="outline">512-dim</Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Transformación cancelable</span>
                  <Badge variant="outline">256-dim</Badge>
                </div>
                <div className="flex justify-between items-cm">
                  <span>Encriptación CKKS</span>
                  <Badge variant="outline">Homomórfica</Badge>
                </div>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg mt-4">
                <p className="text-xs font-medium">
                  ✅ Matching sin desencriptar<br/>
                  ✅ Template comprometido = renovable<br/>
                  ✅ No reconstrucción del rostro
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                <CardTitle>Sharding Geográfico</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Arquitectura distribuida con beacon chain en Arbitrum y shards regionales en Hyperledger Fabric.
              </p>
              <div className="space-y-2">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="font-medium text-sm mb-2">Beacon Chain (Arbitrum)</div>
                  <div className="text-xs text-muted-foreground">
                    40,000 TPS • Coordinación inter-shard
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-muted/30 p-2 rounded text-center">
                    <div className="text-xs font-medium">Americas</div>
                    <div className="text-xs text-muted-foreground">20K TPS</div>
                  </div>
                  <div className="bg-muted/30 p-2 rounded text-center">
                    <div className="text-xs font-medium">Europe</div>
                    <div className="text-xs text-muted-foreground">20K TPS</div>
                  </div>
                  <div className="bg-muted/30 p-2 rounded text-center">
                    <div className="text-xs font-medium">Asia-Pacific</div>
                    <div className="text-xs text-muted-foreground">20K TPS</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                <CardTitle>Criptografía Post-Cuántica</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Stack híbrido que combina algoritmos clásicos con post-cuánticos certificados por NIST.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                  <span className="text-sm">Firmas</span>
                  <Badge>SPHINCS+ + ECDSA</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                  <span className="text-sm">Key Exchange</span>
                  <Badge>Kyber + X25519</Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                  <span className="text-sm">Encriptación</span>
                  <Badge>AES-256 + NTRU</Badge>
                </div>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg mt-4">
                <p className="text-xs font-medium">
                  Resistente a computadoras cuánticas futuras
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Regulatorio */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Cumplimiento Regulatorio Global</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">América</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>NIST Cybersecurity Framework 2.0</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>CCPA / CPRA (California)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>HIPAA (Enterprise mode)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>SOC 2 Type II</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>LGPD (Brasil)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Europa</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>GDPR completo</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>eIDAS (nivel sustancial/alto)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>PSD2 SCA</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Privacy by design (Art. 25)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Data portability (Art. 20)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Asia-Pacífico</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>APPI (Japón)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>PDPA (Singapur)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>PIPL (China)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Privacy Act (Australia)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* KPIs y Métricas */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Métricas de Éxito</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">KPIs Técnicos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Latencia verificación</span>
                <Badge variant="secondary">&lt;2s (p95)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Throughput</span>
                <Badge variant="secondary">120K TPS</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Uptime SLA</span>
                <Badge variant="secondary">99.99%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">False Accept Rate</span>
                <Badge variant="secondary">&lt;0.01%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">KPIs de Negocio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Usuarios activos (2027)</span>
                <Badge variant="secondary">10M</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Conversión Premium</span>
                <Badge variant="secondary">&gt;15%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Churn anual</span>
                <Badge variant="secondary">&lt;5%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">NPS Score</span>
                <Badge variant="secondary">&gt;70</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">KPIs de Seguridad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Breaches (5 años)</span>
                <Badge variant="secondary">0</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Detección incidente</span>
                <Badge variant="secondary">&lt;5 min</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Respuesta incidente</span>
                <Badge variant="secondary">&lt;1 hora</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tolerancia a fallos</span>
                <Badge variant="secondary">2/7 nodos</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Roadmap de Implementación</h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Q4 2025 - Q1 2026: Fundación</CardTitle>
                  <CardDescription>Infraestructura base y testnet</CardDescription>
                </div>
                <Badge>En Progreso</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Smart contracts base (Arbitrum + Fabric)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sistema de identificadores derivados</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Testnet con 7 validadores iniciales</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Q2 2026: Piloto Cerrado</CardTitle>
                  <CardDescription>1,000 usuarios beta</CardDescription>
                </div>
                <Badge variant="outline">Próximo</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Biometría cancelable funcional</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Integración con 3 servicios partner</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Auditoría de seguridad Trail of Bits</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Q3-Q4 2026: Mainnet Beta</CardTitle>
                  <CardDescription>Lanzamiento público premium</CardDescription>
                </div>
                <Badge variant="outline">Planificado</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Plan Premium disponible ($9.99/mes)</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Compliance GDPR/CCPA certificado</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Objetivo: 2M usuarios</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>2027: Escala Global</CardTitle>
                  <CardDescription>Adopción masiva e interoperabilidad</CardDescription>
                </div>
                <Badge variant="outline">Visión</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>100M+ usuarios activos</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Interoperabilidad con Polygon ID, Civic</span>
                </li>
                <li className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Estándar abierto W3C DID</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <Card className="border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Próximos Pasos</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Auditoría de seguridad</strong>
                    <p className="text-sm text-muted-foreground">Trail of Bits / Kudelski Security</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Piloto Q2 2026</strong>
                    <p className="text-sm text-muted-foreground">1,000 usuarios beta cerrados</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Fundraising Serie A</strong>
                    <p className="text-sm text-muted-foreground">$15M objetivo</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong>Certificaciones ISO</strong>
                    <p className="text-sm text-muted-foreground">27001 / 27701</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <div className="text-center text-sm text-muted-foreground pt-8 border-t">
        <p>Documento técnico v2.3 - Octubre 2025</p>
        <p className="font-medium mt-1">ID-NVIDA™ by TAMV Ecosystems MD-X4</p>
      </div>
    </div>
  );
};

export default DocsIdNvida;
