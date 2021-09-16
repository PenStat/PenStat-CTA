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
      imageSource: { type: String },
    };
  }

  constructor() {
    super();
    this.imageSource = '../images/hi.png';
  }

  __changeImage() {
    if (this.imageSource === '../images/hi.png') {
      this.imageSource = '../images/new.png';
    } else {
      this.imageSource = '../images/hi.png';
    }
  }

  render() {
    return html`
      <div class="button-container">
        <button @mouseover=${this.__changeImage}>Login</button>
        <img src=${this.imageSource} alt="a penguin" />
      </div>
    `;
  }
}
