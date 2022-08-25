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
import Recipes from './components/Recipes';
import RecipeCard from './components/RecipeCard';
import GroceryList from './components/GroceryList';
import persistedReducer from './reducers/rootReducer';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";



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
            <Route exact path="/Search" element={<Search/>}></Route>
            <Route exact path="/Recipes" element={<Recipes/>}></Route>
            <Route exact path="/RecipeCard" element={<RecipeCard/>}></Route>
            <Route exact path="/GroceryList" element={<GroceryList/>}></Route>
          </Routes>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
);
