import React from 'react';
import { connectWallet } from '../utils/wallet';

const ConnectWallet: React.FC<{ onConnect: (signer: any) => void }> = ({ onConnect }) => {
    const handleConnect = async () => {
        const signer = await connectWallet();
        if (signer) {
            onConnect(signer);
        }
    };

    return <button onClick={handleConnect}>Connect Wallet</button>;
};

export default ConnectWallet;
