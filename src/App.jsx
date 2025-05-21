import React from 'react';
import Header from '~/components/Header';
import { routerPage } from '~/Router/index';
import './App.scss';
import { Routes, Route } from 'react-router';
const App = () => {
  return (
    <div className="app">
      <Header></Header>

      <Routes>
        {routerPage.map((item, index) => {
          const Page = item.element;
          return (
            <Route path={item.path} key={index} element={<Page />}></Route>
          );
        })}
      </Routes>
    </div>
  );
};
//https://linear.app/homepage
export default App;
