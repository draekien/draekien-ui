import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ToggleSwitch, ToggleSwitchProps } from '.';

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {
    disabled: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'toggle',
  children: 'Toggle',
};
