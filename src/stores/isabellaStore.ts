import { create } from "zustand";

type IsabellaStatus = "idle" | "thinking" | "guarding" | "creating" | "healing";
type SecurityProtocol = "NONE" | "TIME_UP" | "IA_DIGNITY_ATTACK" | "QUANTUM_BREACH" | "MSR_ALERT";

interface IsabellaState {
  status: IsabellaStatus;
  lastProtocol: SecurityProtocol;
  emotionalLevel: number;
  creativityIndex: number;
  guardianMode: boolean;
  lastInteraction: Date | null;
  
  // Actions
  setStatus: (status: IsabellaStatus) => void;
  setProtocol: (protocol: SecurityProtocol) => void;
  setEmotionalLevel: (level: number) => void;
  setCreativityIndex: (index: number) => void;
  toggleGuardianMode: () => void;
  recordInteraction: () => void;
}

export const useIsabellaStore = create<IsabellaState>((set) => ({
  status: "idle",
  lastProtocol: "NONE",
  emotionalLevel: 75,
  creativityIndex: 85,
  guardianMode: false,
  lastInteraction: null,

  setStatus: (status) => set({ status }),
  setProtocol: (lastProtocol) => set({ lastProtocol }),
  setEmotionalLevel: (emotionalLevel) => set({ emotionalLevel }),
  setCreativityIndex: (creativityIndex) => set({ creativityIndex }),
  toggleGuardianMode: () => set((state) => ({ guardianMode: !state.guardianMode })),
  recordInteraction: () => set({ lastInteraction: new Date() }),
}));
