import type { Meta } from '@storybook/web-components'

import { html } from 'lit'

import '@cotofe/appkit-ui/wui-promo'
import type { WuiPromo } from '@cotofe/appkit-ui/wui-promo'

type Component = Meta<WuiPromo>

export default {
  title: 'Composites/wui-promo',
  args: {
    text: 'Activate your account'
  }
} as Component

export const Default: Component = {
  render: args => html`<wui-promo text=${args.text}></wui-promo>`
}
