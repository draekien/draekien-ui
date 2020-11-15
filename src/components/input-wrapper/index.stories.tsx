import React from 'react';
import { Story, Meta } from '@storybook/react';
import InputWrapper, { InputWrapperProps } from '.';

export default {
  title: 'Components/Inputs/InputWrapper',
  component: InputWrapper,
} as Meta;

const Template: Story<InputWrapperProps> = (args) => <InputWrapper {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'inputWrapper',
  label: 'input',
  tooltip: 'this is an example tooltip',
};
