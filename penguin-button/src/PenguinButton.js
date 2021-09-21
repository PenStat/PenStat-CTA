import { html, css, LitElement } from 'lit';

export class PenguinButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--penguin-button-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.link = "https://psu.edu"
  }
  render() {
    return html`
     <a href="https://psu.edu" tabindex= "-1"><button>Penn State Football</button></a>
    `;
  }
}
