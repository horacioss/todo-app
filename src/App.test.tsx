import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe('My Test over <App />', () => {
  
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/overview/i);
    expect(linkElement).toBeInTheDocument();
  });
  
})

