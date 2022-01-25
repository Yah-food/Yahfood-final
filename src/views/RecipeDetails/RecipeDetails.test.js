import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

test.skip('renders the recipe details', async () => {
  // const currentResults = [
  //   {
  //     id: 5,
  //     title: 'Fried Chicken',
  //     images:
  //       'https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Ever-Fried-Chicken_EXPS_MCMZ16_23240_B07_12_3b.jpg?resize=700,700',
  //     description: `1-3/4 cups all-purpose flour
  //     1 tablespoon dried thyme
  //     1 tablespoon paprika
  //     2 teaspoons salt
  //     2 teaspoons garlic powder
  //     1 teaspoon pepper
  //     1 large egg
  //     1/3 cup 2% milk
  //     2 tablespoons lemon juice
  //     1 broiler/fryer chicken (3 to 4 pounds), cut up
  //     Oil for deep-fat frying`,
  //     instructions: `1. In a shallow bowl, mix the first 6 ingredients. In a separate shallow bowl, whisk egg, milk and lemon juice until blended. Dip chicken in flour mixture to coat all sides; shake off excess. Dip in egg mixture, then again in flour mixture.
  //     2. In an electric skillet or deep fryer, heat oil to 375°. Fry chicken, a few pieces at a time, 6-10 minutes on each side or until skin is golden brown and juices run clear. Drain on paper towels.`,
  //   },
  // ];
  const { container } = render(
    <MemoryRouter>
      <RecipeDetails match={{ params: { title: 'Fried Chicken' } }} />
    </MemoryRouter>
  );
  await screen.findByText('Fried Chicken');
  expect(container).toMatchSnapshot();
});
