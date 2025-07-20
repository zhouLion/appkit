import { WalletValidator } from '@cotofe/appkit-testing'

import type { ModalValidator } from '../validators/ModalValidator'

export async function expectConnection(
  modalValidator: ModalValidator,
  walletValidator: WalletValidator
) {
  await modalValidator.expectConnected()
  await walletValidator.expectConnected()
  await modalValidator.page.evaluate(
    `window.localStorage.setItem('@appkit/deeplink_choice', JSON.stringify({ href: '', name: '' }))`
  )
}
