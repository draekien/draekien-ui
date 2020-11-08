import React from 'react';
import { Story, Meta } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button
    variant={select(
      'variant',
      ['primary', 'secondary', 'outline', 'text'],
      'primary'
    )}
    size={select('size', ['sm', 'md', 'lg'], 'md')}
    {...args}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
};
