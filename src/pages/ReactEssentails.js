import React from "react";
import "./page.css";

const ReactEssentails = () => {
  return (
    <div className="container">
      <h1>React Essentials</h1>
      <ol>
        <li>
          <b>Components -</b>
          Components serve as the fundamental building blocks of React
          applications. Think of them as individual pieces of the user interface
          (UI).
        </li>
        <li>
          <b>State - </b>
          It represents the data that the component manages. It is related to a
          specific component. Updation in the state makes the component
          re-render. When re-rendering happens, the updated state becomes
          visible on the screen
        </li>
        <li>
          <b>Props - </b>
          Props is the data that gets passed from one component to another. The
          sender of the data(props) is a parent component, while the recipient
          of it, is a child component
        </li>
        <li>
          <b>Virtual DOM - </b>
          React uses a virtual representation of the DOM to optimize rendering
          by updating only the parts of the actual DOM that have changed,
          enhancing performance.
        </li>
        <li>
          <b>Component Lifecycle -</b>
          Components go through various phases in their lifecycle, including
          mounting, updating, and unmounting, allowing developers to perform
          actions at specific points in the component's existence.
        </li>
      </ol>
    </div>
  );
};

export default ReactEssentails;
