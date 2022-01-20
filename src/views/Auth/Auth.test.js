import { render } from '@testing-library/react';
import Auth from './Auth';

test('renders login form page', () => {
  const container = render(<Auth />);
  expect(container).toMatchSnapshot();
});
