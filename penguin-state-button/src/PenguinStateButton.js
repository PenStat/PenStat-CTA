import { html, css, LitElement } from 'lit';

export class PenguinStateButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--penguin-state-button-text-color, #000);
      }

      img:hover {
        content: url('../images/hi.png');
      }
    `;
  }

  static get properties() {
    return {
      imageSource: { type: String },
      target: { type: String },
    };
  }

  constructor() {
    super();
    this.imageSource = '../images/new.png';
    this.target = '/';
  }

  render() {
    return html`
      <div class="button-container">
        <a href="${this.target}">Login Link</a>
        <button>Login</button>
        <img src=${this.imageSource} alt="a penguin" />
      </div>
    `;
  }
}
