import { create } from 'zustand';
import type { AvatarConfig } from '../types';

interface AvatarState {
  config: AvatarConfig;
  isProcessing: boolean;
  setConfig: (config: Partial<AvatarConfig>) => void;
  setProcessing: (processing: boolean) => void;
}

export const useAvatarStore = create<AvatarState>((set) => ({
  config: {
    model: 'default',
    expression: 'neutral',
    voice: 'en-US-1',
    personality: 'professional'
  },
  isProcessing: false,
  setConfig: (config) => 
    set((state) => ({ config: { ...state.config, ...config } })),
  setProcessing: (processing) => set({ isProcessing: processing })
}));