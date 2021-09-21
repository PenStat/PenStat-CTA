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
    this.baseImgSrc = '../images/new.png';
    this.imgSrc = '../images/new.png';
    this.imgSrc2 = '../images/hi.png';
    this.target = '/';
    this.addEventListener('pointerenter', this.enter.bind(this));
    this.addEventListener('pointerout', this.exit.bind(this));
    console.log(new URL(import.meta.url));
  }

  enter() {
    this.imgSrc = this.imgSrc2;
  }

  exit() {
    this.imgSrc = this.baseImgSrc;
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
    `;
  }
}
