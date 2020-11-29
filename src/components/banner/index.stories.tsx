/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Story, Meta } from '@storybook/react';
import { Banner, BannerProps } from '.';

export default {
  title: 'Components/Banner',
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: 'information',
  message: 'I am an information banner',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  variant: 'information',
  message: 'I have a custom icon',
  icon: 'accessibility',
};

export const Closable = Template.bind({});
Closable.args = {
  variant: 'success',
  message: 'I can be made to be closable!',
  closable: true,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  message: 'Oh no! Something needs your attention!',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  message: 'Aaaaa something went wrong!',
};
