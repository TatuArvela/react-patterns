import React from 'react';
import styled from 'styled-components';

const QueryBuilderContainer = styled.div`
  border-radius: var(--size-m);
  background-color: var(--color-orange);
  padding: var(--size-m);
  margin: var(--size-s) 0;
`;

const QueryBuilder: React.FunctionComponent = () => {
  return (
    <QueryBuilderContainer>
      <label htmlFor="url">
        <span>URL</span>
        <input id="url" />
      </label>
    </QueryBuilderContainer>
  );
};

export default QueryBuilder;
