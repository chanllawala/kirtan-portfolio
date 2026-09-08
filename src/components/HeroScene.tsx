"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function CentralShape() {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const targetY = pointer.current.x * 0.5;
    const targetX = pointer.current.y * -0.3;
    group.rotation.y += (targetY - group.rotation.y) * 0.04;
    group.rotation.x += (targetX - group.rotation.x) * 0.04;
    group.rotation.z += delta * 0.04;
  });

  return (
    <group ref={groupRef} position={[1.6, 0, 0]}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
        <mesh>
          <icosahedronGeometry args={[1.4, 1]} />
          <MeshDistortMaterial
            color="#e2a25c"
            emissive="#e2a25c"
            emissiveIntensity={0.18}
            roughness={0.2}
            metalness={0.65}
            distort={0.32}
            speed={1.4}
            wireframe
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.38, 1]} />
          <meshBasicMaterial color="#e2a25c" transparent opacity={0.035} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      className="pointer-events-none"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#e2a25c" />
      <pointLight position={[-4, -2, -3]} intensity={15} color="#f0b978" />
      <Suspense fallback={null}>
        <CentralShape />
        <Sparkles count={70} scale={[7, 5, 4]} size={1.6} speed={0.25} color="#e2a25c" opacity={0.45} />
      </Suspense>
    </Canvas>
  );
}
