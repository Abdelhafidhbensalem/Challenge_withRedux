import {GET_COCKTAILS,GET_COCKTAILS_LOAD,GET_COCKTAIL,COCKTAILS_ERRORS} from './const';
import axios from 'axios'

export const getCocktails = (search) => async (dispatch) => {
    dispatch({ type: GET_COCKTAILS_LOAD });
    try {
      let result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
     console.log(result.data)
      dispatch({ type: GET_COCKTAILS, payload: result.data.drinks })
    } catch (error) {
      dispatch({ type: COCKTAILS_ERRORS, payload: error })
    }
  }
  //get one cocktail
  export const getCocktail = (id) => (dispatch) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => dispatch({ type: GET_COCKTAIL, payload: res.data.drinks[0] }))
      .catch((err) => console.log(err));
  }