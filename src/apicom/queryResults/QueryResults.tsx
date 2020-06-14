import React from 'react';
import styled from 'styled-components';

const QueryResultsContainer = styled.div`
  padding: var(--size-m);
  margin: var(--size-s) 0;
  font-family: var(--font-data);
  text-align: center;
`;

const QueryResults: React.FunctionComponent = () => {
  return (
    <QueryResultsContainer>
      <p>Query Results</p>
    </QueryResultsContainer>
  );
};

export default QueryResults;
