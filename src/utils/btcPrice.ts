import axios from "axios";

export async function fetchBTCPrice() {
    try {
        const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
        const price = response.data.bpi.USD.rate_float;
        console.log("Current BTC price:", price);
        return price;
    } catch (error) {
        console.error("Error fetching BTC price:", error);
    }
}
