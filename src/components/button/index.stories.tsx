import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  children: 'External',
  href: 'https://www.google.com.au',
};
