import { html, css, LitElement } from 'lit';
<<<<<<< HEAD
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
=======
// import '@lrnwebcomponents/simple-picker.js';
>>>>>>> f5a75e514c48220bfb6b600f0770fea5629dfd24

export class PenguinButton extends LitElement {
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
    return {
      title: { type: String },
      link: { type: String },
      penguinStatic: { type: String, reflect: true },
      penguinWave: { type: String, reflect: true },
      width: { type: String },
      invert: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
<<<<<<< HEAD
      linkFocus: { type: String, reflect: true, attribute: 'link-target' },
      icon: { type: Boolean, reflect: true },
      colorTxt: { type: String, reflect: true, attribute: 'color-text' },
      txt: { type: String, reflect: true },
      size: { type: String, reflect: true },
=======
      size: { type: String, reflect: true },
      icon: { type: Boolean, reflect: true },
>>>>>>> f5a75e514c48220bfb6b600f0770fea5629dfd24
    };
  } // end properties

  constructor() {
    super();
    this.penguinStatic = '../images/login.png';
    this.penguinWave = '../images/yay.png';
    this.penguinReset = '../images/login.png';
    this.link = 'https://play.cprewritten.net/';
    this.width = '200px';
    this.invert = false;
    this.disabled = false;
    this.linkFocus = '/';
    this.icon = false;
    this.colorTxt = '#ffaaff';
    this.txt = 'Text';
    this.size = 'small';

    this.addEventListener('pointerenter', this.enter.bind(this));
    this.addEventListener('pointerout', this.exit.bind(this));
    this.addEventListener('keyup', this.enter.bind(this));
    this.addEventListener('keydown', this.exit.bind(this));
  } // end constructor

  enter() {
    this.penguinStatic = this.penguinWave;
  } // end enter

  exit() {
    this.penguinStatic = this.penguinReset;
  } // end exit

  render() {
<<<<<<< HEAD
    return this.elementVisible
      ? html`
          <button tabindex="-1">
            <a href="${this.linkFocus}">
              <span>
                ${this.size === 'small'
                  ? html` <simple-icon-lite icon="pets" tabindex="-1">
                      </simple-icon-lite>
                      <p style="color: ${this.colorTxt};">${this.txt}</p>`
                  : html` <default-button
                      tabindex="-1"
                      image-url="${this.penguinStatic}"
                    ></default-button>`}
              </span>
            </a>
          </button>
        `
      : html``;
=======
    return html`
      <a href="${this.link}" tabindex="-1">
        <button>
          <img src="${this.penguinStatic}" alt="dapper man" />
          <span> </span>
        </button>
      </a>
    `;
>>>>>>> f5a75e514c48220bfb6b600f0770fea5629dfd24
  } // end render
} // end class
