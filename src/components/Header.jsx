import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="" />
          <div>
            <h1>RESTAURANT AZ</h1>
            <p>restorana nəzarətin ən asan yolu</p>
          </div>
              </div>
              {/* <nav className='header__nav'>
                  <ul className='header__nav-list'>
                      <li className="header__nav-item">Haqqinda</li>
                      <li className="header__nav-item">Sifarisler</li>
                      <li className="header__nav-item"></li>
                      <li className="header__nav-item">Kecid</li>
                      <li className="header__nav-item">Umumi</li>
                  </ul>
              </nav> */}
      </div>
    </div>
  );
};

export default Header;
