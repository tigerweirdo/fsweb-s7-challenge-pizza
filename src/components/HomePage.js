import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Anasayfa</h1>
      <Link to="/pizza">
        <button id="order-pizza">Sipariş Ver</button>
      </Link>
    </div>
  );
}

export default HomePage;
