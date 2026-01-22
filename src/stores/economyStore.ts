import { create } from "zustand";

interface Transaction {
  id: string;
  type: "credit" | "debit" | "stake" | "reward";
  amount: number;
  description: string;
  timestamp: Date;
  msrHash?: string;
}

interface EconomyState {
  tcBalance: number;
  msrBalance: number;
  tamvBalance: number;
  stakedAmount: number;
  recentTransactions: Transaction[];
  phoenixFund: number;
  infraFund: number;
  reserveFund: number;
  
  // Actions
  addTransaction: (tx: Omit<Transaction, "id" | "timestamp">) => void;
  updateBalances: (tc: number, msr: number, tamv: number) => void;
  setStakedAmount: (amount: number) => void;
  distributeFunds: (profit: number) => void;
}

export const useEconomyStore = create<EconomyState>((set) => ({
  tcBalance: 100,
  msrBalance: 0,
  tamvBalance: 0,
  stakedAmount: 0,
  recentTransactions: [],
  phoenixFund: 0,
  infraFund: 0,
  reserveFund: 0,

  addTransaction: (tx) => set((state) => ({
    recentTransactions: [
      { ...tx, id: crypto.randomUUID(), timestamp: new Date() },
      ...state.recentTransactions.slice(0, 49)
    ]
  })),
  
  updateBalances: (tcBalance, msrBalance, tamvBalance) => set({ tcBalance, msrBalance, tamvBalance }),
  
  setStakedAmount: (stakedAmount) => set({ stakedAmount }),
  
  // 20/30/50 distribution rule
  distributeFunds: (profit) => set((state) => ({
    phoenixFund: state.phoenixFund + profit * 0.20,
    infraFund: state.infraFund + profit * 0.30,
    reserveFund: state.reserveFund + profit * 0.50,
  })),
}));
