import { ethers } from 'ethers';

// Conexión con MetaMask y obtención del Signer
export const connectWallet = async (): Promise<ethers.Signer | null> => {
  if (typeof window !== 'undefined' && (window as any).ethereum) {
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    try {
      // Solicitar cuentas
      await provider.send('eth_requestAccounts', []);
      // Obtener el signer
      const signer = provider.getSigner();
      return signer;
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      return null;
    }
  } else {
    console.error('Ethereum provider is not available');
    return null;
  }
};
