import React, { useState } from 'react';
import styled from 'styled-components';

import ApicomTheme from './ApicomTheme';
import QueryResults from './queryResults/QueryResults';
import Settings from './settings/Settings';
import Button from './shared/Button';
import Input from './shared/Input';

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

const Title = styled.h1`
  font-family: var(--font-title);
  color: var(--color-blue);
  font-size: calc(var(--size-xxl) * 2);
  line-height: calc(var(--size-xxl) * 2);
  margin: 0;
  text-align: right;
  user-select: none;
  text-transform: uppercase;
`;

const Apicom: React.FunctionComponent = () => {
  const [url, setUrl] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [queryResults, setQueryResults] = useState<unknown[]>();
  const executeQuery = () =>
    fetch(url)
      .then((response) => response.json())
      .then((data) => (Array.isArray(data) ? data : [data]))
      .then((array) => setQueryResults(array));
  return (
    <ApicomTheme>
      <Wrapper>
        <OuterBorder>
          <InnerBorder>
            <ScrollArea>
              <Input
                color="var(--color-yellow)"
                labelText="URL"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Settings
                showSettings={showSettings}
                setShowSettings={setShowSettings}
              />
              <Button color="var(--color-red)" onClick={() => executeQuery()}>
                View data
              </Button>
              {queryResults && <QueryResults />}
            </ScrollArea>
            <Title>Apicom</Title>
          </InnerBorder>
        </OuterBorder>
      </Wrapper>
    </ApicomTheme>
  );
};

export default Apicom;
