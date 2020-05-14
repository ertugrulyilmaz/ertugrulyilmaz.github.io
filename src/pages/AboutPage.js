import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default class AboutPage extends React.Component {
  render() {
    return (
      <main class="wrapper">
        <Navigation />

        <div class="content">
          <section class="container page">
            <article>
              <header>
                <h1>About Me</h1>
              </header>

              <p>I have more than 10 years of cumulative experience in the IT sector.</p>
              <p>My career includes management of real-time recommendation engine development teams and implementation of these projects, which were published as case studies on AWS and Google Cloud Platforms.</p>
              <p>I have been the leading technology officer at Bundle Network since its inception and is responsible for building a scalable, reliable and resilient aggregator platform.</p>

              <p>I prefer to use these technologies when i develop some project;</p>
              
              <ul>
                <li>
                  <a href="#">Spring Boot</a>
                </li>
                <li>
                  <a href="#">NodeJS</a>
                </li>
                <li>
                  <a href="#">ReactJS</a>
                </li>
                <li>
                  <a href="#">Docker</a>
                </li>
                <li>
                  <a href="#">Kinesis</a>
                </li>
              </ul>                 
            </article>
          </section>
        </div>

        <Footer />
      </main>
    );
  }
}
