import React from 'react';
import ReactMarkdown from 'react-markdown';

const ThemeDemo = () => {
  const input = '# This is a header\n\nAnd this is a paragraph';
  {
    /* <ReactMarkdown source={input} /> */
  }

  return (
    <div className="content">
      <section className="container post">
        <article>
          <header>
            <div className="post-title">
              <h1 className="title">10 Page in Everyday</h1>
            </div>
            <div className="post-meta">
              <div className="date">
                <span className="posted-on">
                  <i className="fas fa-calendar" />
                  <time datetime="2018-10-15T00:00:00Z">October 15, 2018</time>
                </span>
                <span className="reading-time">
                  <i className="fas fa-clock" />
                  One minute read
                </span>
              </div>
            </div>
          </header>

          <div>
            <h2 id="style-demo">Style Demo</h2>

            <h1 id="h1-heading">h1 Heading</h1>

            <h2 id="h2-heading">h2 Heading</h2>

            <h3 id="h3-heading">h3 Heading</h3>

            <h4 id="h4-heading">h4 Heading</h4>

            <h5 id="h5-heading">h5 Heading</h5>

            <h6 id="h6-heading">h6 Heading</h6>

            <hr />

            <p>
              <strong>This is bold text</strong>
            </p>

            <p>
              <strong>This is bold text</strong>
            </p>

            <p>
              <em>This is italic text</em>
            </p>

            <p>
              <em>This is italic text</em>
            </p>

            <p>
              <del>Deleted text</del>
            </p>

            <table>
              <thead>
                <tr>
                  <th align="center">Heading</th>
                  <th align="center">Another heading</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td align="center">text</td>
                  <td align="center">text</td>
                </tr>

                <tr>
                  <td align="center">text</td>
                  <td align="center">text</td>
                </tr>

                <tr>
                  <td align="center">text</td>
                  <td align="center">text</td>
                </tr>
              </tbody>
            </table>

            <blockquote>
              <p>Block quotes are written like so.</p>

              <p>They can span multiple paragraphs, if you like.</p>
            </blockquote>

            <p>
              Some text, and some <code>code</code> and then a nice plain{' '}
              <a
                href="https://github.com/davidhampgonsalves/davidhampgonsalves.com-hugo"
                title="title text!"
              >
                link with title
              </a>
              .
            </p>

            <p>and then</p>

            <ul>
              <li>
                Create a list by starting a line with <code>+</code>,{' '}
                <code>-</code>, or <code>*</code>
              </li>
              <li>
                Sub-lists are made by indenting 2 spaces:
                <ul>
                  <li>Marker character change forces new list start:</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Very easy!</li>
            </ul>

            <p>vs.</p>

            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
            </ol>

            <h2 id="code">Code</h2>

            <p>
              Inline <code>code</code>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};
export default ThemeDemo;
