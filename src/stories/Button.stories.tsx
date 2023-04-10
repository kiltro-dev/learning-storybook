import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    label: 'Hello world',
    birthDate: new Date(),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
Primary.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
};

Red.argTypes = {
  backgroundColor: {
    control: 'inline-radio',
    options: ['red', 'green', 'blue'],
  },
};
