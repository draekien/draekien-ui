import React from 'react';
import { Story, Meta } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import Icon, { IconProps } from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
} as Meta;

const Template: Story<IconProps> = (args) => (
  <Icon
    name={args.name}
    variant={select(
      'variant',
      ['filled', 'outlined', 'rounded', 'two-tone', 'sharp'],
      'filled'
    )}
    size={select('size', ['small', 'medium', 'large'], 'medium')}
    color={args.color}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'accessibility',
};
