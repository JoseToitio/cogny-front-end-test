import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin: 0 20% 0 20%;
  padding-bottom: 30px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
