import "../styles/globals.css";
import { TiktokProvider } from "../context/context";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import { infuraProvider } from "wagmi/providers/infura";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, provider } = configureChains(
  [chain.goerli, chain.localhost],
  [
    infuraProvider({ apiKey: process.env.INFURA_API_KEY, priority: 1 }),
    jsonRpcProvider({
      priority: 2,
      rpc: (chain) => ({
        http: `HTTP://127.0.0.1:8545`,
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "TikTok",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
        <TiktokProvider>
          <Component {...pageProps} />
        </TiktokProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
