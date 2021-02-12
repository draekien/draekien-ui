import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LineChart, LineChartProps } from './index';

export default {
  title: 'Components/LineChart',
  component: LineChart,
} as Meta;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  data: [
    {
      label: 'test',
      color: 'primary',
      points: [
        { label: 'one', x: 0, y: 10 },
        { label: 'two', x: 10, y: 40 },
        { label: 'three', x: 40, y: 30 },
        { label: 'four', x: 60, y: 5 },
        { label: 'five', x: 90, y: 45 },
        { label: 'six', x: 120, y: 10 },
        { label: 'seven', x: 150, y: 45 },
        { label: 'eight', x: 200, y: 10 },
      ],
    },
    {
      label: 'test2',
      color: 'secondary',
      points: [
        { label: 'one', x: 0, y: 10 },
        { label: 'two', x: 10, y: 40 },
        { label: 'three', x: 40, y: 30 },
        { label: 'four', x: 60, y: 5 },
        { label: 'five', x: 90, y: 45 },
        { label: 'six', x: 120, y: 10 },
        { label: 'seven', x: 150, y: 45 },
        { label: 'eight', x: 300, y: 10 },
      ],
    },
  ],
  height: 500,
  width: 1000,
  precision: 0,
  fontSize: 16,
  heading: 'Chart Heading',
  xLabel: 'X Axis Label',
  yLabel: 'Y Axis Label',
  background: 'p-000',
};
