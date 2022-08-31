import React from 'react'
import {useSelector } from 'react-redux'
import Groceries from './Groceries';
import MyRecipes from './MyRecipes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

const MyList = () => {

  const myRecipes = useSelector(state => state.shoppingR.shoppingList);



  return (
    <div>
      <div className='myCard-container'>
        <Splide options={{
          perPage:4,
          gap: '5rem'
        }}>
        {myRecipes.length > 0
          ? myRecipes?.map((recipe, index) => {
            return (
              <SplideSlide>
                <MyRecipes key={index} recipe={recipe} />
              </SplideSlide>
            );
          })
            : "No current recipes. Add some from the Search Recipes tab!"}
          </Splide>
      </div>
      <Groceries />
    </div>
  );
}

export default MyList