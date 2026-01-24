import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { 
  MeshDistortMaterial, 
  OrbitControls, 
  Float, 
  Stars,
  Environment,
  Sparkles,
  Text3D,
  Center
} from '@react-three/drei';

// Paleta TAMV de 7ª Generación
const TAMV_PALETTE = {
  primary: '#3B82F6',
  secondary: '#00FFFF',
  accent: '#8B5CF6',
  gold: '#F59E0B',
  emerald: '#10B981',
  rose: '#F43F5E',
  silver: '#E5E7EB',
  void: '#0A0A0F'
};

// Núcleo Central Isabella
function IsabellaCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Glow effect */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[1.8, 32, 32]} />
          <meshBasicMaterial 
            color={TAMV_PALETTE.secondary} 
            transparent 
            opacity={0.15} 
          />
        </mesh>
        
        {/* Core sphere */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 2]} />
          <MeshDistortMaterial
            color={TAMV_PALETTE.primary}
            metalness={0.9}
            roughness={0.1}
            distort={0.3}
            speed={2}
          />
        </mesh>

        {/* Inner energy */}
        <mesh>
          <sphereGeometry args={[0.8, 24, 24]} />
          <meshStandardMaterial
            color={TAMV_PALETTE.secondary}
            emissive={TAMV_PALETTE.secondary}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

// 7 Capas Federadas Orbitando
function FederatedLayers() {
  const groupRef = useRef<THREE.Group>(null);
  
  const layers = useMemo(() => [
    { name: 'Isabella', color: TAMV_PALETTE.primary, radius: 3, speed: 0.5 },
    { name: 'Gateway', color: TAMV_PALETTE.secondary, radius: 3.8, speed: 0.4 },
    { name: 'BookPI', color: TAMV_PALETTE.gold, radius: 4.6, speed: 0.35 },
    { name: 'Policy', color: TAMV_PALETTE.emerald, radius: 5.4, speed: 0.3 },
    { name: 'Orchestrator', color: TAMV_PALETTE.accent, radius: 6.2, speed: 0.25 },
    { name: 'Mesh', color: TAMV_PALETTE.rose, radius: 7, speed: 0.2 },
    { name: 'Watchdog', color: TAMV_PALETTE.silver, radius: 7.8, speed: 0.15 },
  ], []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {layers.map((layer, idx) => (
        <LayerOrbit key={layer.name} {...layer} index={idx} />
      ))}
    </group>
  );
}

function LayerOrbit({ name, color, radius, speed, index }: {
  name: string;
  color: string;
  radius: number;
  speed: number;
  index: number;
}) {
  const nodeRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (nodeRef.current) {
      nodeRef.current.position.x = Math.cos(t + index) * radius;
      nodeRef.current.position.z = Math.sin(t + index) * radius;
      nodeRef.current.position.y = Math.sin(t * 2 + index) * 0.5;
      nodeRef.current.rotation.y = t * 2;
    }
  });

  return (
    <group>
      {/* Orbital ring */}
      <mesh ref={ringRef} rotation-x={Math.PI / 2}>
        <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Layer node */}
      <Float speed={3} floatIntensity={0.2}>
        <mesh ref={nodeRef}>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Partículas Cuánticas
function QuantumParticles({ count = 500 }) {
  const points = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color(TAMV_PALETTE.primary),
      new THREE.Color(TAMV_PALETTE.secondary),
      new THREE.Color(TAMV_PALETTE.accent),
      new THREE.Color(TAMV_PALETTE.gold),
    ];

    for (let i = 0; i < count; i++) {
      const radius = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }

    return { positions: pos, colors: cols };
  }, [count]);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.getElapsedTime() * 0.02;
      points.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Conexiones de energía entre capas
function EnergyConnections() {
  const lineRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={lineRef}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh key={i} rotation-y={(i * Math.PI * 2) / 6}>
          <cylinderGeometry args={[0.02, 0.02, 8, 8]} />
          <meshBasicMaterial 
            color={TAMV_PALETTE.secondary} 
            transparent 
            opacity={0.3} 
          />
        </mesh>
      ))}
    </group>
  );
}

// Camera controller
function CameraController() {
  const { camera } = useThree();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.1;
    camera.position.x = Math.sin(t) * 15;
    camera.position.z = Math.cos(t) * 15;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function SeventhGenVisualizer() {
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden glass-effect">
      <Canvas
        camera={{ position: [0, 5, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color={TAMV_PALETTE.primary} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color={TAMV_PALETTE.secondary} />
          <spotLight position={[0, 20, 0]} intensity={0.5} color={TAMV_PALETTE.accent} />

          {/* Background stars */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          {/* Sparkles effect */}
          <Sparkles count={200} scale={20} size={2} speed={0.5} color={TAMV_PALETTE.secondary} />

          {/* Main components */}
          <IsabellaCore />
          <FederatedLayers />
          <QuantumParticles count={500} />
          <EnergyConnections />

          {/* Controls */}
          <OrbitControls 
            enableZoom={true} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={0.5}
            minDistance={8}
            maxDistance={30}
          />

          {/* Environment */}
          <fog attach="fog" args={[TAMV_PALETTE.void, 20, 60]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
