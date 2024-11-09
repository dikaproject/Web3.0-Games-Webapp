import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Kita berada di browser dan metamask sedang berjalan.
  web3 = new Web3(window.ethereum.currentProvider);
} else {
  // Kita berada di server *ATAU* pengguna tidak menjalankan metamask
  const provider = new Web3.providers.HttpProvider(
    "https://mainnet.infura.io/v3/3215d03bb56d49609f7c6acfd7bece8f"
  );
  web3 = new Web3(provider);
}

export default web3;