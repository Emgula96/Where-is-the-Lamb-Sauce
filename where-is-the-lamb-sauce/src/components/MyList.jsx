import React from 'react'
import {useSelector } from 'react-redux'
import Groceries from './Groceries';
import MyRecipes from './MyRecipes';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import '../css/myList.css'
import { Container } from 'react-bootstrap';

const MyList = () => {

  const myRecipes = useSelector(state => state.shoppingR.shoppingList);



  return (
    <div className="my-recipe-tab">
      <br></br>
      <Container id='my-recipe-container'>
        <Splide
          options={{
            perPage: 3,
            gap: "5rem",
            autoWidth: true,
            autoHeight: true,
            rewind: true,
            focus: "center",
          }}>
          {myRecipes.length > 0
            ? myRecipes.map((recipe, index) => {
                return (
                  <SplideSlide key={index}>
                    <MyRecipes recipe={recipe} />
                  </SplideSlide>
                );
              })
            : "NO CURRENT RECIPES. ADD SOME FROM THE SEARCH RECIPES TAB!"}
        </Splide>
        <br></br>
        <br></br>
      <Groceries />
      </Container>
    </div>
  );
}

export default MyList