import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Results from './Results';

test('renders the recipe card on the results page', async () => {
  const currentResults = [
    {
      id: 5,
      title: 'Fried Chicken',
      images:
        'https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Ever-Fried-Chicken_EXPS_MCMZ16_23240_B07_12_3b.jpg?resize=700,700',
    },
  ];
  const { container } = render(
    <MemoryRouter>
      <Results currentResults={currentResults} />
    </MemoryRouter>
  );
  await expect(screen.findByText('Fried Chicken'));
  expect(container).toMatchSnapshot();
});
