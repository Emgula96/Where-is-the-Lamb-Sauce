# WHERE IS THE LAMB SAUCE!?
This app was built using React/REDUX assist users with easy meal prep! Search through the library of thousands of recipes to find one that suites your needs. The user can search via cuisine(American,Korean, Mexican), course, or by a keyword. Users can also save recipes they like and add the required ingredients to a grocery list. Recipes and groceries can be deleted as needed.
  

## Usage:

This website is controlled by a single router. Using async fetches the API is called on by the user and the response is rendered to the page. All information on the website is stored in both local and global state and is called on using custom and built in hooks. UI was build from react-bootstrap and splide.



## To run:
<li>Copy this repo.</li>
<li>cd into the self-titled folder.</li>
<li>npm i</li>
<li>Double check all the packages below are in your package.json</li>
<li>npm start</li>
<li>Sign up for spoonacularAPI</li>
<li>Copy api key to .env file name it REACT_APP_API_KEY</li>

### Languages:
<ul>
    <li>REACT/REDUX(Library)</li>
    <li>JavaScript</li>
    <li>JSXML</li>
    <li>CSS</li>
</ul>

### Packages (for Node.js)
<ul>
    <li>react</li>
    <li>redux</li>
    <li>react-redux</li>
    <li>react-router</li>
    <li>redux-logger</li>
    <li>redux-persist</li>
    <li>react-router-dom</li>
    <li>react-dom</li>
    <li>bootstrap</li>
    <li>react-bootstrap</li>
    <li>react-uuid</li>
    <li>Splide</li>
</ul>

### APIs 
<ul>
    <li>Spoonacular API - https://spoonacular.com/food-api</li>
</ul>

## Goals

### Base Goals
<ul>
    <li>Gain familiarity with Redux</li>
    <li>Grow in familiarity with React</li>
    <li>Use bootstrap and react-bootstrap for layout and UI</li>
    <li>Users can search recipes, refining searches by keyword, cusine, and type of dish</li>
    <li>Users can move recipes to a saved list</li>
    <li>Users are given an organized grocery list</li>
</ul>

### Stretch Goals

<ul>
    <li>Have a more organized Grocery cart and combine similar items (1 cup of flour + 2 cups of flour).</li>
    <li>Manage a way to have less api calls, try having more initial calls and keeping API in state.</li>
    <li>Have a user account where they can save favorited recipes.</li>
</ul>


## Challenges and Solutions

#### Project Planning:
Understanding the layout of this project was important. Encouraged by my instructor and TA I drew out the layout of my website on a piece of paper so I could better understand the flow. This made passing props easier anytime I needed to do so. It took a little longer to get started but I'm glad I took the extra time.
 

#### Local vs Global state:
During this project it was required to use both local and global state hooks. One example of this is when taking in the inputs from the user on the search page. I was able to use local state to set the value of the input fields but set the response of the API to global. This was to allow the user multiple searches without storing unessacary data.

#### API issues:
I was amazed at how expansive spoonacularAPI's is. It was not hard to find all of the data I would need for this project. However some of the ways they store data is inconssistent. This can be seen anytime a recipe has multiple components thus requiring multiple sets of instructions. This made it difficult to write functions to render out the instructions for each recipe.


## Code Snippets
```

  const addAllToShopping = async (e) => {
    const URL = `https://api.spoonacular.com/recipes/${recipe?.id}/information?apiKey=${APIkey}`;
    try {
      const response = await fetch(URL);
      const results = await response.json();
      // console.log(results)
      addToMyRecipe(dispatch, results)
          for (let i of results.extendedIngredients) {
            ingredientList.push({
              aisle: i.aisle,
              amount: i.amount,
              unit: i.unit,
              name: i.name,
              id: recipe.id,
              uuid: uuid()
            });
            addIngredientstoList(dispatch, ingredientList);
          }
    } catch (error) {
      console.log(error);
      navigate("*")
    }
  };


  return (
    <div id="indv-Recipe-Container">
      <div className="container-top">
          <h1>{thisRecipe.title} </h1>
          <h2>Cook time: {thisRecipe.readyInMinutes} minutes</h2>
          <img id="indv-picture" src={thisRecipe.image} alt="" />
          <p className="summary">{removeTags(thisRecipe.summary)}</p>
        <Button className="add-recipe-btn"
          onClick={() => {
            handleClick();
          }}>
          Add to My Recipes
        </Button>
      </div>
      <div className="container-bottom">
        <ul>
          {thisRecipe.extendedIngredients?.map((ing, index) => {
            return (
              <li key={index}>
                {ing.amount} {ing.unit} {ing.name}
              </li>
            );
          })}
        </ul>
        <h3>INSTRUCTIONS</h3>
        <ol>
          {Array.isArray(instructions)
            ? instructions?.map((step, index) => {
                return <li key={index}>{step.step}</li>;
              })
            : "No instructions found. Good luck!"}
        </ol>
      </div>
    </div>
  );
};



const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_RECIPE":
        return {
          ...state,
          shoppingList: state.shoppingList.concat(action.payload),
        };
      case "DELETE_RECIPE":
        return {
          ...state,
          shoppingList: state.shoppingList.filter((i) => {
            return i.id !== action.payload.id;
          }),
        };
      default:
        return state;
    }
```