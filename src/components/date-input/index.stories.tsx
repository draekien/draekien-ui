import React from 'react';
import { Story, Meta } from '@storybook/react';
import DateInput, { DateInputProps } from '.';

export default {
  title: 'Components/Inputs/DateInput',
  component: DateInput,
} as Meta;

const Template: Story<DateInputProps> = (args) => <DateInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'datepicker',
  label: 'Date Input',
  value: '03/12/2020',
  helpText: 'Type or click on the calendar icon',
};
