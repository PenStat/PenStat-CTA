import { html, css, LitElement } from 'lit';

export class PenguinButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: 200px;
        height: 200px;
      }
      img {
        max-width: 100%;
        max-height: auto;
      }
    `;
  } // end get styles()

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      penguinStatic: { type: String, reflect: true },
      penguinWave: { type: String, reflect: true },
      width: { type: String },
    };
  } // end properties

  constructor() {
    super();
    this.penguinStatic = '../images/login.png';
    this.penguinWave = '../images/yay.png';
    this.penguinReset = '../images/login.png';
    this.link = 'https://play.cprewritten.net/';
    this.width = '200px';

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
  }

  render() {
    return html`
      <a href="${this.link}" tabindex="-1">
        <button>
          <img src="${this.penguinStatic}" alt="dapper man" />
        </button>
      </a>
    `;
  } // end render
} // end class
