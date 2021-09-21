import { html, css, LitElement } from 'lit';

export class PenguinStateButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--penguin-state-button-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      imgSrc: { type: String, reflect: true },
      imgSrc2: { type: String, reflect: true },
      target: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.imgSrc = '../images/new.png';
    this.imgSrc2 = '../images/hi.png';
    this.target = '/';
  }

  render() {
    return html`
      <div class="button-container">
        <button>
          <a href="${this.target}"
            ><img src="${this.imgSrc}" alt="a penguin"
          /></a>
        </button>
      </div>
      <style>
        img:hover {
          content: url(${this.imgSrc2});
        }
      </style>
    `;
  }
}
