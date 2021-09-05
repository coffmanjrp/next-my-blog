import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBox from './SearchBox';

export default {
  title: 'coffmanjrp.io/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = () => <SearchBox />;

export const Default = Template.bind({});
