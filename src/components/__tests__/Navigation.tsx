import React from 'react';
import { render, screen } from '@testing-library/react';

import Navigation from '../Navigation';
import data from "../../data/emails.json";

describe('<Navigation />', () => {
  it('renders list', () => {

    // 5 list items total
    const LISTITEMS = 5;
    
    render(<Navigation data={data} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(LISTITEMS);
  });
});