import { css, html, LitElement } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';

export class PenguinStateButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        height: var{--penguin-state-button-height};
        width: var{--penguin-state-button-width};
      }

      button {
        background-color: var(--penguin-state-button-accent-color);
        border-radius: 12px;
        border: none;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
      }

      a {
        display: block;
        padding: 12px 42px;
        border-radius: 12px;
        font-size: 1.25rem;
        background: var(--penguin-state-button-background-color);
        color: white;
        transform: translateY(-6px);
      }

      button:active a {
        transform: translateY(-2px);
      }

      img {
        padding: 5px;
      }

      a:hover {
        background-color: #ffffff;
      }

      meme-maker{
        --meme-maker-font-size: 24px;
      }
    `;
  }

  static get properties() {
    return {
      imgSrc: { type: String, reflect: true },
      imgSrc2: { type: String, reflect: true },
      linkTarget: { type: String, reflect: true, attribute: 'link-target' },
      backgroundColor: {
        type: String,
        reflect: true,
        attribute: 'background-color',
      },
      accentColor: { type: String, reflect: true, attribute: 'accent-color' },
      textColor: { type: String, reflect: true, attribute: 'text-color' },
      text: { type: String, reflect: true },
      height: { type: String, reflect: true },
      width: { type: String, reflect: true },
      icon: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.baseImgSrc = '../images/new.png';
    this.imgSrc = '../images/new.png';
    this.imgSrc2 = '../images/hi.png';
    this.backgroundColor = '#000000';
    this.accentColor = '#ffffff';
    this.textColor = '#ffffff';
    this.text = 'Text';
    this.height = '100px';
    this.width = '200px';
    this.linkTarget = '/';
    this.icon = false;
    this.disabled = false;
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
    if (changedProperties.has('accentColor')) {
      this.style.setProperty(
        '--penguin-state-button-accent-color',
        this.accentColor
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
    if (changedProperties.has('disabled')) {
      this.disabledChange();
    }
  }

  enter() {
    if (!this.disabled) this.imgSrc = this.imgSrc2;
    else this.disabledChange();
  }

  exit() {
    if (!this.disabled) this.imgSrc = this.baseImgSrc;
    else this.disabledChange();
  }

  disabledChange() {
    const icon = this.shadowRoot.querySelector('.icon');
    const iconA = this.shadowRoot.querySelector('.iconA');
    const penguin = this.shadowRoot.querySelector('.penguin');
    const penguinA = this.shadowRoot.querySelector('.penguinA');
    if (this.disabled) {
      if (icon != null) {
        icon.setAttribute('disabled', '');
        icon.setAttribute('style', 'cursor: not-allowed;');
        iconA.setAttribute(
          'style',
          'text-decoration:none;  opacity: 0.5; pointer-events: none;'
        );
      }
      if (penguin != null) {
        penguin.setAttribute('disabled', '');
        penguin.setAttribute('style', 'cursor: not-allowed;');
        penguinA.setAttribute(
          'style',
          'text-decoration:none;  opacity: 0.5; pointer-events: none;'
        );
      }
    } else {
      if (icon != null) {
        icon.removeAttribute('disabled');
        icon.setAttribute('style', '');
        iconA.setAttribute('style', '');
      }
      if (penguin != null) {
        penguin.removeAttribute('disabled');
        penguin.setAttribute('style', '');
        penguinA.setAttribute('style', '');
      }
    }
  }

  render() {
    if (this.icon) {
      return html`
        <button class="icon">
          <a class="iconA" href="${this.linkTarget}">
            <span
              ><simple-icon-lite
                icon="pets"
                dark
                style="background-color:red;"
              ></simple-icon-lite>
              <p style="color: ${this.textColor}">${this.text}</p></span
            >
          </a>
        </button>
      `;
    }
    return html`
      <button class="penguin">
        <a
          class="penguinA"
          href="${this.linkTarget}"
          style="text-decoration:none"
        >
          <meme-maker
            tabindex="-1"
            image-url="${this.imgSrc}"
            bottom-text="${this.text}"
            style=""
          ></meme-maker>
        </a>
      </button>
    `;
  }
}
