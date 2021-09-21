import { css, html, LitElement } from 'lit';

export class PenguinStateButton extends LitElement {
  constructor() {
    super();
    this.baseImgSrc = '../images/new.png';
    this.imgSrc = '../images/new.png';
    this.imgSrc2 = '../images/hi.png';
    this.hyper = '/';
    this.addEventListener('pointerenter', this.enter.bind(this));
    this.addEventListener('pointerout', this.exit.bind(this));
    this.addEventListener('keyup', this.enter.bind(this));
    this.addEventListener('keydown', this.exit.bind(this));
  }

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
      imgSrc: { type: String },
      imgSrc2: { type: String },
      hyper: { type: String },
    };
  }

  enter() {
    this.imgSrc = this.imgSrc2;
  }

  exit() {
    this.imgSrc = this.baseImgSrc;
  }

  render() {
    return html`
      <a href="${this.hyper}">
        <img tabindex="-1" src="${this.imgSrc}" alt="a penguin" />
      </a>
    `;
  }
}
