import React from 'react';
import { Story, Meta } from '@storybook/react';
import List, { ListItemProps, ListProps } from '.';
import Button from '../button';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'I am a default list',
  items: [
    { value: 1, text: 'one' },
    { value: 2, text: 'two' },
    { value: 3, text: 'three' },
  ],
};

export const Transformed = Template.bind({});

const transformFn = (item: ListItemProps) => (
  <Button fullWidth>{item.text}</Button>
);

Transformed.args = {
  label: 'I am a transformed list',
  items: [
    { value: 1, text: 'one', transform: transformFn },
    { value: 2, text: 'two', transform: transformFn },
    { value: 3, text: 'three', transform: transformFn },
  ],
};
