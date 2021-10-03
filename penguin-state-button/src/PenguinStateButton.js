import { css, html, LitElement } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';

export class PenguinStateButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 10px;
      }

      a button {
        width: var(--penguin-state-button-width);
        height: var(--penguin-state-button-height);
        padding: 10px;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        background-color: var(--penguin-state-button-background-color);
        text-decoration: none;
      }
    `;
  }

  static get properties() {
    let props = {};
    if (super.properties) {
      props = super.properties;
    }
    return {
      ...props,
      imgSrc: { type: String, reflect: true, attribute: 'img-scr' },
      imgSrc2: { type: String, reflect: true, attribute: 'changed-scr' },
      linkTarget: { type: String, reflect: true, attribute: 'link-target' },
      backgroundColor: {
        type: String,
        reflect: true,
        attribute: 'background-color',
      },
      textColor: { type: String, reflect: true, attribute: 'text-color' },
      text: { type: String, reflect: true },
      icon: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      size: { type: String, reflect: true },
      tts: { type: String, reflect: true },
      height: { type: String },
      width: { type: String },
      textSize: { type: String, attribute: 'text-size' },
    };
  }

  constructor() {
    super();
    this.baseImgSrc = '../images/new.png';
    this.imgSrc = '../images/new.png';
    this.imgSrc2 = '../images/hi.png';
    this.backgroundColor = '#000000';
    this.textColor = '#ffffff';
    this.text = 'Text';
    this.linkTarget = '/';
    this.icon = false;
    this.disabled = false;
    this.height = '200px';
    this.width = '150px';
    this.textSize = '24px';

    // Text-to-Speech defaults
    this.speech = new SpeechSynthesisUtterance();
    this.speech.lang = navigator.language.substring(0, 2); // uses language of the browser
    this.tts = '';

    this.addEventListener('pointerenter', this.enter.bind(this));
    this.addEventListener('pointerout', this.exit.bind(this));
    this.addEventListener('keyup', this.enter.bind(this));
    this.addEventListener('keydown', this.exit.bind(this));
  }

  updated(changedProperties) {
    super.updated(changedProperties);
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
    if (changedProperties.has('textSize')) {
      this.style.setProperty('--meme-maker-font-size', this.textSize);
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

  _click(e) {
    e.preventDefault();
    this.speech.text = this.tts;
    console.log(this.speech.text);
    window.speechSynthesis.speak(this.speech);
  }

  disabledChange() {
    if (this.elementVisible) {
      const button = this.shadowRoot.querySelector('button');
      const a = this.shadowRoot.querySelector('a');
      if (this.disabled) {
        this.imgSrc = '../images/disabled.png';
        button.setAttribute('disabled', '');
        button.setAttribute('style', 'cursor: not-allowed;');
        a.setAttribute(
          'style',
          'text-decoration:none;  opacity: 0.5; pointer-events: none;'
        );
      } else {
        this.imgSrc = this.baseImgSrc;
        button.removeAttribute('disabled');
        button.setAttribute('style', '');
        a.setAttribute('style', '');
      }
    }
  }

  render() {
    // if (this.icon) {
    //   return html`
    //     <button class="icon" tabindex="-1">
    //       <a class="iconA" href="${this.linkTarget}">
    //         <span
    //           ><simple-icon-lite
    //             icon="pets"
    //             dark
    //             style="background-color:red;"
    //             tabindex="-1"
    //           ></simple-icon-lite>
    //           <p style="color: ${this.textColor};">${this.text}</p></span
    //         >
    //       </a>
    //     </button>
    //   `;
    // }
    // return html`
    //   <button class="penguin" tabindex="-1">
    //     <a class="penguinA" href="${this.linkTarget}">
    //       <meme-maker
    //         tabindex="-1"
    //         image-url="${this.imgSrc}"
    //         bottom-text="${this.text}"
    //         style=""
    //       ></meme-maker>
    //     </a>
    //   </button>
    // `;
    // Size is going to be string, change as such
    return html`
      <a href="${this.linkTarget}" @click="${this._click}" tabindex="-1">
        <button>
          <span>
            ${this.size === 'small'
              ? html` <simple-icon-lite
                    icon="pets"
                    dark
                    style="background-color:red;"
                    tabindex="-1"
                  ></simple-icon-lite>
                  <p style="color: ${this.textColor};">${this.text}</p>`
              : html` <meme-maker
                  tabindex="-1"
                  image-url="${this.imgSrc}"
                  bottom-text="${this.text}"
                  style=""
                ></meme-maker>`}
          </span>
        </button>
      </a>
    `;
  }
}
