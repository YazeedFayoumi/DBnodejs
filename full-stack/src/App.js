import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';




// /// component 
// function fetchData    ()  {
//   const [name, getData] = useState([]);
//   useEffect(() => {
//     fetch('server.js/getData')
//       .then((res) => {
//         return res.json();
//       })
//       .then((name) => {
//         console.log(name);
//         setData(name);
//       });
//   }, []);}
function fetchData ()  {
  fetch('http://localhost:8003/getData')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
  }
      

      fetchData('https://server.js/getData')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));



function fetchPrice(){

}
function App() {
  return (
    <div>
     <p></p>
    </div>
  );
}

export default App;
