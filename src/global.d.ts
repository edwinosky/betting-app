// src/global.d.ts
interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request?: (...args: any[]) => Promise<void>;
      on?: (eventName: string, callback: (...args: any[]) => void) => void;
      // Agrega otras propiedades y métodos que necesites del objeto ethereum
    };
  }
  