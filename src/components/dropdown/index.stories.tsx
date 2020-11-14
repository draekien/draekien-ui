import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dropdown, { DropdownProps } from '.';
import List from '../list';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

const DropdownList = (
  <List
    onClick={action('dropdown item clicked')}
    items={[1, 2, 3, 4, 5, 6, 7].map((x) => ({
      value: x,
      text: x.toString(),
    }))}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'This is a dropdown',
  children: DropdownList,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'This is a dropdown button',
  variant: 'primary',
  children: DropdownList,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'This is a dropdown button',
  variant: 'secondary',
  children: DropdownList,
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  label: 'This is a dropdown button',
  variant: 'outline',
  children: DropdownList,
};
