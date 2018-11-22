import styled from 'styled-components';

import Box from './Box';

const MazeTable = styled(Box).attrs({ is: 'table' })`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  td {
    vertical-align: top;
    padding: 0;
  }
`;

export default MazeTable;
