import { LitElement, html } from 'lit'

import { customElement } from '@cotofe/appkit-ui'
import '@cotofe/appkit-ui/wui-flex'

import '../../partials/w3m-activity-list/index.js'
import styles from './styles.js'

@customElement('w3m-transactions-view')
export class W3mTransactionsView extends LitElement {
  public static override styles = styles

  // -- Render -------------------------------------------- //
  public override render() {
    return html`
      <wui-flex flexDirection="column" .padding=${['0', 'm', 'm', 'm']} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-transactions-view': W3mTransactionsView
  }
}
