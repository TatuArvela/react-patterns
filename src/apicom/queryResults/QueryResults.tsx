import React from 'react';
import styled from 'styled-components';

const QueryResultsContainer = styled.div`
  border: var(--size-xxs) solid var(--color-white);
  font-family: var(--font-data);
  flex-grow: 1;
  margin: var(--size-m) 0;
  padding: var(--size-s);
  text-align: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const TableHead = styled.thead`
  > tr {
    background: var(--color-white);
    color: var(--color-black);
    > th {
      font-weight: bold;
      font-size: var(--size-m);
      padding: var(--size-s);
    }
  }
`;

const TableBody = styled.tbody`
  > tr > td {
    font-size: var(--size-m);
    padding: var(--size-s);
  }
  > tr:not(:first-child) > td {
    border-top: var(--size-xxs) solid var(--color-white);
  }
`;

type QueryResultsProps = {
  queryResults: Record<string, unknown>[];
};

const QueryResults: React.FunctionComponent<QueryResultsProps> = ({
  queryResults,
}) => {
  // TODO: Separate to utility
  const allRowKeys = queryResults.reduce<string[]>((acc, row) => {
    const rowKeys = Object.keys(row);
    return [...acc, ...rowKeys];
  }, []);
  const distinctKeys = [...new Set(allRowKeys)];

  // TODO: Separate to utility
  let n = 0;
  const getRowId = () => {
    n += 1;
    return n;
  };

  return (
    <QueryResultsContainer>
      <Table>
        <TableHead>
          <tr>
            {distinctKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {queryResults.map((row) => (
            <tr key={getRowId()}>
              {distinctKeys.map((key) => (
                <td key={key}>{key in row ? String(row[key]) : ''}</td>
              ))}
            </tr>
          ))}
        </TableBody>
      </Table>
    </QueryResultsContainer>
  );
};

export default QueryResults;
