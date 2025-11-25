import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows, Stars } from '@react-three/drei';
import { Mesh, Points } from 'three';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Main floating shape - Torus Knot
const FloatingShape = (props: any) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} {...props}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial
          color="#D4AF37"
          roughness={0.1}
          metalness={1}
          emissive="#D4AF37"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

// Secondary shape - Icosahedron
const SecondaryShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t / 3;
    meshRef.current.rotation.y = t / 4;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#F6D365"
          roughness={0.2}
          metalness={0.8}
          emissive="#F6D365"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

// Particle system
const Particles = () => {
  const pointsRef = useRef<Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() / 10;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#D4AF37"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const ThreeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[90vh] w-full bg-gradient-to-b from-luxury-black via-luxury-dark to-luxury-black overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-black/80 z-[5]" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">MEN TOUTCH</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gold-400 mb-4 font-light"
          >
            L'Élégance Algérienne Redéfinie
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Découvrez notre collection exclusive de vêtements pour hommes,
            alliant tradition et modernité
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/products')}
              className="pointer-events-auto btn btn-primary text-lg px-10 py-4 hover-lift"
            >
              Découvrir la Collection
            </button>
            <button
              onClick={() => navigate('/about')}
              className="pointer-events-auto btn btn-outline text-lg px-10 py-4"
            >
              Notre Histoire
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gold-500 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gold-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas className="absolute inset-0 z-0">
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="city" />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#D4AF37"
        />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#F6D365" />

        {/* 3D Objects */}
        <FloatingShape position={[0, 0, 0]} />
        <SecondaryShape position={[3, 1, -2]} />
        <SecondaryShape position={[-3, -1, -2]} />

        {/* Particles */}
        <Particles />

        {/* Stars background */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Shadows */}
        <ContactShadows
          resolution={1024}
          scale={10}
          blur={2.5}
          opacity={0.6}
          far={10}
          color="#000000"
        />
      </Canvas>
    </div>
  );
};
