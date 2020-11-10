import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown, { DropdownProps } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'This is a dropdown',
  children: [1, 2, 3, 4, 5, 6, 7].map((x) => <div key={x}>Item {x}</div>),
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'This is a dropdown button',
  variant: 'primary',
  children: [1, 2, 3, 4, 5, 6, 7].map((x) => <div key={x}>Item {x}</div>),
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'This is a dropdown button',
  variant: 'secondary',
  children: [1, 2, 3, 4, 5, 6, 7].map((x) => <div key={x}>Item {x}</div>),
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  label: 'This is a dropdown button',
  variant: 'outline',
  children: [1, 2, 3, 4, 5, 6, 7].map((x) => <div key={x}>Item {x}</div>),
};
