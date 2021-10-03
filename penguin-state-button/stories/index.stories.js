import { html } from 'lit';
import '../penguin-state-button.js';

export default {
  title: 'PenguinStateButton',
  component: 'penguin-state-button',
  argTypes: {
    imgSrc: { control: 'text' },
    imgSrc2: { control: 'text' },
    linkTarget: { control: 'text' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    text: { control: 'text' },
    tts: { control: 'text' },
    height: { control: 'text' },
    width: { control: 'text' },
    textSize: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: 'boolean' },
  },
};

function Template({
  imgSrc = '../images/new.png',
  imgSrc2 = '../images/hi.png',
  textColor = '#ffffaa',
  linkTarget = 'https://github.com',
  backgroundColor = '#ffdd44',
  text = 'Github',
  tts = 'See you later!',
  disabled = false,
  icon = false,
  height = '200px',
  width = '150px',
  textSize = '24px',
  slot,
}) {
  return html`
    <penguin-state-button
      img-src=${imgSrc}
      changed-src=${imgSrc2}
      height=${height}
      width=${width}
      link-target=${linkTarget}
      background-color=${backgroundColor}
      text-color=${textColor}
      text=${text}
      tts=${tts}
      ?disabled=${disabled}
      ?icon=${icon}
      text-size=${textSize}
    >
      ${slot}
    </penguin-state-button>
  `;
}

export const Regular = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  icon: true,
};
