npm install three @react-three/fiber @react-three/drei
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";

// Paleta galáctica y sofisticada
const palette = [
  "#ECF0EF", // pearl white
  "#FCFAF1", // ivory
  "#27FFF3", // aqua iridescent
  "#6888F7", // metallic blue
  "#8BDBF8", // electric blue
  "#D5D7D8", // silver
  "#131521", // black
  "#174C65", // deep navy blue
];

function MorphParticles({ count = 90 }) {
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
  }, []);
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
        onBeforeCompile={shader => {
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <dithering_fragment>",
            `
            float glow = 0.60 - length(gl_PointCoord - vec2(0.5));
            gl_FragColor.rgb += glow * 0.36;
            #include <dithering_fragment>
            `
          );
        }}
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
      let attr = mesh.current.geometry.attributes.position;
      for (let i = 0; i < attr.count; i++) {
        let x = attr.getX(i), y = attr.getY(i);
        let z = Math.sin(x * 1.2 + t * 0.7) * 0.16 + Math.cos(y * 1.0 + t * 1.1) * 0.11;
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
        clearcoat={0.25}
        clearcoatRoughness={0.29}
        reflectivity={0.29}
        opacity={0.85}
        transparent
        wireframe
        wireframeLinewidth={0.5}
        wireframeLinecap="round"
        emissive="#D5D7D8"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

function ElectricLiquidDrops({ drops = 5, buckleInterval = 8 }) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        // Morphing vertical drop positions
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
          <sphereGeometry args={[1.1, 26, 26]} />
          <MeshDistortMaterial
            color="#6EFFFB"
            transparent
            metalness={0.38}
            roughness={0.18}
            opacity={0.78}
            distort={0.38}
            speed={1.9 + i * 0.08}
            emissive="#ECF0EF"
            emissiveIntensity={0.17}
          />
        </mesh>
      ))}
    </>
  );
}

export default function TAMVQuantumLuxuryBackground() {
  return (
    <div className="w-full h-full fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 13], fov: 54 }}>
        olor attach="background" args={["#131521"]"]} />
        <ambientLight intensity={1.0} />
        {/* Morph particles, glow elegant */}
        <MorphParticles count={110} />
        {/* Wireframe galactic waves, fine/neat */}
        <WireWavePlane />
        {/* Liquid electric drops */}
        <ElectricLiquidDrops drops={5} />
        {/* OrbitControls for demo/interact - can be disabled */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
