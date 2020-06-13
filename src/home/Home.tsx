import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './logo.svg';

const AppElement = styled.div`
  text-align: center;
`;

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
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Divider = styled.hr`
  width: 60vmin;
  margin: 1em 0 0.7em 0;
`;

const Anchor = styled.a`
  color: #61dafb;
`;

const Home: React.FunctionComponent = () => (
  <AppElement>
    <Header>
      <Logo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Anchor
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Anchor>
      <Divider />
      <Link to="/apicom" component={Anchor}>
        APICOM
      </Link>
    </Header>
  </AppElement>
);

export default Home;
