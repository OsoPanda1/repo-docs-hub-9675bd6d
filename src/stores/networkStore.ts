import { create } from "zustand";

type NetworkStatus = "online" | "offline" | "syncing" | "maintenance";

interface NetworkNode {
  id: string;
  name: string;
  status: "active" | "idle" | "error";
  latency: number;
  region: string;
}

interface NetworkState {
  status: NetworkStatus;
  nodes: NetworkNode[];
  quantumEncryptionActive: boolean;
  msrBridgeConnected: boolean;
  lastSync: Date | null;
  
  // Actions
  setStatus: (status: NetworkStatus) => void;
  addNode: (node: NetworkNode) => void;
  removeNode: (id: string) => void;
  updateNodeStatus: (id: string, status: NetworkNode["status"]) => void;
  toggleQuantumEncryption: () => void;
  setMsrBridgeStatus: (connected: boolean) => void;
  recordSync: () => void;
}

export const useNetworkStore = create<NetworkState>((set) => ({
  status: "online",
  nodes: [
    { id: "1", name: "Nexus-Alpha", status: "active", latency: 12, region: "LATAM" },
    { id: "2", name: "Nexus-Beta", status: "active", latency: 8, region: "NA" },
    { id: "3", name: "Nexus-Gamma", status: "idle", latency: 23, region: "EU" },
  ],
  quantumEncryptionActive: true,
  msrBridgeConnected: true,
  lastSync: new Date(),

  setStatus: (status) => set({ status }),
  addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
  removeNode: (id) => set((state) => ({ nodes: state.nodes.filter(n => n.id !== id) })),
  updateNodeStatus: (id, status) => set((state) => ({
    nodes: state.nodes.map(n => n.id === id ? { ...n, status } : n)
  })),
  toggleQuantumEncryption: () => set((state) => ({ quantumEncryptionActive: !state.quantumEncryptionActive })),
  setMsrBridgeStatus: (msrBridgeConnected) => set({ msrBridgeConnected }),
  recordSync: () => set({ lastSync: new Date() }),
}));
