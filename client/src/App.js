import React from 'react';
import './App.css';
import axios from 'axios';
import Players from './Components/Players';

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

  // Render/Return
render() {
  return (
    <div className="App">
    {this.state.players.map(player => {
      return (
        <Players 
        key={player.id}
        pName={player.name}
        pCountry={player.country}
        pSearches={player.searches}
        pId={player.id}
        />
      )
    })}
    </div>
  )
}
}

export default App;
