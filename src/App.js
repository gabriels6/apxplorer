import React from 'react';
import {APISearch} from './pages';
import {Navbar,Logo} from './components';

function App() {
  return (
    <>
      <Navbar>
          <Logo/>
      </Navbar>
      <APISearch/>
    </>  
  );
}

export default App;
