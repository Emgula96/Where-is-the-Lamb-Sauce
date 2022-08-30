import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from "redux-persist/es/persistStore"
import Search from './components/Search';
import RecipeCard from './components/RecipeCard';
import persistedReducer from './reducers/rootReducer';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from './components/PageNotFound';
import IndividualRecipe from './components/IndividualRecipe';
import MyList from './components/MyList';



const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Home/>
          <Routes>
            <Route exact path="/" element={<App/>}></Route>
            <Route exact path="/search" element={<Search/>}></Route>
            <Route exact path="/individual-recipe" element={<IndividualRecipe/>}></Route>
            <Route exact path="/recipeCard" element={<RecipeCard/>}></Route>
          <Route exact path="/my-List" element={<MyList />}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
);
