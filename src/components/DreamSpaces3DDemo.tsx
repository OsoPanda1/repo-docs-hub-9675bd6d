import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text, Environment, Float, Sparkles } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as THREE from "three";

// Quantum Particle Component
function QuantumParticle({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.3 : 1}
    >
      <octahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial
        color={hovered ? "#00ffff" : "#ff00ff"}
        emissive={hovered ? "#00ffff" : "#ff00ff"}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// Rotating Platform
function Platform() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, 0]} receiveShadow>
      <cylinderGeometry args={[3, 3, 0.2, 32]} />
      <meshStandardMaterial
        color="#1a1a2e"
        metalness={0.9}
        roughness={0.1}
        emissive="#0a0a1e"
      />
    </mesh>
  );
}

// Quantum Field Effect
function QuantumField() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(state.clock.elapsedTime + x) * 0.3 + Math.cos(state.clock.elapsedTime + z) * 0.3;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Floating Text
function FloatingText() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={[0, 2, 0]}
        fontSize={0.5}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        DREAMSPACES™
      </Text>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.2}
        color="#ff00ff"
        anchorX="center"
        anchorY="middle"
      >
        Quantum XR Experience
      </Text>
    </Float>
  );
}

// Main 3D Scene
function Scene3D() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 5]} />
      <OrbitControls enablePan={false} maxDistance={10} minDistance={3} />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      
      <Environment preset="night" />
      
      <FloatingText />
      <Platform />
      <QuantumField />
      
      <QuantumParticle position={[-2, 0, 0]} />
      <QuantumParticle position={[2, 0, 0]} />
      <QuantumParticle position={[0, 0, -2]} />
      <QuantumParticle position={[0, 0, 2]} />
      
      <Sparkles count={100} scale={10} size={2} speed={0.4} color="#00ffff" />
    </>
  );
}

// Main Component
export default function DreamSpaces3DDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Badge>Demo Interactivo</Badge>
          DreamSpaces™ 3D Engine
        </CardTitle>
        <CardDescription>
          Visualización en tiempo real con física cuántica simulada y efectos de partículas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-primary/20 bg-background">
          <Canvas shadows>
            <Scene3D />
          </Canvas>
          
          <div className="absolute bottom-4 left-4 glass-effect p-3 rounded-lg">
            <div className="flex gap-2 text-xs">
              <Badge variant="outline">🖱️ Drag para rotar</Badge>
              <Badge variant="outline">🔍 Scroll para zoom</Badge>
              <Badge variant="outline">✨ Hover sobre partículas</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="glass-effect p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <p className="text-xs text-muted-foreground">Partículas Cuánticas</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-accent mb-1">1000+</div>
            <p className="text-xs text-muted-foreground">Partículas de Campo</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-secondary mb-1">60 FPS</div>
            <p className="text-xs text-muted-foreground">Renderizado en Tiempo Real</p>
          </div>
        </div>

        <div className="glass-effect p-4 rounded-lg">
          <h4 className="font-semibold mb-2 text-sm">🎨 Características de este Demo:</h4>
          <ul className="text-xs text-muted-foreground space-y-1 ml-4">
            <li>• <strong>Física Cuántica:</strong> Partículas flotantes con movimiento sinusoidal</li>
            <li>• <strong>Materiales PBR:</strong> Metalness, roughness, emisión dinámica</li>
            <li>• <strong>Interactividad:</strong> Hover sobre partículas para efecto de escala</li>
            <li>• <strong>Campo de Partículas:</strong> Sistema de 1000 puntos con animación procedural</li>
            <li>• <strong>Iluminación Dinámica:</strong> Luces ambientales y puntuales con colores cuánticos</li>
            <li>• <strong>Post-Processing:</strong> Environment HDR y sparkles cinematográficos</li>
          </ul>
        </div>

        <Button className="w-full" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸️ Pausar" : "▶️ Iniciar"} Experiencia Completa
        </Button>
      </CardContent>
    </Card>
  );
}
