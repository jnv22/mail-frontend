import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import EmailList, { EmailListProps } from '../components/EmailList';
import data from '../data/emails.json';

export default {
  title: 'Mail/List',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<EmailListProps> = (args) => <EmailList {...args} />;

export const Email = Template.bind({});
Email.args = {
  data: data
};

