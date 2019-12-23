import React from 'react';
import { render,fireEvent, waitForElement,getByText } from '@testing-library/react';
import App from './App';
import LoginForm from './components/LoginForm'

test('renders login', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});


test("click signup ", () => {
  const { getByText } = render(<App />  );
  fireEvent.click(getByText(/Sign Up/i))
});


test("click login in again ", () => {
  const { getByText } = render(<App />  );
  fireEvent.click(getByText(/Log in/i))
});

