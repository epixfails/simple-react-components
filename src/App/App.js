import React from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdowns/Dropdown';
import DropdownSearch from '../Dropdowns/DropdownSearch';

const AppWrap = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const App = () => (
  <AppWrap>
    <Dropdown>
      {['option1', 'option2', 'option3']}
    </Dropdown>
    <DropdownSearch>
      {['animal', 'planet', 'is a', 'nice', 'channel']}
    </DropdownSearch>

  </AppWrap>
);

export default App;
