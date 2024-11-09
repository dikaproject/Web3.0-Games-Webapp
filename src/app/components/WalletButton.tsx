"use client";
import { useState } from "react";
import web3 from "../lib/web3";

const WalletButton = () => {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      // Fallback to Infura
      try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          alert("No accounts found. Please install MetaMask!");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to connect to Infura. Please install MetaMask!");
      }
    }
  };

  return (
    <div>
      {account ? (
        <p>Connected Account: {account}</p>
      ) : (
        <button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={connectWallet}
        >
          <img src="/metamask-logo.png" alt="MetaMask" width="24" className="mr-2" />
          Connect MetaMask
        </button>
      )}
    </div>
  );
};

export default WalletButton;
