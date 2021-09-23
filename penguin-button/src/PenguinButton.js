import { html, css, LitElement } from 'lit';

export class PenguinButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--penguin-button-text-color, #000);
      }
      :host .a {
        background-color:#44c767;
        border-radius:28px;
        border:1px solid #18ab29;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:17px;
        padding:16px 31px;
        text-decoration:none;
        text-shadow:0px 1px 0px #2f6627;
      }
      .a:hover {
        background-color:#5cbf2a;
      }
      .a:active {
        position:relative;
        top:1px;
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

