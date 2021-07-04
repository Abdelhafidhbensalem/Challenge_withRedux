import React from 'react';
import CocktailsList from "../Components/CocktailsList/CocktailsList" ;
import FilterByname from "../Components/FilterByname/FilterByname";

function Home({cocktails,loadCocktails,search, searchcocktail}) {
    return (
        <div>
            <FilterByname searchcocktail={searchcocktail}/>
            <CocktailsList cocktails={cocktails} loadCocktails={loadCocktails} search={search} />
        </div>
    )
}

export default Home
