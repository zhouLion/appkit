import type { AppKitOptions, ChainAdapter } from '@cotofe/appkit'
import { mainnet, solana } from '@cotofe/appkit/networks'

export const mockMainnetChainImage =
  'https://assets.coingecko.com/coins/images/279/large/ethereum.png'

export const mockOptions: AppKitOptions = {
  projectId: 'test-project-id',
  adapters: [{ chainNamespace: 'eip155' } as unknown as ChainAdapter],
  networks: [mainnet, solana],
  chainImages: {
    [mainnet.id]: mockMainnetChainImage
  },
  metadata: {
    name: 'Test App',
    description: 'Test App Description',
    url: 'https://test-app.com',
    icons: ['https://test-app.com/icon.png']
  }
} as unknown as AppKitOptions
