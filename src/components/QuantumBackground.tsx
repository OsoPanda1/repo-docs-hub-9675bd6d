import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";

const palette = [
  "#ECF0EF", "#FCFAF1", "#27FFF3", "#6888F7", 
  "#8BDBF8", "#D5D7D8", "#131521", "#174C65"
];

function MorphParticles({ count = 90 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = [], cols = [];
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 17
      );
      const c = new THREE.Color(palette[Math.floor(Math.random() * palette.length)]);
      cols.push(c.r, c.g, c.b);
    }
    return { positions: new Float32Array(pos), colors: new Float32Array(cols) };
  }, [count]);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const t = clock.getElapsedTime();
      mesh.current.rotation.y = t * 0.06;
      mesh.current.rotation.x = Math.sin(t / 8) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.26}
        sizeAttenuation
        opacity={0.80}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

function WireWavePlane() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      const t = clock.getElapsedTime();
      mesh.current.rotation.z = Math.sin(t / 9) * 0.02;
      const attr = mesh.current.geometry.attributes.position;
      for (let i = 0; i < attr.count; i++) {
        const x = attr.getX(i), y = attr.getY(i);
        const z = Math.sin(x * 1.2 + t * 0.7) * 0.16 + Math.cos(y * 1.0 + t * 1.1) * 0.11;
        attr.setZ(i, z);
      }
      attr.needsUpdate = true;
    }
  });

  return (
    <mesh ref={mesh} position={[0, -4, 0]}>
      <planeGeometry args={[34, 12, 55, 31]} />
      <meshPhysicalMaterial
        color="#101221"
        metalness={0.64}
        roughness={0.13}
        wireframe
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function ElectricLiquidDrops({ drops = 5 }: { drops?: number }) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.x = (i - drops / 2) * 6.5 + 1.5 * Math.sin(t + i);
        mesh.position.y = -2.3 + Math.cos(t * 0.9 + i) * 2.3;
      }
    });
  });

  return (
    <>
      {Array.from({ length: drops }).map((_, i) => (
        <mesh
          key={i}
          ref={el => meshRefs.current[i] = el}
          position={[0, 0, 0]}
        >
          <sphereGeometry args={[0.42, 24, 24]} />
          <MeshDistortMaterial
            color={palette[i % palette.length]}
            metalness={0.75}
            roughness={0.23}
            distort={0.26}
            speed={1.8}
          />
        </mesh>
      ))}
    </>
  );
}

export default function QuantumBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 55 }}
        style={{ background: 'linear-gradient(to bottom, hsl(var(--background)), hsl(var(--muted)))' }}
      >
        <ambientLight intensity={0.45} />
        <pointLight position={[9, 7, 5]} intensity={1.2} color="#27FFF3" />
        <pointLight position={[-8, -5, 3]} intensity={0.9} color="#6888F7" />
        <MorphParticles count={90} />
        <WireWavePlane />
        <ElectricLiquidDrops drops={5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
