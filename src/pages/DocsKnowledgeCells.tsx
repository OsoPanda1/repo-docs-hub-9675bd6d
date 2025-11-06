import { Brain, GitBranch, Layers, Zap, Database, Code2, Network, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DocsKnowledgeCells() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-lg border border-silver-metallic/20 bg-gradient-to-br from-deep-space via-deep-space/95 to-aqua-iridescent/10 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-aqua-iridescent animate-pulse" />
            <div>
              <h1 className="text-4xl font-bold metallic-text">Knowledge Cells System</h1>
              <p className="text-silver-metallic/80 font-orbitron">Arquitectura Modular de Microservicios Especializados</p>
            </div>
          </div>
          <p className="text-pearl-white/90 text-lg leading-relaxed">
            Sistema revolucionario de células de conocimiento independientes, cada una especializada en un dominio específico, 
            con APIs propias, deployment autónomo y comunicación federada.
          </p>
        </div>
      </div>

      {/* Architecture */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6 flex items-center gap-2">
          <Layers className="w-6 h-6 text-aqua-iridescent" />
          Arquitectura del Sistema
        </h2>
        <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
          <pre className="bg-deep-space border border-silver-metallic/20 rounded p-6 overflow-x-auto">
            <code className="text-aqua-iridescent text-sm font-mono">{`src/core/knowledge/
├── KnowledgeCell.types.ts      # Tipos TypeScript
├── KnowledgeRepository.ts      # Repositorio central
├── index.ts                    # Exports
└── cells/
    ├── security-cell/          # Seguridad
    ├── ai-cell/                # IA y ML
    ├── blockchain-cell/        # Blockchain
    ├── xr-cell/                # XR/3D/4D
    └── economics-cell/         # Economía`}</code>
          </pre>
        </Card>
      </div>

      {/* Types */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Tipos de Knowledge Cell</h2>
        <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
          <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
            <code className="text-aqua-iridescent text-sm font-mono">{`interface KnowledgeCell {
  id: string;
  name: string;
  type: 'security' | 'ai' | 'blockchain' | 'xr' | 'economics';
  version: string;
  status: 'active' | 'inactive' | 'maintenance';
  apiEndpoint: string;
  dependencies: string[];
  capabilities: string[];
  metadata: {
    author: string;
    created: Date;
    updated: Date;
    complexity: number;
  };
}`}</code>
          </pre>
        </Card>
      </div>

      {/* Cells Grid */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Células Implementadas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Shield,
              name: "Security Cell",
              desc: "Quantum Sentinel, Anubis Guardian, Dekateotl",
              endpoint: "/api/cells/security",
              color: "text-aqua-iridescent"
            },
            {
              icon: Brain,
              name: "AI Cell",
              desc: "ISABELLA AI, MGM, MCO, MAD, MPS",
              endpoint: "/api/cells/ai",
              color: "text-navy-metallic"
            },
            {
              icon: Network,
              name: "Blockchain Cell",
              desc: "Lightning Justice, Smart Contracts, NFTs",
              endpoint: "/api/cells/blockchain",
              color: "text-silver-metallic"
            },
            {
              icon: Code2,
              name: "XR Cell",
              desc: "DreamSpaces, Génesis Digytamv, MRO",
              endpoint: "/api/cells/xr",
              color: "text-pearl-white"
            }
          ].map((cell, idx) => (
            <Card key={idx} className="p-6 bg-deep-space/50 border-silver-metallic/20 hover:border-aqua-iridescent/40 transition-all">
              <cell.icon className={`w-10 h-10 ${cell.color} mb-4`} />
              <h3 className="text-xl font-bold text-pearl-white mb-2">{cell.name}</h3>
              <p className="text-silver-metallic/70 text-sm mb-4">{cell.desc}</p>
              <code className="text-xs text-aqua-iridescent font-mono">{cell.endpoint}</code>
            </Card>
          ))}
        </div>
      </div>

      {/* Repository */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Knowledge Repository</h2>
        <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
          <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
            <code className="text-aqua-iridescent text-sm font-mono">{`class KnowledgeRepository {
  cells: Record<cellId, KnowledgeCell>;
  relations: Array<{from, to, relation}>;
  aiExpertiseProfile: string;
  metadata: {
    totalCells: number;
    activeCells: number;
    version: string;
  };

  // Métodos
  getCellById(id: string): KnowledgeCell;
  getCellsByType(type: string): KnowledgeCell[];
  registerCell(cell: KnowledgeCell): void;
  updateCell(id: string, updates: Partial<KnowledgeCell>): void;
  queryCells(filter: CellFilter): KnowledgeCell[];
}`}</code>
          </pre>
        </Card>
      </div>

      {/* React Hooks */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">React Hooks</h2>
        <div className="space-y-4">
          <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
            <h3 className="text-lg font-semibold text-pearl-white mb-3">useKnowledgeCell</h3>
            <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
              <code className="text-aqua-iridescent text-sm font-mono">{`const { cell, loading, error } = useKnowledgeCell('security-cell-01');`}</code>
            </pre>
          </Card>
          <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
            <h3 className="text-lg font-semibold text-pearl-white mb-3">useKnowledgeCellsByType</h3>
            <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
              <code className="text-aqua-iridescent text-sm font-mono">{`const { cells } = useKnowledgeCellsByType('ai');`}</code>
            </pre>
          </Card>
        </div>
      </div>

      {/* Deployment */}
      <div>
        <h2 className="text-2xl font-bold metallic-text mb-6">Deployment Independiente</h2>
        <Card className="p-6 bg-deep-space/50 border-silver-metallic/20">
          <p className="text-silver-metallic/70 mb-4">Cada Knowledge Cell se despliega de forma autónoma:</p>
          <pre className="bg-deep-space border border-silver-metallic/20 rounded p-4 overflow-x-auto">
            <code className="text-aqua-iridescent text-sm font-mono">{`knowledge-cells/
├── security-cell/
│   ├── Dockerfile
│   ├── openapi.yaml
│   ├── tests/
│   └── metrics-endpoint
├── ai-cell/
│   ├── Dockerfile
│   ├── openapi.yaml
│   ├── tests/
│   └── metrics-endpoint`}</code>
          </pre>
        </Card>
      </div>

      {/* CTA */}
      <Card className="relative overflow-hidden border-aqua-iridescent/30 bg-gradient-to-br from-deep-space via-navy-metallic/20 to-aqua-iridescent/10 p-8">
        <div className="relative text-center">
          <Brain className="w-16 h-16 text-aqua-iridescent mx-auto mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold metallic-text mb-3">
            Sistema Modular y Escalable
          </h3>
          <p className="text-silver-metallic/80 max-w-2xl mx-auto">
            Las Knowledge Cells permiten escalar cada módulo de forma independiente, 
            manteniendo alta cohesión y bajo acoplamiento.
          </p>
        </div>
      </Card>
    </div>
  );
}
