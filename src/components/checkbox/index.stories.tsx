import React from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'checkbox',
  label: "I'm a checkbox input",
  tooltip: 'this is a tooltip',
  children: 'checkbox children text',
};
