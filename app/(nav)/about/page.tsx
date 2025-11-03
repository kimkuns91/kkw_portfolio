import AboutPage from '@/components/About/AboutPage';
import { aboutMetadata } from './metadata';

export const metadata = aboutMetadata;

/**
 * About 페이지
 *
 * @description
 * 개발자 소개, 기술 스택, 타임라인을 보여주는 페이지
 *
 * @sections
 * - Introduction: 개발자 소개 및 프로필 이미지
 * - Skills: 기술 스택 (홈과 동일)
 * - Timeline: 경력 및 학습 이력
 */
export default function AboutPageRoute() {
  return <AboutPage />;
}
