import React from 'react';
import './App.css';

// Constant Component
const welcome = {
  greeting: "Hola",
  title: "React",
};

// Java Function
function getTitle(title){
  return title;
}

// Root Component (Function Component)
function App() {
  const handleSearch = event => {
    console.log(event.target.value);
  }
  const stories = [
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
  return(
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <h2>
        My Hacker Stories
      </h2>
      <Search onSearch={handleSearch}/>
      <h2>
        Hello {getTitle("Java Function")}
      </h2>
      <hr />
      <List list={stories}/>
    </div>
  );
}

// Child Component (Function Component)
function List(props) {
  return(
    <div>
      {props.list.map(function(item){
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


function Search(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  } ;
  return(
    <div>
      <label htmlFor="search">
        Search:
      </label>
      <input id="search" type="text" onChange={handleChange}/>
      <p>
        Searching for: <strong>{searchTerm}</strong>
    </p>
    </div>
  );
}
export default App;
