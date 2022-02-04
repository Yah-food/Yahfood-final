import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeForm({
  handleSubmit,
  updateRecipeState,
  title,
  description,
  instructions,
  images,
}) {
  return (
    <>
      <div className="pt-2">
        <Link to="/profile" className="mx-5">
          <button>Back</button>
        </Link>
      </div>
      <div className="flex justify-center font-sans text-5xl opacity-70 py-10">
        <h1>yahfood!</h1>
      </div>
      <div>
        <form className="py-20">
          <label className="flex justify-center items-center flex-col">
            Title:
            <input
              className=" border-solid rounded-lg border-2 w-40"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                updateRecipeState('title', e.target.value);
              }}
            />
          </label>
          <label className="flex justify-center items-center flex-col">
            Ingredients:
            {/* If you wanted to do this where it would add ingredients from your table */}
            {/* You could use a multi-select and send up an array of ids to the database */}
            <textarea
              className=" border-solid rounded-lg border-2 w-40"
              type="text-area"
              name="description"
              value={description}
              onChange={(e) => {
                updateRecipeState('description', e.target.value);
              }}
            />
          </label>
          <label className="flex justify-center items-center flex-col">
            Instructions:
            <textarea
              className=" border-solid rounded-lg border-2 w-40"
              type="text-area"
              name="instructions"
              value={instructions}
              onChange={(e) => {
                updateRecipeState('instructions', e.target.value);
              }}
            />
          </label>
          <label className="flex justify-center items-center flex-col">
            Image url:
            <input
              className=" border-solid rounded-lg border-2 w-40"
              type="text"
              name="images"
              value={images}
              onChange={(e) => {
                updateRecipeState('images', e.target.value);
              }}
            />
          </label>
          <div className="flex justify-center mx-auto my-5 w-64 items-center border-2 border-lime-700/50 rounded-lg bg-lime-700/50 ">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
