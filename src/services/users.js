import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}

export async function createNewRecipe(newRecipe) {
  const resp = await client.from('userRecipes').insert({
    title: newRecipe.title,
    description: newRecipe.description,
    instructions: newRecipe.instructions,
    images: newRecipe.images,
  });
  return checkError(resp);
}

export async function editRecipe(recipe) {
  const resp = await client.from('userRecipes').update(recipe).eq('title', recipe.title);
  return checkError(resp);
}

export async function deleteRecipe(recipe) {
  const resp = await client.from('userRecipes').delete().match({ title: recipe.title });
  return checkError(resp);
}