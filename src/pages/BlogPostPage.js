import React, { lazy } from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CodeBlock from '../components/CodeBlock';

const regex = RegExp('^[a-z0-9]+(?:-[a-z0-9]+)*$');

export default class BlogPostPage2 extends React.Component {
  constructor() {
    super();

    this.state = { markdown: '' };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    const slug = params.slug;

    if (regex.test(slug)) {
      const readmePath = require(`../markdowns/${slug}.md`);

      fetch(readmePath)
        .then(response => response.text())
        .then(text => {
          this.setState({ markdown: text });
        });
    }
  }

  render() {
    const { markdown } = this.state;

    // const Content = lazy(() => import(`../posts/${slug}`));

    return (
      <main className="wrapper">
        <Navigation />

        <div className="content">
          <section className="container post">
            <ReactMarkdown source={markdown} renderers={{ code: CodeBlock }}></ReactMarkdown>
          </section>
        </div>

        <Footer />
      </main>
    );
  }
}
