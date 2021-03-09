import React from 'react';
import './App.css';

const welcome = {
  greeting: "Welcome",
  title: "GeoLegalTech"
};

const title = "GeoLegalTech";

const list = [
  {
    title: 'Map',
    url: 'www.geolegaltech.com',
    authors: [
      "Mario Ramirez", "Frank Weiler"
    ],
    num_comments: 3,
    points: 4,
    objectID: 0
  }, {
    title: 'Redux',
    url: 'www.geomario.com',
    author: 'Mario Ramirez',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

const App = () => (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"/>

      <hr/>
      <List/>
    </div>
);

const List = () =>
  list.map(item => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
));

export default App;

/*
function getTitle (title){
  return title;
}

function App() {
  return (
    <div >
      <h1 >
      Hello {getTitle("GeoLegalTech")}
      </h1>
      <h1 >
      // {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id='search' type='text'/>
    </div >
  );
}


export default App;
*/
