import React from 'react';
import './App.css';

const welcome = {
  greeting: "Hola",
  title: "React",
};

function getTitle(title){
  return title;
}

const list = [
  {
  name: "Mario",
  surname: "Ramirez",
  city: "Mexico City",
  age: 35,
  id: 1,
  url: "www.geomario.com",
  },
  {
  name: "Daniel",
  surname: "Lua",
  city: "Guadalajara",
  age: 40,
  id: 2,
  url: "www.interioreslua.com",
  },
];

// Root Component (Function Component)
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return(
    <div>
      <h1>
        My Hacker Stories
      </h1>
      <h1>
        Hello {getTitle("Java Function")}
      </h1>
      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
      <hr />
      <List/>
    </div>
  );
}

// Child Component (Function Component)
function List() {
  return(
    <div>
      {list.map(function(item){
        return(
          <div key={item.id}>
            <span>
              <a href={item.url}>
                {item.name}
              </a>
            </span>
            <span> {item.surname} </span>
            <span> {item.city} </span>
            <span> {item.age} </span>
          </div>);
        })}
      </div>
    );
  }
export default App;
