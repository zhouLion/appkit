'use client'

import { BitcoinAdapter } from '@cotofe/appkit-adapter-bitcoin'
import { EthersAdapter } from '@cotofe/appkit-adapter-ethers'
import { SolanaAdapter } from '@cotofe/appkit-adapter-solana'
import { DefaultSIWX } from '@cotofe/appkit-siwx'
import { mainnet } from '@cotofe/appkit/networks'
import { useAppKitNetwork } from '@cotofe/appkit/react'

import { AppKitButtons } from '@/src/components/AppKitButtons'
import { AppKitInfo } from '@/src/components/AppKitInfo'
import { BitcoinTests } from '@/src/components/Bitcoin/BitcoinTests'
import { DefaultSIWXStatus } from '@/src/components/DefaultSIWXStatus'
import { EthersTests } from '@/src/components/Ethers/EthersTests'
import { SolanaTests } from '@/src/components/Solana/SolanaTests'
import { AppKitProvider } from '@/src/context/AppKitContext'
import { ConstantsUtil } from '@/src/utils/ConstantsUtil'

const networks = ConstantsUtil.AllNetworks

const etherAdapter = new EthersAdapter()

const solanaWeb3JsAdapter = new SolanaAdapter()

const bitcoinAdapter = new BitcoinAdapter({})

const config = {
  adapters: [solanaWeb3JsAdapter, bitcoinAdapter, etherAdapter],
  networks,
  defaultNetwork: mainnet,

  termsConditionsUrl: 'https://reown.com/terms-of-service',
  privacyPolicyUrl: 'https://reown.com/privacy-policy',
  siwx: new DefaultSIWX()
}

export default function SIWXDefault() {
  const { caipNetwork } = useAppKitNetwork()

  return (
    <AppKitProvider config={config}>
      <AppKitButtons />
      <AppKitInfo />
      <DefaultSIWXStatus />

      {caipNetwork?.chainNamespace === 'eip155' && <EthersTests />}
      {caipNetwork?.chainNamespace === 'solana' && <SolanaTests />}
      {caipNetwork?.chainNamespace === 'bip122' && <BitcoinTests />}
    </AppKitProvider>
  )
}
