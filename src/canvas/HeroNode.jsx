import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HeroNode = () => {
  const groupRef = useRef(null);
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }

    if (groupRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial 
          color="#0ea5e9" 
          wireframe={true} 
          emissive="#0ea5e9" 
          emissiveIntensity={0.8} 
        />
      </mesh>
    </group>
  );
};