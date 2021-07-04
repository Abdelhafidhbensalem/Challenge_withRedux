import React from 'react';
import { Link } from "react-router-dom";
import './cocktail.css'

function Cocktail({ cocktail }) {
    console.log(cocktail);
    return (
        <div>
            <div className="cocktailcard">
                <div className="card_left">
                    <Link to={`/cocktails/${cocktail.idDrink}`}> <div className='cocktailimg'><img src={cocktail.strDrinkThumb} alt="cocktail_image" /></div></Link>
                </div>
                <div className="card_right">
                    <h1>{cocktail.strDrink}</h1>
                    <div className="card_right__details">
                        <ul>
                            <li>{cocktail.strCategory}</li>
                            <li>-------------------------</li>
                            <li>{cocktail.strAlcoholic}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Cocktail;
