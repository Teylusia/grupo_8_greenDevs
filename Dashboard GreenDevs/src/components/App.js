import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

import {Link, Route, Routes, Router, Switch, } from 'react-router-dom'

import NotFound from './NotFound';
import ProductsInDb from './ProductsInDb';
import CategoriesInDb from './CategoriesInDb';
import UsersInDb from './UsersInDb';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
        <SideBar />
          <Routes>
          <Route exact path="/" element={<ContentWrapper/>}/>
          <Route exact path="/users" element={<UsersInDb/>}/>
          <Route exact path="/products" element={<ProductsInDb/>}/>
          <Route exact path="/categories" element={<CategoriesInDb/>}/>
          <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
