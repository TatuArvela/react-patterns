import React from 'react';
import styled from 'styled-components';

const QueryResultsContainer = styled.div`
  border: var(--size-s) solid var(--color-orange);
  border-radius: var(--size-m);
  padding: var(--size-m);
  margin: var(--size-s) 0;
`;

const QueryResults: React.FunctionComponent = () => {
  return (
    <QueryResultsContainer>
      <p>Query Results</p>
    </QueryResultsContainer>
  );
};

export default QueryResults;
