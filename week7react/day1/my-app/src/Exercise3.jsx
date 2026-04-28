import React from "react";
import "./Exercise.css";

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        {/* PART I + PART II */}
        <h1 style={style_header}>This is a Header</h1>

        <p className="para">This is a paragraph styled with CSS</p>

        <a href="https://react.dev" target="_blank">
          Visit React Website
        </a>

        <form>
          <label>
            Name:
            <input type="text" />
          </label>
        </form>

        <img
          src="https://via.placeholder.com/150"
          alt="example"
        />

        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;