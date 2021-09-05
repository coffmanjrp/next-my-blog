import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SiStorybook } from 'react-icons/si';

import IconContainer from './IconContainer';

export default {
  title: 'coffmanjrp.io/IconContainer',
  component: IconContainer,
} as ComponentMeta<typeof IconContainer>;

const Template: ComponentStory<typeof IconContainer> = (args) => (
  <IconContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: <SiStorybook />,
  className: 'text-2xl',
};
