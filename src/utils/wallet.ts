// src/utils/wallet.ts

import WalletConnectProvider from '@walletconnect/web3-provider';

// Verifica si MetaMask está instalada y obtiene las cuentas
export const connectWallet = async (): Promise<string[]> => {
  if (typeof window !== 'undefined' && (window as any).ethereum) {
    const provider = (window as any).ethereum;
    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      return accounts as string[];
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      return [];
    }
  } else {
    console.error('Ethereum provider is not available');
    return [];
  }
};

// Cambia a la red BASE
export const switchToBaseNetwork = async () => {
  if (typeof window !== 'undefined' && (window as any).ethereum) {
    const provider = (window as any).ethereum;
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x20f6', // Asegúrate de usar el ID correcto en hexadecimal (8453 en decimal)
          chainName: 'BASE',
          rpcUrls: ['https://rpc.base.org'],
          nativeCurrency: {
            name: 'BASE',
            symbol: 'ETH',
            decimals: 18
          },
          blockExplorerUrls: ['https://explorer.base.org']
        }],
      });
    } catch (error) {
      console.error('Failed to switch network:', error);
    }
  } else {
    console.error('Ethereum provider is not available');
  }
};

// Conexión con WalletConnect
export const connectWithWalletConnect = async (): Promise<string[]> => {
  const provider = new WalletConnectProvider({
    infuraId: '1c6ee68a9dc645a796d66b290874adda' // Reemplaza con tu propio Infura ID si es necesario
  });

  try {
    await provider.enable();
    const accounts = await provider.request({ method: 'eth_accounts' });
    return accounts as string[];
  } catch (error) {
    console.error('Failed to connect with WalletConnect:', error);
    return [];
  }
};

// Verifica si MetaMask está instalada y muestra un mensaje
export const checkMetaMaskInstalled = () => {
  if (typeof window !== 'undefined' && (window as any).ethereum) {
    const provider = (window as any).ethereum;
    if (provider.isMetaMask) {
      console.log('MetaMask está instalada!');
    } else {
      console.log('MetaMask no está instalada');
    }
  } else {
    console.log('MetaMask no está instalada');
  }
};
