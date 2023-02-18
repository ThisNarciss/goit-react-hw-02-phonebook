import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(34, 72, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 72, 195, 1) 0%,
    rgba(231, 253, 45, 1) 100%
  );
`;
export const ChildrenBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 350px;
`;
