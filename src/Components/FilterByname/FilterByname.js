import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './FilterByName.css'

function FilterByname ({searchcocktail}) {
    return (
      <div className="w-1/2 sm:auto md:auto lg:auto shadow-2xl h-screen flex flex-col items-center search" >
        <InputGroup >
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Check out our cocktails</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search for a cocktail..."
              aria-label="Title"
              aria-describedby="basic-addon1"
              onChange={ (e)=>searchcocktail(e.target.value)}
            />
        </InputGroup>
      </div>
    );
}

export default FilterByname;