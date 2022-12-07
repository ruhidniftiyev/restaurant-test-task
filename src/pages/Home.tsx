import React from 'react';
import Orders from '../components/Orders';

const Home :React.FC = () => {
  return (
    <>
      <div className="content__items">
        <Orders />
      </div>
    </>
  );
};

export default Home;
