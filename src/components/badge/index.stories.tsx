import React from 'react';
import { Story, Meta } from '@storybook/react';
import Badge, { BadgeProps } from '.';
import { Box } from 'theme-ui';
import { colors } from '../theme/colors';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(colors),
      },
    },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => (
  <Box
    style={{
      backgroundColor: 'gray',
      borderRadius: '50%',
      width: 50,
      height: 50,
      position: 'relative',
    }}
  >
    <Badge {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  children: 1,
  position: { right: 0 },
};
