import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const AppElement = styled.div`
  text-align: center;
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 20s linear;
  }
`

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Link = styled.a`
  color: #61dafb;
`

function App() {
  return (
    <AppElement>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </AppElement>
  );
}

export default App;
