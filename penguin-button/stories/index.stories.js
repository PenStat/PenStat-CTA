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
}) {
  return html`
    <penguin-button
      style="--penguin-button-text-color: ${colorTxt || 'black'}"
      .colorTxt=${colorTxt}
      .title=${title}
      .link=${link}
      .icon=${icon}
      .width=${width}
      .invert=${invert}
      .disabled=${disabled}
      .linkFocus=${linkFocus}
      .txt=${txt}
    >
    </penguin-button>
  `;
}

export const Regular = Template.bind({});

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
  txt: 'Pizza Parlor',
  colorTxt: '#000001',
};

export const Invert = Template.bind({});
Invert.args = {
  invert: true,
  link: 'https://community.cprewritten.net/2021/09/29/penguin-of-the-week-199/',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
