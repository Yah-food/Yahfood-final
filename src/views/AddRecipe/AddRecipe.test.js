import { render } from '@testing-library/react';
import AddRecipe from './AddRecipe';

test('renders add recipe form page', () => {
  const container = render(<AddRecipe />);
  expect(container).toMatchSnapshot();
});
