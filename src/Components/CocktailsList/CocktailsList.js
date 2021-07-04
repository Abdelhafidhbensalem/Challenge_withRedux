import React from 'react';
import { Spinner } from "react-bootstrap";
import Cocktail from "../Cocktail/Cocktail";

function CocktailsList({ cocktails, loadCocktails }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap", margin: "30px 30px 60px 30px"
      }}>
      {loadCocktails ? (
        <Spinner animation="border" variant="success" />
      ) :cocktails==null?<h1 style={{color:'black'}}>no cocktails with this name</h1>: (
          cocktails.map((el) => <Cocktail key={el.idDrink} cocktail={el} />)
        )}
    </div>
  )
}

export default CocktailsList;
