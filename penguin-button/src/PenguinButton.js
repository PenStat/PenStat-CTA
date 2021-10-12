import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';

export class PenguinButton extends IntersectionObserverMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 21px;
        width: 200px;
        height: 200px;
      }
      img {
        max-width: 100%;
        max-height: auto;
      }
      p {
        color: var(--penguin-button-text-color);
      }
      a {
        display: block;
        padding: 10px 40px;
        border-radius: 12px;
        font-size: 1.25rem;
        background: var(--penguin-button-background);
        color: white;
        transform: translateY(-6px);
        text-decoration: none;
      } /* end of basic a details*/

      :host([invert]) {
        filter: invert(1);
      } /* end invert */
      :host([disabled]) {
        filter: grayscale(80%);
        pointer-events: none;
      } /* end disabled */
    `;
  } // end get styles()

  static get properties() {
    let props = {};
    if (super.properties) {
      props = super.properties;
    }
    return {
      ...props,
      title: { type: String },
      link: { type: String },
      penguinStatic: { type: String, reflect: true },
      penguinWave: { type: String, reflect: true },
      width: { type: String },
      invert: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      linkFocus: { type: String, reflect: true, attribute: 'link-target' },
      icon: { type: Boolean, reflect: true },
      colorTxt: { type: String, reflect: true, attribute: 'color-text' },
      txt: { type: String, reflect: true },
    };
  } // end properties

  constructor() {
    super(); // intersection observer
    this.penguinStatic = '../images/login.png';
    this.penguinWave = '../images/yay.png';
    this.penguinReset = '../images/login.png';
    this.link = 'https://cprewritten.net';
    this.width = '200px';
    this.invert = false;
    this.disabled = false;
    this.linkFocus = 'https://cprewritten.net';
    this.icon = false;
    this.colorTxt = '#ffaaff';
    this.txt = 'Text';

    this.addEventListener('pointerenter', this.enter.bind(this));
    this.addEventListener('pointerout', this.exit.bind(this));
    this.addEventListener('keyup', this.enter.bind(this));
    this.addEventListener('keydown', this.exit.bind(this));
  } // end constructor

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('colorTxt')) {
      this.style.setProperty('--penguin-button-text-color', this.colorTxt);
    }
  } // end updated

  enter() {
    this.penguinStatic = this.penguinWave;
  } // end enter

  exit() {
    this.penguinStatic = this.penguinReset;
  } // end exit

  render() {
    return this.elementVisible
      ? html`
          <button tabindex="-1">
            <a href="${this.linkFocus}">
              <span>
                ${this.icon
                  ? html` <simple-icon-lite icon="pets" tabindex="-1">
                      </simple-icon-lite>
                      <p style="color: ${this.colorTxt};">${this.txt}</p>`
                  : html`<img src="${this.penguinStatic}" alt="dapper man" />`}
              </span>
            </a>
          </button>
        `
      : html``;
  } // end render
} // end class
