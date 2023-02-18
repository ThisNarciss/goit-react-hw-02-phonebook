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
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  transition: transform 250ms linear;

  /* :hover,
  :focus {
    top: 0;
    left: -5px;
    transform: translateX(-100%);
  } */
`;

export const FormInput = styled.input`
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

export const ButtonAdd = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  transition: color 250ms linear, background-color 250ms linear;
  :hover,
  :focus {
    color: white;
    background-color: green;
  }
`;
