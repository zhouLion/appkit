'use client'

import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
import { type CaipNetwork, type SocialProvider } from '@reown/appkit/react'

import { AppKitButtons } from '@/src/components/AppKitButtons'
import { AppKitConnections } from '@/src/components/AppKitConnections'
import { AppKitInfo } from '@/src/components/AppKitInfo'
import { BitcoinTests } from '@/src/components/Bitcoin/BitcoinTests'
import { AppKitProvider } from '@/src/context/AppKitContext'
import { ConstantsUtil } from '@/src/utils/ConstantsUtil'

const networks = ConstantsUtil.BitcoinNetworks

const bitcoinAdapter = new BitcoinAdapter({
  networks: networks as CaipNetwork[],
  projectId: ConstantsUtil.ProjectId
})

const config = {
  adapters: [bitcoinAdapter],
  networks,
  projectId: ConstantsUtil.ProjectId,
  features: {
    analytics: true,
    socials: [
      'google',
      'x',
      'discord',
      'farcaster',
      'github',
      'apple',
      'facebook'
    ] as SocialProvider[]
  },
  metadata: ConstantsUtil.Metadata,
  debug: true
}

export default function BitcoinPage() {
  return (
    <AppKitProvider config={config}>
      <AppKitButtons />
      <AppKitConnections namespace="bip122" />
      <AppKitInfo />
      <BitcoinTests />
    </AppKitProvider>
  )
}
