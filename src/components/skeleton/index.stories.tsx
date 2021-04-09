import React from 'react';
import { Story, Meta } from '@storybook/react';
import Skeleton, { SkeletonProps } from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Basic = Template.bind({});

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: '10rem',
  width: '30rem',
  color: 'p-300',
  backgroundColor: 'primary',
};

export const ExampleSkeletonGroup = () => (
  <div style={{ display: 'flex', flexDirection: 'column', opacity: 0.25 }}>
    <Skeleton width="5rem" />
    <Skeleton width="11rem" />
    <Skeleton width="10rem" />
  </div>
);
