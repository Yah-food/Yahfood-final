# Yahfood Grading Notes

- I think a lot of complexity was added by having different recipe tables which we chatted about -- it would definitely make sense to update your recipe table to either add a `user_id` which can be null if its a default recipe or add a boolean for `user_provided` recipe. This would also allow you to have your routes be more RESTful
- Nice job getting tailwind to work -- really great thing to add to your resumes
- Many to many tables are hard and we didn't really cover them at all so great job working through that
- Not sure if this is intended but ALL users are able to edit the provided default recipes -- might want to lock down the edit to conditionally show it if the users owns the recipe
- Update your netlify to have a branded URL (yahfood.netlify.com)
- Had to deduct some points for testing
- Great job team -- super cool app -- i think with some adjustments to your database you could quickly add a lot of functionality

| Rubric                             | Deduction |
| ---------------------------------- | --------- |
| Routes utilize RESTful conventions | -1        |
| Snapshot tests for all components  | -5        |
| Works as intended with no bugs     | -1        |

**Total Points: 143 / 150**
