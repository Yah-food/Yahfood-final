import { client, checkError } from './client';

export async function getIngredients() {
  const resp = await client.from('ingredients').select('*').order('ingredient');
  return checkError(resp);
}
