import { css, html, LitElement } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';

export class PenguinStateButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 100px;
        height: 100px;
      }
      button {
        height: var{--penguin-state-button-height};
        width: var{--penguin-state-button-width};
        background-color: var(--penguin-state-button-background-color);
        border-radius: 10px;
      }
      img {
        max-width: 100%;
        max-height: auto;
      }
      button:hover {
        background-color: #ffffff;
      }

      meme-maker{
        --meme-maker-font-size: 12px;
      }
    `;
  }

  static get properties() {
    return {
      imgSrc: { type: String, reflect: true },
      imgSrc2: { type: String, reflect: true },
      linkTarget: { type: String, reflect: true },
      backgroundColor: { type: String, reflect: true },
      textColor: { type: String, reflect: true },
      text: { type: String, reflect: true },
      height: { type: String, reflect: true },
      width: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.baseImgSrc = '../images/new.png';
    this.imgSrc = '../images/new.png';
    this.imgSrc2 = '../images/hi.png';
    this.backgroundColor = '#000000';
    this.textColor = '#ffffff';
    this.text = '';
    this.height = '100px';
    this.width = '200px';
    this.linkTarget = '/';
    this.addEventListener('pointerenter', this.enter.bind(this));
    this.addEventListener('pointerout', this.exit.bind(this));
    this.addEventListener('keyup', this.enter.bind(this));
    this.addEventListener('keydown', this.exit.bind(this));
  }

  updated(changedProperties) {
    if (changedProperties.has('backgroundColor')) {
      this.style.setProperty(
        '--penguin-state-button-background-color',
        this.backgroundColor
      );
    }
    if (changedProperties.has('textColor')) {
      this.style.setProperty(
        '--penguin-state-button-text-color',
        this.textColor
      );
    }
    if (changedProperties.has('height')) {
      this.style.setProperty('--penguin-state-button-height', this.height);
    }
    if (changedProperties.has('width')) {
      this.style.setProperty('--penguin-state-button-width', this.width);
    }
  }

  enter() {
    this.imgSrc = this.imgSrc2;
  }

  exit() {
    this.imgSrc = this.baseImgSrc;
  }

  render() {
    return html`
      <simple-icon-lite
        icon="save"
        dark
        style="background-color:pink;"
      ></simple-icon-lite>
      <button>
        <a href="${this.linkTarget}">
          <meme-maker
            tabindex="-1"
            image-url="${this.imgSrc}"
            bottom-text="${this.text}"
            style="color: ${this.textColor}"
          ></meme-maker>
        </a>
      </button>
    `;
  }
}
