import { create } from 'zustand';

export type OtherState = {
  editorHeight: string;
  templateRerender: boolean;
}

export const otherState = create<OtherState>(() => ({
  editorHeight: 'calc(100% - 161px)',
  templateRerender: false,
}));

export const useOtherState = otherState;
