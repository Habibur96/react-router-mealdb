import React from 'react';
import './Food.css'
const Food = ({ props }) => {

    const { strArea, strInstructions, strMealThumb } = props.meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>Name: {strArea}</h2>
            <p>{strInstructions.slice(0, 30)}</p>
        </div>
    );
};

export default Food;