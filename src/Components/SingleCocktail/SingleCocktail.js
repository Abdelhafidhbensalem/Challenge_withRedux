import React from 'react';
import { Spinner, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./SingleCocktail.css";

function SingleCocktail({ cocktail, loadcocktail }) {
    if (cocktail) {
        var {
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6
        } = cocktail;
        var ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6
        ];
    }
    return loadcocktail ? (
        <div style={{ marginTop: '150px' }}>
            <Spinner animation="border" variant="success" />
        </div>
    ) : (
                <div className="singlecocktail">
                    <Carousel>
                        <Carousel.Item>
                            <Link to='/'> <img
                                className="d-block w-100"
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrinkThumb}
                            /> </Link>
                            <Carousel.Caption>
                                <h3>{cocktail.strDrink}</h3>
                                <p style={{ color: "#ff0000", fontWeight: "bold" }}>{cocktail.strCategory}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to='/'> <img
                                className="d-block w-100"
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrinkThumb}
                            /> </Link>
                            <Carousel.Caption>
                                <Link to='/'> <div>
                                    <h3>Ingredients</h3>
                                    {ingredients.map((ingredient,i)=> ingredient ? <p key={i}>{ingredient}</p> : null)}
                                    <span>_____________________</span>
                                    <h3>Glass</h3>
                                    <p>Serve: {cocktail.strGlass}</p>
                                </div></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to='/'> <img
                                className="d-block w-100"
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrinkThumb}
                            /> </Link>
                            <Carousel.Caption>
                                <Link to='/'> <div className='instructs'>
                                    <h3>Instructions</h3>
                                    <ol>
                                        {cocktail.strInstructions.split(".").map((el, i) => el ? <li key={i}>{el}</li> : null)}
                                    </ol>
                                </div></Link>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            )
};

export default SingleCocktail;


