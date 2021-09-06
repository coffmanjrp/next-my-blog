import { ComponentStory, ComponentMeta } from '@storybook/react';

import MobileMenu from './MobileMenu';

export default {
  title: 'coffmanjrp.io/MobileMenu',
  component: MobileMenu,
} as ComponentMeta<typeof MobileMenu>;

const Template: ComponentStory<typeof MobileMenu> = (args) => (
  <MobileMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  showMenu: true,
};
