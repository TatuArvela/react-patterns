import React from 'react';
import styled from 'styled-components';

import EncomTheme from './EncomTheme';

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.bodyBg};
  box-sizing: border-box;
  color: ${(p) => p.theme.bodyColor};
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  height: 100vh;
  padding: 5em;
  width: 100vw;
`;

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.blue};
  border-radius: ${(p) => p.theme.borderRadius};
  border: 1px solid ${(p) => p.theme.borderColor};
  display: flex;
  padding: 1em;
  > * {
    flex-grow: 1;
  }
`;

const Well = styled.div`
  background-color: ${(p) => p.theme.colors.black};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 4em 3em;
`;

const Title = styled.h1`
  font-family: 'Righteous', sans-serif;
  font-size: 3em;
  text-align: center;
`;

const Encom: React.FunctionComponent = () => (
  <EncomTheme>
    <Wrapper>
      <Container>
        <Well>
          <Title>ENCOM</Title>
          <p>Query Form</p>
          <p>Settings Modal</p>
          <p>Query Results</p>
        </Well>
      </Container>
    </Wrapper>
  </EncomTheme>
);

export default Encom;
