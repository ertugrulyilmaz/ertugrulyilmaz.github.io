import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default class HomePage extends React.Component {
  render() {
    return (
      <main className='wrapper'>
        <Navigation />

        <div className='content'>
          <section className='container centered'>
            <div className='about'>
              <div className='avatar'>
                <img src='/img/avatar.jpg' alt='avatar' />
              </div>
              <h1>Ertugrul Yilmaz</h1>
              <h2>Coder &amp; Entrepreneur &amp; Dad</h2>
              <ul>
                <li>
                  <a href='https://github.com/ertugrulyilmaz/'>
                    <i className='fab fa-github' />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/yilmazertugrul/'>
                    <i className='fab fa-linkedin' />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    );
  }
}
