import { client, checkError } from './client';

export async function getIngredients() {
  const resp = await client.from('ingredients').select('*').order('ingredient');
  return checkError(resp);
}
export async function getAllRecipes() {
  const resp = await client.from('recipes').select('*');
  return checkError(resp);
}
export async function getRecipeById(id) {
  const resp = await client.from('recipes').select('*').eq('id', id).single();
  return checkError(resp);
}

export async function getRecipeByIngredients(selectedIngredients) {
  const resp = await client
    .from('recipes')
    .select('*, ingredients!inner(id, ingredient)')
    .in('ingredients.id', selectedIngredients);
  return checkError(resp);
}
