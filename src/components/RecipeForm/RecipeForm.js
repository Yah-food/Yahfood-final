import React from 'react';

export default function RecipeForm({
  handleSubmit,
  updateRecipeState,
  title,
  description,
  instructions,
  images,
}) {
  return (
    <div>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              updateRecipeState('title', e.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              updateRecipeState('description', e.target.value);
            }}
          />
        </label>
        <label>
          Instructions:
          <input
            type="text"
            name="instructions"
            value={instructions}
            onChange={(e) => {
              updateRecipeState('instructions', e.target.value);
            }}
          />
        </label>
        <label>
          Image url:
          <input
            type="text"
            name="images"
            value={images}
            onChange={(e) => {
              updateRecipeState('images', e.target.value);
            }}
          />
        </label>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
