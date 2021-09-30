import { css, html, LitElement } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';

export class PenguinStateButton extends IntersectionObserverMixin(LitElement) {

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          margin: 10px;
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
          text-decoration: none;
        }

        button:active a {
          transform: translateY(-2px);
        }

        img {
          padding: 5px;
        }

        meme-maker {
          --meme-maker-font-size: 24px;
        }
      `,
    ];
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
      accentColor: { type: String, reflect: true, attribute: 'accent-color' },
      textColor: { type: String, reflect: true, attribute: 'text-color' },
      text: { type: String, reflect: true },
      icon: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      size: { type: String, reflect: true },
      tts: { type: String, reflect: true },
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
    this.linkTarget = '/';
    this.icon = false;
    this.disabled = false;

    // Text-to-Speech defaults
    this.speech = new SpeechSynthesisUtterance();
    this.speech.lang = 'en';
    this.tts = '';

    this.addEventListener('pointerenter', this.enter.bind(this));
    this.addEventListener('pointerout', this.exit.bind(this));
    this.addEventListener('keyup', this.enter.bind(this));
    this.addEventListener('keydown', this.exit.bind(this));
    this.addEventListener('click', this._click.bind(this));
  }

  updated(changedProperties) {
    super.updated(changedProperties);
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
    return this.elementVisible
      ? html`
          <button tabindex="-1">
            <a href="${this.linkTarget}">
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
            </a>
          </button>
        `
      : html``;
  }
}
