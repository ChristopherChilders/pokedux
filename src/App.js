import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import the new smart component from containers
import PokeList from './containers/PokeListContainer';
// Testing the dummy component
// import PokeList from './components/PokeList';

function App() {
  return (
    <div className="App">
      <h1>PokeThings</h1>
      <PokeList />
      {/* <PokeList /> */}
    </div>
  );
}

export default App;
