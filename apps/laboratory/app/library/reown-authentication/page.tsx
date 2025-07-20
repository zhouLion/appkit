'use client'

import { BitcoinAdapter } from '@cotofe/appkit-adapter-bitcoin'
import { EthersAdapter } from '@cotofe/appkit-adapter-ethers'
import { SolanaAdapter } from '@cotofe/appkit-adapter-solana'
import { ReownAuthentication } from '@cotofe/appkit-siwx'
import { mainnet } from '@cotofe/appkit/networks'

import { AppKitButtons } from '@/src/components/AppKitButtons'
import { AppKitInfo } from '@/src/components/AppKitInfo'
import { EthersTests } from '@/src/components/Ethers/EthersTests'
import { ReownAuthenticationTests } from '@/src/components/ReownAuthentication'
import { SolanaTests } from '@/src/components/Solana/SolanaTests'
import { AppKitProvider } from '@/src/context/AppKitContext'
import { ConstantsUtil } from '@/src/utils/ConstantsUtil'

const etherAdapter = new EthersAdapter()
const solanaAdapter = new SolanaAdapter()
const bitcoinAdapter = new BitcoinAdapter()

const config = {
  adapters: [etherAdapter, solanaAdapter, bitcoinAdapter],
  networks: ConstantsUtil.AllNetworks,
  defaultNetwork: mainnet,

  termsConditionsUrl: 'https://reown.com/terms-of-service',
  privacyPolicyUrl: 'https://reown.com/privacy-policy',
  siwx: new ReownAuthentication()
}

export default function ReownAuthenticationPage() {
  return (
    <AppKitProvider config={config}>
      <AppKitButtons />
      <AppKitInfo />
      <ReownAuthenticationTests />
      <EthersTests />
      <SolanaTests />
    </AppKitProvider>
  )
}
