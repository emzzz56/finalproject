import React from 'react';
import NAV from './Nav';
import HEADER from './Header';
import MAIN from './Main';
import FOOTER from './Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NAV />
      <HEADER />
      <MAIN />
      <FOOTER />
    </React.Fragment>
  );
}

export default App;
