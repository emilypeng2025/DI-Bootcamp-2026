import { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(event.target.value);
    }
  };

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <h1>Exercise 2</h1>

      <button onClick={clickMe}>Click me</button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Type something and press Enter"
        onKeyDown={handleKeyDown}
      />

      <br />
      <br />

      <button onClick={toggle}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Events;