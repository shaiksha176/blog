import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Blog = ({ title, route, category }) => {
  return (
    <div className="blog">
      <p className="blog__title">
        <Link to={route}> {title}</Link>
      </p>
      <p className="separation">|</p>
      <p className="category">{category}</p>
    </div>
  );
};

const Blogs = () => {
  return (
    <>
      <Banner />
      <div className="blogs">
        <Blog
          title="How to deploy node app on EC2"
          category="Node js"
          route="/how-to-deploy-node-app-on-ec2"
        />
        <Blog
          title="React Essentials"
          category="React"
          route="/react-essentials"
        />
      </div>
    </>
  );
};

export default Blogs;
