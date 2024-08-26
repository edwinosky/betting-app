import { ethers } from "ethers";
import BettingContract from '../contracts/BettingContract.json';

const contractAddress = "0x2C31c66062Af0858165934c5EE95AE15b76B35EF";

export async function placeBet(signer: ethers.Signer, isUp: boolean) {
    const contract = new ethers.Contract(contractAddress, BettingContract.abi, signer);
    try {
        const tx = await contract.placeBet(isUp, { value: ethers.utils.parseEther("0.0001") });
        await tx.wait();
        console.log("Bet placed!");
    } catch (error) {
        console.error("Error placing bet:", error);
    }
}
