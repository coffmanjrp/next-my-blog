import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'coffmanjrp.io/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'coffmanjrp.io',
};
