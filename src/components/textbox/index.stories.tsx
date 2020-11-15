import React from 'react';
import { Story, Meta } from '@storybook/react';
import Textbox, { TextBoxProps } from '.';

export default {
  title: 'Components/Inputs/Textbox',
  component: Textbox,
} as Meta;

const Template: Story<TextBoxProps> = (args) => <Textbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'Textbox',
  label: "I'm a textbox input",
  tooltip: 'This is the default textbox input',
};
