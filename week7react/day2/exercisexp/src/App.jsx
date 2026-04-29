import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <h1>React Exercises</h1>

      <Car model={carinfo.model} />
      <Events />
      <Phone />
      <Color />
    </>
  );
}

export default App;
