import type { Meta } from '@storybook/web-components'

import { html } from 'lit'

import '@reown/appkit-ui/wui-tag'
import type { WuiTag } from '@reown/appkit-ui/wui-tag'

import { tagOptions } from '../../utils/PresetUtils'

type Component = Meta<WuiTag>

export default {
  title: 'Composites/wui-tag',
  args: {
    variant: 'main',
    size: 'lg'
  },
  argTypes: {
    variant: {
      options: tagOptions,
      control: { type: 'select' }
    },
    size: {
      options: ['lg', 'md'],
      control: { type: 'select' }
    }
  }
} as Component

export const Default: Component = {
  render: args => html`<wui-tag size=${args.size} variant=${args.variant}>Recent</wui-tag>`
}
