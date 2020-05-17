import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <section className="container">
      <Link className="navigation-title" to={process.env.PUBLIC_URL + '/'}>
        Ertugrul Yilmaz
      </Link>
      <input type="checkbox" id="menu-toggle" />
      <label className="menu-button float-right" htmlFor="menu-toggle">
        <i className="fas fa-bars" />
      </label>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link
            className="navigation-link"
            to={process.env.PUBLIC_URL + '/about'}
          >
            About
          </Link>
        </li>

        <li className="navigation-item">
          <Link
            className="navigation-link"
            to={process.env.PUBLIC_URL + '/blog'}
          >
            Blog
          </Link>
        </li>
      </ul>
    </section>
  </nav>
);

export default Navigation;
