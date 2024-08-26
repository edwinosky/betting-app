import React from 'react';
import { connectWallet } from '../utils/wallet';
import { ethers } from 'ethers';

const ConnectWallet: React.FC<{ onConnect: (signer: ethers.Signer | null) => void }> = ({ onConnect }) => {
  const handleConnect = async () => {
    const signer = await connectWallet();
    onConnect(signer);
  };

  return <button onClick={handleConnect}>Connect Wallet</button>;
};

export default ConnectWallet;
