import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Game from './pages/Game';
import {ThemeProvider} from 'styled-components'
import { Container, TopBar, Title } from './components/elements/';
import DarkModeToggle from './components/DarkmodeToggle/DarkmodeToggle'

const theme = {
  light:{
    mazeBorderColor:'#000',
    mazeBackgroundColor:'#f5e9f6'
  },
  dark:{
    mazeBorderColor:'#ece1bd',
    mazeBackgroundColor:'#000032'
  }
}
function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <BrowserRouter>
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <Container>
        <TopBar>
          <Title>Trustpilot Code Challenge</Title>
          <DarkModeToggle onChange={(isLight:boolean)=> setCurrentTheme(isLight ? 'light' : 'dark')}/>
        </TopBar>
        <Switch>
          <Route path="/newgame" component={Main} />
          <Route path="/game/:maze_id" component={Game} />
        </Switch>
        <Redirect from="/" to="/newgame" />
      </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
