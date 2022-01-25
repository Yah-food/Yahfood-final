import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import EditRecipe from './EditRecipe';

test('renders edit individual recipe', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/profile/editrecipe/Birria']}>
      <Route path="/profile/editrecipe/:title" component={EditRecipe} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Birria');

  expect(container).toMatchSnapshot();
});
