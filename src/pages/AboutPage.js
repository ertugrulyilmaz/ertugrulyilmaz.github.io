import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default class AboutPage extends React.Component {
  render() {
    return (
      <main className="wrapper">
        <Navigation />

        <div className="content">
          <section className="container page">
            <article>
              <header>
                <h1>About Me</h1>
              </header>

              <p>I have more than 14 years of cumulative experience in the IT sector.</p>
              <p>
                My career includes management of real-time recommendation engine development teams and implementation of
                these projects, which were published as case studies on AWS and Google Cloud Platforms.
              </p>
              <p>
                I have been the leading technology officer at Bundle Network since its inception and is responsible for
                building a scalable, reliable and resilient aggregator platform.
              </p>

              <p>I prefer to use these technologies when i develop some project;</p>

              <ul>
                <li>
                  <a href="https://spring.io/projects/spring-boot">Spring Boot</a>
                </li>
                <li>
                  <a href="https://www.scala-lang.org">Scala</a>
                </li>
                <li>
                  <a href="https://nodejs.org/en/">NodeJS</a>
                </li>
                <li>
                  <a href="https://reactjs.org">ReactJS</a>
                </li>
                <li>
                  <a href="https://www.docker.com">Docker</a>
                </li>
                <li>
                  <a href="https://www.postgresql.org">PostgreSQL</a>
                </li>
              </ul>

              <p>Certificates</p>
              <ul className="certificates">
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/95ac3d3422c94e019a1c40ff382366ea">
                    Lightbend Akka for Scala, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://www.youracclaim.com/earner/earned/badge/d063621d-d5e0-4334-acdb-84a6f4414039">
                    Java Language Lambdas, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://www.youracclaim.com/badges/2384eb39-2b5b-427d-a7b8-0066b9f6c283/public_url">
                    Java Language Futures, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/bfc1b5aef2f447c89adfc6b8f72b5739">
                    Building Scalable Systems, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/bfc1b5aef2f447c89adfc6b8f72b5739">
                    CQRS &amp; Event Sourcing, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/c8afbaef8f2743dcad5ee1720b098f13">
                    Distributed Messaging Patterns, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/e2a2d210536b4097bd8289b58f33bb47">
                    Domain Driven Design, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/c8afbaef8f2743dcad5ee1720b098f13">
                    Distributed Messaging, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/1d4e635bb1744816b30fc205b989027b">
                    Reactive Architecture, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/lightbend.png" width="24" height="24" alt="Lightbend" />
                  <a href="https://academy.lightbend.com/certificates/cb13965e7fd44c0ba6060b6f65d1e515">
                    Reactive Microservices, Lightbend, Inc.
                  </a>
                </li>
                <li>
                  <img src="/img/logo/udemy.jpeg" width="24" height="24" alt="Udemy" />
                  <a href="https://www.udemy.com/certificate/UC-VZ10G99X/">Ansible Essentials, Udemy</a>
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
