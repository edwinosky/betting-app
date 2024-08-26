import React from 'react';
import { placeBet } from '../utils/contract';

const BetButtons: React.FC<{ signer: any }> = ({ signer }) => {
    const handleBet = async (isUp: boolean) => {
        if (signer) {
            await placeBet(signer, isUp);
        }
    };

    return (
        <div>
            <button onClick={() => handleBet(true)}>Bet UP</button>
            <button onClick={() => handleBet(false)}>Bet DOWN</button>
        </div>
    );
};

export default BetButtons;
