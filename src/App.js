import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      items: []
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(el => {
      return el.json()
    })
    .then(e=>{
      this.setState(
        {items:e}
      )
    })
  }

  reverseItems = () =>{
    this.setState({
      items:this.state.items.reverse()
    })
}

  render(){
    return (
      <>
      <div className="App">
        {this.state.items.map(el => {
          return (
            <div key={el.id}>
              <p>{'Name: '  + el.name}</p> 
              <p>{'Email: ' + el.email}</p> 
              <p>{'Phone: ' + el.phone}</p> 
            </div>
          )
        })}
      </div>
       <button className="button" onClick={this.reverseItems}>Click to Reverse</button>
       </>
    );
  }
  
}

export default App;
