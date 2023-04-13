import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div
        className="banner-container"
        style={{
          backgroundImage: `url('Assets/mvp-banner.png')`,
        }}
      >
        <h2 className="banner-text">
          Kod acıktırır
          <br />
          Pizza doyurur
        </h2>
        <Link to="/pizza" style={{ textDecoration: 'none' }}>
          <button
            id="order-pizza"
            className="order-pizza"
            onMouseOver={(e) => (e.target.style.backgroundColor = '#FFC107')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#F7D154')}
          >
            Acıktım
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
