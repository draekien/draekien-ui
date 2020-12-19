import React from 'react';
import { Story, Meta } from '@storybook/react';
import ScrollableArea, { ScrollableAreaProps } from '.';

export default {
  title: 'Components/ScrollableArea',
  component: ScrollableArea,
} as Meta;

const Template: Story<ScrollableAreaProps> = (args) => (
  <ScrollableArea {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  style: {
    width: '200px',
    height: '200px',
  },
  children: (
    <div>
      <div style={{ height: 200, backgroundColor: 'lightblue' }} />
      <div style={{ height: 200, backgroundColor: 'lightyellow' }} />
      <div style={{ height: 200, backgroundColor: 'lightgreen' }} />
    </div>
  ),
};

export const FullView = Template.bind({});
FullView.args = {
  style: {
    width: '100%',
    height: '100vh',
  },
  children: (
    <div>
      <div style={{ height: 200, backgroundColor: 'lightblue' }} />
      <div style={{ height: 200, backgroundColor: 'lightyellow' }} />
      <div style={{ height: 200, backgroundColor: 'lightgreen' }} />
    </div>
  ),
};
