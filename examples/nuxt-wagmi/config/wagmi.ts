import { WagmiAdapter } from '@cotofe/appkit-adapter-wagmi'
import { base, mainnet, polygon } from '@cotofe/appkit/networks'

export const networks = [mainnet, polygon, base]

export const projectId = 'b56e18d47c72ab683b10814fe9495694'

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId
})
