import axios from 'axios';
export const SET_RECIPES = 'SET_RECIPES';
export const setRecipes = (payload) => ({
  type: SET_RECIPES,
  payload,
});
export const fetchAllRecipe = (token) => async (dispatch) => {
  if (token) {
    const res = await axios.get('/api/recipe', {
      headers: {
        authorization: 'Bearer ' + token,
      },
    });
    return dispatch(setRecipes(res.data));
  }
};
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPES:
      return [...payload];

    default:
      return state;
  }
};
