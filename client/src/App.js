import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("/members")
    .then(response => response.json())
    .then(data => 
      {
        setData(data)
        console.log(data)
      }
    );
  }

  useEffect(() => {
    fetchData ();
  }, [data]);

  return Object.keys(data).length > 0 ? (
    <div className="App">
      <h1>Data returned</h1>
      {data.members.map((member, index) => (
        <p key={index}>{member}</p>
      ))}
    </div>
  ) : (
    <h1>data pending...</h1>
  );
  
}

export default App;

/* 
return (
    <div className="App">
      {(typeof data.members === 'undefined') ? (
        <h1>loading...</h1>
      ) : (
        data.members.map((member, index) => (
          <p key={index}>{member}</p>
        ))
      )}
    </div>
  );

   */
