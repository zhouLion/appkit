'use client'

import { EthersAdapter } from '@cotofe/appkit-adapter-ethers'
import { SolanaAdapter } from '@cotofe/appkit-adapter-solana'
import { type AppKitNetwork, mainnet } from '@cotofe/appkit/networks'

import { AppKitButtons } from '@/src/components/AppKitButtons'
import { AppKitConnections } from '@/src/components/AppKitConnections'
import { AppKitInfo } from '@/src/components/AppKitInfo'
import { EthersTests } from '@/src/components/Ethers/EthersTests'
import { SolanaTests } from '@/src/components/Solana/SolanaTests'
import { AppKitProvider } from '@/src/context/AppKitContext'
import { ConstantsUtil } from '@/src/utils/ConstantsUtil'

const networks = [...ConstantsUtil.EvmNetworks, ...ConstantsUtil.SolanaNetworks] as [
  AppKitNetwork,
  ...AppKitNetwork[]
]

const etherAdapter = new EthersAdapter()

const solanaWeb3JsAdapter = new SolanaAdapter()

const config = {
  adapters: [etherAdapter, solanaWeb3JsAdapter],
  networks,
  defaultNetwork: mainnet,
  customWallets: ConstantsUtil.CustomWallets,
  termsConditionsUrl: 'https://reown.com/terms-of-service',
  privacyPolicyUrl: 'https://reown.com/privacy-policy'
}

export default function MultiChainEthersSolana() {
  return (
    <AppKitProvider config={config}>
      <AppKitButtons />
      <AppKitConnections namespace="eip155" title="EVM Connections" />
      <AppKitConnections namespace="solana" title="Solana Connections" />
      <AppKitInfo />
      <EthersTests />
      <SolanaTests />
    </AppKitProvider>
  )
}
