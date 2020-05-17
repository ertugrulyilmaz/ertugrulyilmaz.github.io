import React, { lazy } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import posts from "../components/Posts";

const BASE_URL = process.env.PUBLIC_URL;

export default class BlogsPage extends React.Component {
  listItem = ({ date, title, url }) => (
    <li>
      <span>{date}</span>
      <Link to={BASE_URL + url}>{title}</Link>
    </li>
  );

  render() {
    return (
      <main className="wrapper">
        <Navigation />

        <div className="content">
          <section className="container list">
            <h1 className="title">Posts</h1>

            <ul>{posts.map(this.listItem)}</ul>
          </section>
        </div>

        <Footer />
      </main>
    );
  }
}
