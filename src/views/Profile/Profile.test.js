import { render } from '@testing-library/react';
import Profile from './Profile';

test('renders the profile page that the user sees after logging in', () => {
  const container = render(<Profile />);
  expect(container).toMatchSnapshot();
});
