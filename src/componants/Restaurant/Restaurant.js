import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Food from '../Food/Food';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2>Search Food: </h2>
            <input onChange={searchFood} type="text" name="" id="" placeholder='Plz Search' />

            <h3>Result Found : {meals.length}</h3>
            <div className='meals-container '>
                {
                    meals.map(meal => <Food
                        key={meal.idMeal}
                        meal={meal}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Restaurant;