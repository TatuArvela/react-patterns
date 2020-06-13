import React, { useState } from 'react';
import styled from 'styled-components';

import ApicomTheme from './ApicomTheme';
import QueryBuilder from './queryBuilder/QueryBuilder';
import QueryResults from './queryResults/QueryResults';
import Settings from './settings/Settings';

const Wrapper = styled.div`
  background: var(--color-black)
    linear-gradient(
      170deg,
      rgba(30, 30, 30, 0.1) 0%,
      rgba(200, 200, 200, 0.1) 49.75%,
      rgba(0, 0, 0, 0) 50.25%
    );
  box-sizing: border-box;
  color: var(--color-white);
  display: flex;
  font-family: 'Roboto Mono', monospace;
  font-size: var(--size-m);
  height: 100vh;
  padding: var(--size-xl);
  width: 100vw;
`;

const OuterBorder = styled.div`
  border: var(--size-m) solid var(--color-blue);
  border-radius: var(--size-xl);
  display: flex;
  flex-grow: 1;
  padding: var(--size-m);
`;

const InnerBorder = styled.div`
  border: var(--size-m) solid var(--color-blue);
  border-radius: var(--size-l);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: var(--size-m);
`;

const ScrollArea = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: var(--size-xl) var(--size-m);
  scrollbar-width: none;
`;

const FetchButton = styled.button`
  background-color: var(--color-red);
  border-radius: var(--size-m);
  border: none;
  color: var(--color-black);
  cursor: pointer;
  display: block;
  font-size: var(--size-m);
  font-weight: bold;
  margin: var(--size-s) 0;
  padding: var(--size-m);
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Righteous', sans-serif;
  color: var(--color-blue);
  font-size: calc(var(--size-xl) * 2);
  line-height: calc(var(--size-xl) * 2);
  margin: 0;
  text-align: right;
  user-select: none;
  text-transform: uppercase;
`;

const Apicom: React.FunctionComponent = () => {
  // const [data, setData] = useState([]);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <ApicomTheme>
      <Wrapper>
        <OuterBorder>
          <InnerBorder>
            <ScrollArea>
              <QueryBuilder />
              <Settings
                showSettings={showSettings}
                setShowSettings={setShowSettings}
              />
              <FetchButton>Fetch</FetchButton>
              <QueryResults />
            </ScrollArea>
            <Title>Apicom</Title>
          </InnerBorder>
        </OuterBorder>
      </Wrapper>
    </ApicomTheme>
  );
};

export default Apicom;
