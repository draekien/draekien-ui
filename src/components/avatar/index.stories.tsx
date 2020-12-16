import React from 'react';
import { Story, Meta } from '@storybook/react';
import Avatar, { AvatarProps } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      type: { name: 'string', required: false },
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: '5rem',
};
