import { Link } from "react-router-dom";
import { useState } from "react";
import { connectWallet } from "../connection/alchemyConnect";

export default function Navbar() {

  const [address, setAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectWallet = async () => {

    if (isConnected) {
      console.log("Disconnecting...");
      setAddress("");
      setIsConnected(false);
    } else {
      console.log("Connecting...");
      const temp = await connectWallet();
      setAddress(temp);
      setIsConnected(true);
    };
  }

  return (
    <div className="flex justify-between p-4 bg-slate-800 text-slate-300 align-middle border-b border-slate-800 h-[11vh]">
      <div className="my-auto">
        <Link className="font-bold text-[40px] my-auto pl-10" to={"/"}>
          Rubiks
        </Link>
      </div>
      <div className="flex my-auto gap-2">
        <Link
          className="border border-slate-800 hover:border-slate-700 hover:bg-slate-700 rounded-md py-2 px-6 my-auto"
          to={"/profile"}
        >
          Profile
        </Link>
        <button
          className="border bg-white border-white hover:border-slate-700 hover:bg-slate-400 text-slate-900 font-semibold rounded-md py-2 px-6 my-auto"
          onClick={handleConnectWallet}
        >
          {!isConnected
            ? "Connect Wallet"
            : `${address.substring(0, 4) +
            "..." +
            address.substr(address.length - 4, address.length)
            }`}
        </button>
      </div>
    </div>
  )
}