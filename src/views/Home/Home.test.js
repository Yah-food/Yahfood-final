import { render } from '@testing-library/react';
import Home from './Home';

test('renders the home page', () => {
  const container = render(<Home />);
  expect(container).toMatchSnapshot();
});
