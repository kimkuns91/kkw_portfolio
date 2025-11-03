'use client';

import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';

/**
 * 기기 성능에 따른 파티클 수 결정
 *
 * @returns 최적화된 파티클 수
 */
const getOptimalParticleCount = (): number => {
  if (typeof window === 'undefined') return 500;

  // 모바일 기기 감지
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // 화면 크기 기반 판단
  const isSmallScreen = window.innerWidth < 768;

  if (isMobile || isSmallScreen) {
    return 300; // 모바일: 300개
  } else if (window.innerWidth < 1440) {
    return 500; // 태블릿/작은 데스크톱: 500개
  } else {
    return 700; // 큰 데스크톱: 700개
  }
};

/**
 * StarBackground 컴포넌트
 *
 * @description
 * 3D 별 배경을 렌더링하는 컴포넌트
 *
 * @performance
 * - 기기별 파티클 수 최적화
 * - frustumCulled로 화면 밖 렌더링 방지
 * - depthWrite 비활성화로 렌더링 최적화
 */
const StarBackground = (props: ThreeElements['group']) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const particleCount = getOptimalParticleCount();
    const arr = new Float32Array(particleCount * 3);
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
          color="#f1f1f1"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

/**
 * StarsCanvas 컴포넌트
 *
 * @description
 * Three.js Canvas를 렌더링하는 컴포넌트
 *
 * @performance
 * - antialias: false로 렌더링 최적화
 * - dpr: [1, 1.5]로 픽셀 밀도 제한 (레티나 디스플레이에서 과도한 렌더링 방지)
 * - powerPreference: "low-power"로 저전력 모드 사용
 * - frameloop: "demand"로 필요시에만 렌더링 (회전 애니메이션 때문에 "always"로 유지)
 */
const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 h-auto w-full -z-10 pointer-events-none">
      <Canvas
        gl={{
          antialias: false,
          powerPreference: 'low-power', // 저전력 모드
        }}
        dpr={[1, 1.5]} // 픽셀 밀도 제한 (최대 1.5배)
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
