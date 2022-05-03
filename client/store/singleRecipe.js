import axios from 'axios';
export const SET_RECIPE = 'SET_RECIPE';
export const setRecipe = (payload) => ({
  type: SET_RECIPE,
  payload,
});
export const fetchRecipe = (token, id) => async (dispatch) => {
  if (token) {
    const res = await axios.get(`/api/recipe/${id}`, {
      headers: {
        authorization: 'Bearer ' + token,
      },
    });
    return dispatch(setRecipe(res.data));
  }
};
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
