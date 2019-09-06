import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
// Constructor not needed bc there is no binidng
// We just need state
  state = {
    players: []
}; //end state


  // Handlers 
  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
    .then(res => 
      {console.log('Here is our res.data from the api ',res.data)
      this.setState({ players: res.data })
    })
    .catch(err => {
      console.log(err)
    })
  } // end cDM

  render() {
  return (
    <div className="App">
      <h1>Hello From App</h1>
    </div>
  )};
}

export default App;
