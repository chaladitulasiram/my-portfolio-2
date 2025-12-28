import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingShape = ({ position, color, speed = 1, distort = 0.3, scale = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) => {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const TorusKnot = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh position={[3, -1, -2]} scale={0.6}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const Octahedron = () => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={[-3, 1, -1]} scale={0.8}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#00b894"
          emissive="#00b894"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const Icosahedron = () => {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={2}>
      <mesh position={[2.5, 2, -3]} scale={0.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#00b894" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <FloatingShape position={[-2, -0.5, 0]} color="#00d4ff" distort={0.4} speed={1.5} scale={0.7} />
          <FloatingShape position={[2.5, 1.5, -2]} color="#00b894" distort={0.3} speed={1} scale={0.5} />
          <TorusKnot />
          <Octahedron />
          <Icosahedron />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
