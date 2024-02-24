



import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component
{
  constructor (props){
    super(props)
    this.state={
      data : "",
      prices: ""
    }
  }

  info(){
    fetch('http://localhost:8003/getData')
        .then(response => response.json())
        .then(json => this.setState({data:json}))
        .catch(error => console.error(error));
  }
  
  products(){
    fetch('http://localhost:8003/getPrice')
        .then(response => response.json())
        .then(json => this.setState({prices:json}))
        .catch(error => console.error(error));
  }
  fetchData=()=>
  {
     this.info();
     this.products();
  }
  render()
  {
     return (
      <div>
        <button onClick={this.fetchData}>fetch </button>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.age}</p>
        <p>{this.state.data.field}</p>

        <div><p>{this.state.prices.price1}</p>
        <p>{this.state.prices.price2}</p>
        <p>{this.state.prices.price3}</p></div>
      </div>
     )
  }
 
} export default App;



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
// function fetchData ()  {
//   fetch('http://localhost:8003/getData')
//     .then(response => response.json())
//     .then(json => fetchData(json))
//     .catch(error => console.error(error));
//   }
      

      



// function fetchPrice(){

// }
// function App() {
//   return (
//     <div>
//      <p>yooo</p>
//     </div>
//   );
// }


