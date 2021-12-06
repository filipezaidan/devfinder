import React from 'react';
import * as C from './App.styles'
import DevInformation from './components/DevInformation/DevInformation';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <C.Wrapper>
      <C.Container>
        <Header/>
        <Search/>
        <DevInformation/>
      </C.Container>
    </C.Wrapper>
  );
}

export default App;
