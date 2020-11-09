import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
} as Meta;

const Template: Story<TextProps> = (args) => (
  <Text {...args}>{args.children}</Text>
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Text',
};
