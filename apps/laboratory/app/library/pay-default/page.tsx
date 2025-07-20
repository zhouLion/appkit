'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import { BitcoinAdapter } from '@cotofe/appkit-adapter-bitcoin'
import { SolanaAdapter } from '@cotofe/appkit-adapter-solana/react'
import { WagmiAdapter } from '@cotofe/appkit-adapter-wagmi'
import { mainnet } from '@cotofe/appkit/networks'
import { createAppKit } from '@cotofe/appkit/react'

import { AppKitButtonsMultiChain } from '@/src/components/AppKitButtonsMultiChain'
import { AppKitInfo } from '@/src/components/AppKitInfo'
import { AppKitInfoMultiChain } from '@/src/components/AppKitInfoMultiChain'
import { AppKitPay } from '@/src/components/AppKitPay'
import { ConstantsUtil } from '@/src/utils/ConstantsUtil'

const queryClient = new QueryClient()

const networks = ConstantsUtil.AllNetworks

const wagmiAdapter = new WagmiAdapter({
  ssr: false,
  networks,
  projectId: ConstantsUtil.ProjectId
})
const solanaWeb3JsAdapter = new SolanaAdapter()

const bitcoinAdapter = new BitcoinAdapter()

createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter, bitcoinAdapter],
  networks,
  defaultNetwork: mainnet,
  projectId: ConstantsUtil.ProjectId,
  features: {
    analytics: true,
    pay: true
  },
  metadata: ConstantsUtil.Metadata
})

export default function Page() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppKitButtonsMultiChain />
        <AppKitInfoMultiChain />
        <AppKitInfo />
        <AppKitPay />
      </QueryClientProvider>
    </WagmiProvider>
  )
}
