import styled from 'styled-components';

export const SectionBox = styled.section`
  background: rgb(63, 70, 251);
  background: radial-gradient(
    circle,
    rgba(63, 70, 251, 1) 56%,
    rgba(252, 219, 70, 1) 100%
  );

  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
`;

export const Title = styled.h1`
  font-size: 26px;
  line-height: 1.15;
`;
