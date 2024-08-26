import React, { useEffect, useState } from 'react';
import { fetchBTCPrice } from '../utils/btcPrice';

const BtcPriceDisplay: React.FC = () => {
    const [btcPrice, setBtcPrice] = useState<number | null>(null);

    useEffect(() => {
        const loadPrice = async () => {
            const price = await fetchBTCPrice();
            setBtcPrice(price);
        };
        loadPrice();
    }, []);

    return <div>BTC Price: {btcPrice}</div>;
};

export default BtcPriceDisplay;
