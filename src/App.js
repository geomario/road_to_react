import React from 'react';
import './App.css';

const welcome = {
  greeting: "Hola",
  title: "React",
};


function App() {

  return(
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}

export default App;
