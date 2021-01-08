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

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: 'text',
};

export const Gradient = Template.bind({});
Gradient.args = {
  children: 'Gradient',
  variant: 'gradient',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  children: 'External',
  href: 'https://www.google.com.au',
};

export const Feature = Template.bind({});
Feature.args = {
  children: 'Feature',
  variant: 'feature',
};
