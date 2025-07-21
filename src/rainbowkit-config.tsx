"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync } from "@wagmi/core/chains";

export default getDefaultConfig({
  appName: "TSender",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [anvil, zksync],
  ssr: true,
});
