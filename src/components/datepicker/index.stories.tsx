import React from 'react';
import { Story, Meta } from '@storybook/react';
import DatePicker, { DatePickerProps } from '.';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
