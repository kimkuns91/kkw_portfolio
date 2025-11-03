import { IProject } from '@/interface';
import { create } from 'zustand';

/**
 * Zustand 스토어 인터페이스
 *
 * @interface IStore
 *
 * @property isModalOpen - 프로젝트 모달 열림 상태
 * @property setModalOpen - 모달 열림 상태 설정 함수
 * @property project - 현재 선택된 프로젝트
 * @property setProject - 프로젝트 설정 함수
 */
interface IStore {
  // 모달 상태
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;

  // 컨텐츠 상태
  project: IProject | null;
  setProject: (project: IProject | null) => void;
}

/**
 * 전역 상태 관리 스토어
 *
 * @description
 * Zustand를 사용한 전역 상태 관리
 *
 * @features
 * - 프로젝트 모달 상태 관리
 * - 선택된 프로젝트 데이터 관리
 *
 * @example
 * ```tsx
 * import { useStore } from '@/store';
 *
 * const { isModalOpen, setModalOpen, project, setProject } = useStore();
 *
 * // 모달 열기
 * setModalOpen(true);
 * setProject(selectedProject);
 * ```
 */
export const useStore = create<IStore>((set) => ({
  // 모달 관련
  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),

  // 컨텐츠 관련
  project: null,
  setProject: (project) => set({ project: project }),
}));
