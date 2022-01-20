import { client, checkError } from './client';

export async function getIngredients() {
  const resp = await client.from('ingredients').select('*').order('ingredient');
  return checkError(resp);
}

export async function getAllRecipes() {
  const resp = await client.from('recipes').select('*');
  return checkError(resp);
}

export async function getAllUserRecipes() {
  const resp = await client.from('userRecipes').select('*');
  return checkError(resp);
}

export async function getUserRecipeByTitle(title) {
  console.log('hello world');
  const resp = await client.from('userRecipes').select('*').eq('title', title).single();
  return checkError(resp);
}

export async function getRecipeByTitle(title) {
  const resp = await client.from('recipes').select('*').eq('title', title).single();
  return checkError(resp);
}

export async function getRecipeByIngredients(selectedIngredients) {
  const resp = await client
    .from('recipes')
    .select('*, ingredients!inner(id, ingredient)')
    .in('ingredients.id', selectedIngredients);
  return checkError(resp);
}
