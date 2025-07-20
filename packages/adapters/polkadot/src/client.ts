import type {
  AppKitOptions,
  ConnectionControllerClient,
  NetworkControllerClient
} from '@cotofe/appkit'
import type { AdapterType, CaipNetwork, ChainNamespace } from '@cotofe/appkit-common'
import { ConstantsUtil as CommonConstantsUtil } from '@cotofe/appkit-common'

export class PolkadotClient {
  // Metadata
  public adapterType: AdapterType = 'polkadot'
  public chainNamespace: ChainNamespace = CommonConstantsUtil.CHAIN.POLKADOT

  // Adapter
  public options: AppKitOptions | undefined = undefined
  public networkControllerClient: NetworkControllerClient | undefined = undefined
  public connectionControllerClient: ConnectionControllerClient | undefined = undefined
  public defaultCaipNetwork: CaipNetwork | undefined = undefined
}
