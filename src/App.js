import './App.css';
import React, { useState, useEffect } from 'react'
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getCocktails} from './JS/actions'
import CocktailDetails from './Pages/CocktailDetails';
import NavbarPage from "./Components/Navbar";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
const cocktails = useSelector(state => state.cocktailReducer.cocktails)
const loadCocktails = useSelector(state => state.cocktailReducer.loading)

console.log(cocktails)
  const searchcocktail = (name) => {
    setSearch(name);
  }
  
  useEffect(() => {
    dispatch(getCocktails(search));
  }, [search]);
  return (

    <div className="App">
      <NavbarPage />
      <Switch>
        <Route exact path="/" render={() =>
          <Home cocktails={cocktails} loadCocktails={loadCocktails} searchcocktail={searchcocktail} />
        } />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/cocktails/:iddrink" component={CocktailDetails} />
        <Route path="/*" component={Error} />
        
      </Switch>
      <div >
      <Footer />
      </div>
    </div>
  );
}

export default App;
