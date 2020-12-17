/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from '.';
import Text from '../text';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

const CardContent = () => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 'xs' }}>
      <Text variant="title" color="text-dark">
        Card
      </Text>
      <Text color="text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        expedita sint suscipit adipisci velit modi in vero ut facilis! Eum odio
        eaque magni nobis, voluptatibus enim ducimus dolorem sapiente? Nam.
      </Text>
    </Flex>
  );
};

const CardFooter = () => {
  return (
    <Box sx={{ px: 'sm', py: 'xs' }}>
      <Text variant="small">*this card has a footer and header image!</Text>
    </Box>
  );
};

const LargeCardContents = () => {
  return (
    <Flex sx={{ gap: 'sm' }}>
      <img alt="placeholder image" src="https://via.placeholder.com/128" />
      <Flex sx={{ flexDirection: 'column' }}>
        <Text variant="title">John Doe</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          eligendi error dolor dicta atque quis voluptates doloremque, labore
          ullam perferendis aspernatur deserunt magni, blanditiis quia optio
          corrupti asperiores inventore? Quibusdam.
        </Text>
      </Flex>
    </Flex>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: <CardContent />,
  onClick: undefined,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: (
    <img alt="placeholder image" src="https://via.placeholder.com/128" />
  ),
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: <LargeCardContents />,
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: <CardContent />,
  onClick: (e: React.SyntheticEvent) => console.log(e.target),
};

export const WithHeaderAndFooter = Template.bind({});
WithHeaderAndFooter.args = {
  cardHeader: (
    <img alt="placeholder image" src="https://via.placeholder.com/320x250" />
  ),
  children: <CardContent />,
  cardFooter: <CardFooter />,
  onClick: undefined,
};

export const WithAccent = Template.bind({});
WithAccent.args = {
  children: <CardContent />,
  onClick: undefined,
  accentPosition: 'left',
};
