import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
