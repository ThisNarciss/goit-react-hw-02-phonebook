import styled from 'styled-components';

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.label``;

export const FilterInput = styled.input`
  padding: 5px 15px;
  outline: none;
  border: 2px solid grey;
  border-radius: 5px;
  transition: border 250ms linear;
  :hover,
  :focus {
    border: 2px solid green;
  }
`;
