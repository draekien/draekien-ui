import React from 'react';
import { Story, Meta } from '@storybook/react';
import Bullet, { BulletProps } from '.';

export default {
  title: 'Components/Bullet',
  component: Bullet,
} as Meta;

const Template: Story<BulletProps> = (args) => <Bullet {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'bullet',
};
