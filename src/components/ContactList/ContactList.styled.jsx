import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p``;

export const ButtonDel = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  transition: color 250ms linear, background-color 250ms linear;
  :hover,
  :focus {
    color: white;
    background-color: green;
  }
`;
