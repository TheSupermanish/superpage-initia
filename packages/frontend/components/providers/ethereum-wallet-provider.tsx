"use client";

import { ReactNode, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import {
  initiaPrivyWalletConnector,
  injectStyles,
  InterwovenKitProvider,
  TESTNET,
} from "@initia/interwovenkit-react";
import InterwovenKitStyles from "@initia/interwovenkit-react/styles.js";

const queryClient = new QueryClient();

// Wagmi config with Initia's Privy connector
const config = createConfig({
  connectors: [initiaPrivyWalletConnector],
  chains: [mainnet],
  transports: { [mainnet.id]: http() },
});

// InitPage rollup chain definition for InterwovenKit
const initpageChain = {
  chainId: "initpage",
  chainName: "InitPage",
  restUrl: process.env.NEXT_PUBLIC_INITIA_REST_URL || "http://localhost:1317",
  rpcUrl: process.env.NEXT_PUBLIC_INITIA_RPC_URL || "http://localhost:26657",
  jsonRpcUrl: process.env.NEXT_PUBLIC_INITIA_JSONRPC_URL || "http://localhost:8545",
  gasPrice: {
    denom: "GAS",
    low: "0",
    average: "0",
    high: "0",
  },
  evm: {
    chainId: 2314866461475837,
    jsonRpcUrl: process.env.NEXT_PUBLIC_INITIA_JSONRPC_URL || "http://localhost:8545",
  },
};

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
          defaultChainId="initpage"
          customChain={initpageChain as any}
          theme="dark"
          enableAutoSign={{
            "initpage": ["/minievm.evm.v1.MsgCall"],
          }}
        >
          {mounted ? children : null}
        </InterwovenKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}
