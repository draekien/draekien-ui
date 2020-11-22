import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tooltip, { TooltipProps } from '.';
import Textbox from '../textbox';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'I position myself auto-magicaly',
  children: 'Hi I have a tooltip. Hover over me to see it!',
};

export const InputTooltip = Template.bind({});
InputTooltip.args = {
  text: 'I can be used around inputs too',
  direction: 'right',
  children: (
    <Textbox
      id="textbox"
      helpText="My tooltip is always on the right"
      label="Textbox"
    />
  ),
};
