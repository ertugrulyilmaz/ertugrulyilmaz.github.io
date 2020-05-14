import React, { lazy } from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default class BlogPostPage extends React.Component {
  render() {
    const {
      match: { params }
    } = this.props;

    const slug = params.slug;

    const Content = lazy(() => import(`../posts/${slug}`));

    return (
      <main class="wrapper">
        <Navigation />

        <Content />

        <Footer />
      </main>
    );
  }
}
