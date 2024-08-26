import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import BetButtons from './components/BetButtons';
import BtcPriceDisplay from './components/BtcPriceDisplay';

const App: React.FC = () => {
    const [signer, setSigner] = useState<any>(null);

    return (
        <div>
            <ConnectWallet onConnect={setSigner} />
            <BtcPriceDisplay />
            {signer && <BetButtons signer={signer} />}
        </div>
    );
};

export default App;
