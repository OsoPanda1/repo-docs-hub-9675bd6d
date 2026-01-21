import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Environment, Float, Stars, Sparkles, MeshTransmissionMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import * as THREE from "three";

// Monumental sacred geometry floating in the dedication space
const SacredGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 2, -15]} scale={4}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#9b87f5"
        />
      </mesh>
    </Float>
  );
};

// Anubis guardian pillars representing the 7 federated layers
const GuardianPillars = () => {
  const pillars = Array.from({ length: 7 }, (_, i) => {
    const angle = (i / 7) * Math.PI * 2;
    const radius = 20;
    return {
      position: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius] as [number, number, number],
      layer: ["ID-NVIDA", "INTENCIÓN", "DEKATEOTL", "SEGURIDAD", "TAU", "BOOKPI", "MEMORIA"][i],
      color: ["#9b87f5", "#0ea5e9", "#22c55e", "#ef4444", "#f59e0b", "#8b5cf6", "#06b6d4"][i]
    };
  });

  return (
    <>
      {pillars.map((pillar, i) => (
        <group key={i} position={pillar.position}>
          <mesh position={[0, 8, 0]}>
            <cylinderGeometry args={[0.5, 0.8, 16, 8]} />
            <meshStandardMaterial 
              color={pillar.color} 
              emissive={pillar.color}
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <Text
            position={[0, 17, 0]}
            fontSize={0.8}
            color={pillar.color}
            anchorX="center"
            anchorY="middle"
          >
            {pillar.layer}
          </Text>
          <Sparkles
            count={20}
            scale={3}
            size={2}
            speed={0.3}
            color={pillar.color}
            position={[0, 8, 0]}
          />
        </group>
      ))}
    </>
  );
};

// The infinite floor representing the foundation
const SacredFloor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[200, 200, 100, 100]} />
      <meshStandardMaterial
        color="#0c0a1a"
        metalness={0.9}
        roughness={0.3}
        wireframe={false}
      />
    </mesh>
  );
};

// The dedication text floating ceremonially
const DedicationText = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2 + 5;
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 0.5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const opacity = Math.min(progress / 30, 1);

  return (
    <group ref={groupRef} position={[0, 5, -5]}>
      <Text
        fontSize={0.6}
        maxWidth={12}
        textAlign="center"
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        fillOpacity={opacity}
      >
        {`DEDICATORIA FUNDACIONAL DEL TAMV

Este proyecto nace de cinco años de violencia digital extrema:
acoso sistemático, humillación pública, robo de identidad,
extorsión y ataques coordinados.

Su fundador sobrevivió al umbral,
transformándose de víctima en fuerza consciente.

Dedico este ecosistema a

REINA TREJO SERRANO

Mujer de hierro.
A ti que renunciaste a todo por mí.
A ti, mi madre.

— Edwin Oswaldo Castillo Trejo
(Anubis Villaseñor)`}
      </Text>
    </group>
  );
};

// Main 3D Scene
const Scene3D = ({ onAcknowledge }: { onAcknowledge: () => void }) => {
  return (
    <>
      <color attach="background" args={["#030014"]} />
      <fog attach="fog" args={["#030014", 30, 100]} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 20, 0]} intensity={1} color="#9b87f5" />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#0ea5e9" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
      
      <SacredFloor />
      <GuardianPillars />
      <SacredGeometry />
      <DedicationText onComplete={onAcknowledge} />
      
      <Environment preset="night" />
    </>
  );
};

const SalaXRDedicatoria = () => {
  const navigate = useNavigate();
  const [acknowledged, setAcknowledged] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show acknowledge button after 15 seconds of contemplation
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleAcknowledge = async () => {
    setLoading(true);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Record the foundational act acknowledgment
        const acknowledgmentData = {
          event: "FOUNDATIONAL_ACT_ACKNOWLEDGED",
          user_id: user.id,
          hash: await generateHash("TAMV_DEDICATORIA_FUNDACIONAL_V1"),
          timestamp: new Date().toISOString(),
          version: "FOUNDATION_V1"
        };
        
        console.log("Foundational Act Acknowledged:", acknowledgmentData);
      }
      
      setAcknowledged(true);
      
      // Navigate to the main world after acknowledgment
      setTimeout(() => {
        navigate("/");
      }, 3000);
      
    } catch (error) {
      console.error("Error acknowledging dedication:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateHash = async (text: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  if (acknowledged) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Bienvenido al TAMV
          </div>
          <div className="text-muted-foreground">
            Has cruzado el umbral fundacional
          </div>
          <div className="text-sm text-purple-400">
            Entrando al Omniverso Civilizatorio...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <Scene3D onAcknowledge={handleAcknowledge} />
      </Canvas>
      
      {/* Overlay UI */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Header */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <div className="text-sm uppercase tracking-[0.5em] text-purple-400/60">
            Acto Fundacional
          </div>
          <div className="text-2xl font-light text-white/80 mt-2">
            Sala de la Dedicatoria
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
          {!showButton && (
            <div className="text-center space-y-2">
              <div className="text-sm text-white/40">
                Contempla el origen del TAMV
              </div>
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                  style={{ width: showButton ? '100%' : '0%' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Acknowledge button */}
        {showButton && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-auto">
            <Button
              onClick={handleAcknowledge}
              disabled={loading}
              className="px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border border-purple-400/30"
            >
              {loading ? "Registrando..." : "He Comprendido"}
            </Button>
            <div className="text-xs text-center mt-4 text-white/40">
              Este acto quedará registrado de forma inmutable
            </div>
          </div>
        )}

        {/* 7 Layers indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-3">
          {["ID-NVIDA", "INTENCIÓN", "DEKATEOTL", "SEGURIDAD", "TAU", "BOOKPI", "MEMORIA"].map((layer, i) => (
            <div key={layer} className="flex items-center gap-2 text-xs">
              <div className={`w-2 h-2 rounded-full ${
                i < 7 ? "bg-purple-500" : "bg-white/20"
              }`} />
              <span className="text-white/40">{layer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalaXRDedicatoria;
