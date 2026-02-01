import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Paleta cuántica TAMV
const QUANTUM_COLORS = {
  nebulaPrimary: new THREE.Color('#3B82F6'),
  nebulaSecondary: new THREE.Color('#8B5CF6'),
  starCore: new THREE.Color('#FFFFFF'),
  cosmicDust: new THREE.Color('#00FFFF'),
};

interface QuantumSkyboxProps {
  entropyLevel?: number;
  resolution?: number;
}

// Genera textura procedural de skybox cuántico
export function generateQuantumSkyboxTexture(entropyLevel: number = 0.5, resolution: number = 512) {
  const size = resolution;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const stars = Math.floor(800 + entropyLevel * 3200);
  const nebulaIntensity = 0.15 + entropyLevel * 0.65;

  // Background gradient
  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, size * 0.1,
    size / 2, size / 2, size
  );
  gradient.addColorStop(0, 'rgba(15,20,40,1)');
  gradient.addColorStop(1, 'rgba(0,0,0,1)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Nebula clouds
  for (let i = 0; i < 60 + entropyLevel * 140; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = Math.random() * 120 + 40;
    const hue = 200 + Math.random() * 80;

    ctx.fillStyle = `hsla(${hue},70%,60%,${nebulaIntensity * 0.15})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Stars
  for (let i = 0; i < stars; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const brightness = Math.random() * (0.5 + entropyLevel);

    ctx.fillStyle = `rgba(255,255,255,${brightness})`;
    ctx.fillRect(x, y, 1.2, 1.2);
  }

  return canvas;
}

// Partículas de nebulosa procedural
export function NebulaParticles({ count = 1000, entropyLevel = 0.5 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const szs = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribución esférica
      const radius = 30 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      // Color con variación por entropía
      const hue = 0.55 + Math.random() * 0.15; // Azul-púrpura
      const color = new THREE.Color().setHSL(hue, 0.7, 0.5 + entropyLevel * 0.3);
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;

      szs[i] = Math.random() * 2 + 0.5;
    }

    return { positions: pos, colors: cols, sizes: szs };
  }, [count, entropyLevel]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Shader de vidrio soberano para el núcleo Isabella
export const sovereignGlassShader = {
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPos;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPos.xyz;
      gl_Position = projectionMatrix * viewMatrix * worldPos;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform float uEthicalPulse;
    uniform vec3 uCoreColor;
    
    varying vec3 vNormal;
    varying vec3 vWorldPos;
    
    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorldPos);
      vec3 normal = normalize(vNormal);
      
      float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
      float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
      float ethicalGlow = mix(0.2, 1.5, uEthicalPulse);
      
      vec3 glassColor = uCoreColor;
      vec3 emissive = uCoreColor * pulse * ethicalGlow * 0.6;
      
      vec3 finalColor = glassColor + emissive * fresnel;
      
      gl_FragColor = vec4(finalColor, 0.55 + fresnel * 0.25);
    }
  `
};

// Flujos de datos entre módulos
export function DataFlowBeams({ trafficLevel = 0.5 }) {
  const beamsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (beamsRef.current) {
      beamsRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  const beamCount = 8;
  const beams = useMemo(() => 
    Array.from({ length: beamCount }, (_, i) => ({
      angle: (i * Math.PI * 2) / beamCount,
      intensity: 0.3 + Math.random() * 0.4 * trafficLevel,
    }))
  , [trafficLevel]);

  return (
    <group ref={beamsRef}>
      {beams.map((beam, i) => (
        <mesh 
          key={i} 
          position={[
            Math.cos(beam.angle) * 4,
            0,
            Math.sin(beam.angle) * 4
          ]}
          rotation={[0, -beam.angle, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.02, 0.02, 6, 8]} />
          <meshBasicMaterial 
            color={trafficLevel > 0.7 ? '#F43F5E' : '#00FFFF'} 
            transparent 
            opacity={beam.intensity}
          />
        </mesh>
      ))}
    </group>
  );
}

export default NebulaParticles;
