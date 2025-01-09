'use client';

import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';

const StarBackground = (props: ThreeElements['group']) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const arr = new Float32Array(500 * 3);
    return random.inSphere(arr, { radius: 1.2 });
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 h-auto w-full -z-10 pointer-events-none">
      <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
