import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spinner, { SpinnerProps } from '.';
import { colors } from '../theme/colors';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
  },
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
