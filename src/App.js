import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import the new smart component from containers
import PokeList from './containers/PokeListContainer';
// Testing the dummy component
// import PokeList from './components/PokeList';
import VisibilityButton from './containers/VisibilityButtonContainer';

function App() {
  return (
    <div className="App">
      <h1>PokeThings</h1>
      <PokeList />
      {/* <PokeList /> */}
      <VisibilityButton />
    </div>
  );
}

export default App;
