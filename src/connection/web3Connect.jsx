import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  useAddress,
} from "@thirdweb-dev/react";


export default function Web3Connect() {

  const clientId = "606007e331d081be0bd9aa0cc76ebecd";

  return (
    <ThirdwebProvider
      clientId={clientId}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        trustWallet(),
      ]}
    >
      <ConnectWallet theme={"dark"} />
    </ThirdwebProvider>
  );
}

function Address() {
  const address = useAddress();
  return address;
}

export { Web3Connect, Address };