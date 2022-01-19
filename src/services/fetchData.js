import { client, checkError } from './client';

export async function getIngredients() {
  const resp = await client.from('ingredients').select('*').order('ingredient');
  return checkError(resp);
}
export async function getAllRecipes() {
  const resp = await client.from('recipes').select('*');
  return checkError(resp);
}
