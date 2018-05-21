import styled from 'styled-components';

import Box from './Box';

const MazeTable = styled(Box).attrs({ is: 'table' })`
  border-collapse: collapse;
  td {
    vertical-align: top;
    padding: 0;
  }
`;

export default MazeTable;
