import { proxy, ref } from 'valtio/vanilla'

import type { AppKit } from '@cotofe/appkit'

export const AppKitStore = proxy<{
  appKit: AppKit | undefined
}>({
  appKit: undefined
})

export function setAppKit(appKit: AppKit) {
  AppKitStore.appKit = ref(appKit)
}
