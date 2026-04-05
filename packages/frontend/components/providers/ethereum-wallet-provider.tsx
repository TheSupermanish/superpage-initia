"use client";

import { ReactNode, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { defineChain } from "viem";
import {
  initiaPrivyWalletConnector,
  injectStyles,
  InterwovenKitProvider,
  TESTNET,
} from "@initia/interwovenkit-react";
import InterwovenKitStyles from "@initia/interwovenkit-react/styles.js";

const queryClient = new QueryClient();

// InitPage rollup chain for wagmi (so MetaMask can switch to it)
const initpageChain = defineChain({
  id: 2314866461475837,
  name: "InitPage Rollup",
  nativeCurrency: { decimals: 18, name: "GAS", symbol: "GAS" },
  rpcUrls: {
    default: { http: [process.env.NEXT_PUBLIC_INITIA_JSONRPC_URL || "http://localhost:8545"] },
  },
  testnet: true,
});

// Wagmi config with both mainnet (for InterwovenKit) and our rollup
const config = createConfig({
  connectors: [initiaPrivyWalletConnector],
  chains: [initpageChain, mainnet],
  transports: {
    [initpageChain.id]: http(),
    [mainnet.id]: http(),
  },
});

interface EthereumWalletProviderProps {
  children: ReactNode;
}

export function EthereumWalletProvider({ children }: EthereumWalletProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    injectStyles(InterwovenKitStyles);
    setMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <InterwovenKitProvider
          {...TESTNET}
          theme="dark"
          enableAutoSign
        >
          {mounted ? children : null}
        </InterwovenKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
