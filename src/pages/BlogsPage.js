import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default class BlogsPage extends React.Component {
  render() {
    return (
      <main class="wrapper">
        <Navigation />

        <div class="content">
          <section class="container list">
            <h1 class="title">Posts</h1>

            <ul>
              <li>
                <span>December 14, 2018</span>
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    '/posts/installing-bitpay-bitcore-on-ubuntu'
                  }
                >
                  Installing BitPay Bitcore on Ubuntu
                </Link>
              </li>
              <li>
                <span>October 15, 2018</span>
                <Link
                  to={
                    process.env.PUBLIC_URL +
                    '/posts/reading-10-page-in-everyday'
                  }
                >
                  Reading 10 Page in Everyday
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <Footer />
      </main>
    );
  }
}
