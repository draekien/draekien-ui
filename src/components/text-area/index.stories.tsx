import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextArea, TextAreaProps } from '.';

export default {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'textarea',
  label: 'textarea',
  helpText: 'a default textarea',
  placeholder: 'placeholder',
};
