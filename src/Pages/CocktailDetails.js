import React, { useEffect, useState } from "react";
import SingleCocktail from "../Components/SingleCocktail/SingleCocktail";
import {getCocktail} from '../JS/actions'
import { useSelector, useDispatch } from "react-redux";


function CocktailDetails(props) {
    const cocktail = useSelector(state => state.cocktailReducer.cocktail)
    const loadCocktails = useSelector(state => state.cocktailReducer.loading2)
    const dispatch = useDispatch();

    const { iddrink } = props.match.params;
  
    useEffect(() => {
        dispatch(getCocktail(iddrink));
    }, [iddrink]);
    return (
        <div>
            <SingleCocktail cocktail={cocktail} loadcocktail={loadCocktails} />
        </div>
    )
}
export default CocktailDetails;
