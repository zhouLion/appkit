import { ConstantsUtil as CommonConstantsUtil } from '@cotofe/appkit-common'
import type { Connection } from '@cotofe/appkit-common'
import type { SocialProvider } from '@cotofe/appkit-controllers'
import { ConnectorController, StorageUtil } from '@cotofe/appkit-controllers'

import { ConnectorUtil } from './ConnectorUtil.js'

export const ConnectionUtil = {
  getAuthData(connection: Connection) {
    const isAuth = connection.connectorId === CommonConstantsUtil.CONNECTOR_ID.AUTH

    if (!isAuth) {
      return { isAuth: false, icon: undefined, iconSize: undefined, name: undefined }
    }

    const socialProvider = (connection?.auth?.name ??
      StorageUtil.getConnectedSocialProvider()) as SocialProvider | null
    const socialUsername = (connection?.auth?.username ??
      StorageUtil.getConnectedSocialUsername()) as string | null

    const authConnector = ConnectorController.getAuthConnector()
    const email = authConnector?.provider.getEmail() ?? ''

    return {
      isAuth: true,
      icon: socialProvider ?? 'mail',
      iconSize: socialProvider ? 'xl' : 'md',
      name: isAuth
        ? ConnectorUtil.getAuthName({ email, socialUsername, socialProvider })
        : undefined
    }
  }
}
