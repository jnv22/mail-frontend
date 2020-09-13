import React from 'react';
import { render, screen, within } from '@testing-library/react';

import EmailList from '../EmailList';
import data from "../../data/emails.json";

describe('<EmailList />', () => {
  it('renders list', () => {
    
    render(<EmailList data={data} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(data.messages.length);

    listItems.forEach((item, index) => {
        const { getByText } = within(item);
        const { subject, sender } = data.messages[index];
        expect(getByText(subject)).toBeInTheDocument();
        expect(getByText(sender)).toBeInTheDocument();
    });
  });
});