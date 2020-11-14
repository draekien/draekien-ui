import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon, { IconProps } from '.';
import { colors } from '../theme/colors';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  name: 'accessibility',
};

export const Outlined = Template.bind({});
Outlined.args = {
  name: 'accessibility',
  variant: 'outlined',
};
export const Round = Template.bind({});
Round.args = {
  name: 'accessibility',
  variant: 'round',
};
export const TwoTone = Template.bind({});
TwoTone.args = {
  name: 'accessibility',
  variant: 'two-tone',
};
export const Sharp = Template.bind({});
Sharp.args = {
  name: 'accessibility',
  variant: 'sharp',
};
