import Hero from '@/components/Home/Hero';
import MotionScrollSection from '@/components/MotionSection';
import ProjectList from '@/components/ProjectList';
import Skills from '@/components/Home/Skills';
import Stats from '@/components/Home/Stats';
import { homeMetadata } from './metadata';

export const metadata = homeMetadata;

/**
 * 메인 홈 페이지 컴포넌트
 * 
 * @description
 * - Hero: 메인 소개 섹션 (프로필 이미지 포함)
 * - Stats: 프로젝트 통계 카운터
 * - Skills: 기술 스택 목록
 * - ProjectList: 프로젝트 목록
 * 
 * @performance
 * - 클라이언트 컴포넌트들은 Suspense 없이 직접 렌더링
 * - MotionScrollSection으로 페이지 전체 fade-in 애니메이션 적용
 * - 이미지 최적화를 위해 각 컴포넌트에서 priority/loading 속성 설정
 */
export default function Home() {
  return (
    <MotionScrollSection>
      <Hero />
      <Stats />
      <Skills />
      <ProjectList />
    </MotionScrollSection>
  );
}
