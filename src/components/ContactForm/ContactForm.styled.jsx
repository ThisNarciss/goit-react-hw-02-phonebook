import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const FormInput = styled.input`
  padding: 5px 15px;

  border: none;
  border-radius: 5px;
`;

export const ButtonAdd = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #e7fd2d;
  color: #ffffff;
  transition: background-color 250ms linear;
  :hover,
  :focus {
    background-color: green;
  }
`;
