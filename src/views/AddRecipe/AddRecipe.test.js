import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddRecipe from './AddRecipe';

test('renders add recipe form page', () => {
  const container = render(
    <MemoryRouter>
      <AddRecipe />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
