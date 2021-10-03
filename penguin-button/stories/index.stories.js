import { html } from 'lit';
import '../penguin-button.js';

export default {
  title: 'PenguinButton',
  component: 'penguin-button',
  argTypes: {
    title: { control: 'text' },
    colorTxt: { control: 'color' },
    link: { control: 'text' },
    icon: { control: 'boolean' },
    width: { control: 'number' },
    invert: { control: 'boolean' },
    disabled: { control: 'boolean' },
    linkFocus: { control: 'text' },
    txt: { control: 'text' },
    size: { control: 'text' },
  },
};

function Template({
  title = 'Hello world',
  colorTxt,
  link,
  icon,
  width,
  invert,
  disabled,
  linkFocus,
  txt,
  size,
}) {
  return html`
    <penguin-button
      style="--penguin-button-text-color: ${colorTxt || 'black'}"
      .title=${title}
      .link=${link}
      .icon=${icon}
      .width=${width}
      .invert=${invert}
      .disabled=${disabled}
      .linkFocus=${linkFocus}
      .txt=${txt}
      .size=${size}
    >
    </penguin-button>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
