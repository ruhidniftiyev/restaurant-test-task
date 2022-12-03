import React from 'react';
import Orders from '../components/Orders';

const Home = () => {
  return (
    <>
      <div className="content__top"></div>
      <h2 className="content__title"></h2>
      <div className="content__items">
        <Orders />
      </div>
    </>
  );
};

export default Home;
