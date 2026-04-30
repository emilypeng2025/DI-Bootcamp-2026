import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="app">
      <h1>Vote Your Language!</h1>

      {languages.map((language, index) => (
        <div className="language-card" key={index}>
          <span>{language.votes}</span>
          <span>{language.name}</span>
          <button onClick={() => vote(index)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;