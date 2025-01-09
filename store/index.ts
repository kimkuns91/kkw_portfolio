import { IProject } from '@/types';
import { create } from 'zustand';

interface IStore {
  // 모달 상태
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;

  // 컨텐츠 상태
  project: IProject | null;
  setProject: (project: IProject | null) => void;
}

export const useStore = create<IStore>((set) => ({
  // 모달 관련
  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),

  // 컨텐츠 관련
  project: null,
  setProject: (project) => set({ project: project }),
}));
