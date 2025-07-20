import type { CaipNetwork } from '@cotofe/appkit-common'
import type { Connector } from '@cotofe/appkit-controllers'

export interface ChainAdapterConnector extends Connector {
  chains: CaipNetwork[]
}
