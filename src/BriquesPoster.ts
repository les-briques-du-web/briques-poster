import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("briques-poster")
export class BriquesPoster extends LitElement {

  @property() title = 'My app';

  static styles = css`
    :host {
      width: 2400px;
      height: 1260px;
    }

    main {
      flex-grow: 1;
    }


    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }
  `;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <p>Edit <code>src/BriquesPosters.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
