/** @jsxImportSource theme-ui */

import { Story, Meta } from '@storybook/react';
import Navbar, { NavbarProps } from '.';
import Text from '../text';
import Button from '../button';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  backgroundColor: 'b-300',
  logo: (
    <Text variant="hero" color="text-white">
      DraekienUI
    </Text>
  ),
  children: (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      <li>
        <Button variant="text" href="/">
          Home
        </Button>
      </li>
    </ul>
  ),
};
