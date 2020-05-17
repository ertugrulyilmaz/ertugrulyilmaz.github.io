import React from 'react';

const ThemeDemo = () => {
  return (
    <div className="content">
      <section className="container post">
        <article>
          <header>
            <div className="post-title">
              <h1 className="title">Installing Bitpay Bitcore on Ubuntu</h1>
            </div>
            <div className="post-meta">
              <div className="date">
                <span className="posted-on">
                  <i className="fas fa-calendar" />
                  <time dateTime="2018-10-15T00:00:00Z">December 14, 2018</time>
                </span>
                <span className="reading-time">
                  <i className="fas fa-clock" />
                  One minute read
                </span>
              </div>
            </div>
          </header>

          <div>
            <blockquote>
              <p>
                I have installed Bitcore and Insight API on Ubuntu 18.04 LTS.
              </p>
            </blockquote>
            <h2 id="code">Installation Steps</h2>
            <p>
              <code>
                $ sudo apt-get update
                <br />
                $ sudo apt-get install libzmq3-dev build-essential
                <br />
                $ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
                <br />
                $ sudo apt-get install gcc g++ make
                <br />
                $ sudo apt-get install -y npm
                <br />
                $ sudo apt-get install -y nodejs
                <br />
                $ sudo npm install -g --unsafe-perm=true bitcore@latest
                <br />
                $ bitcore create mynode
                <br />
                $ cd mynode
                <br />
                $ bitcore install insight-api
                <br />
                $ bitcore start
                <br />
              </code>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};
export default ThemeDemo;
