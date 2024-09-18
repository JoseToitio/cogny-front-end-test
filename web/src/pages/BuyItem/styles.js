import styled from "styled-components";
import { ButtonAdd } from "../../components/CardBuyItem/styles";

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

export const ContainerError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vw;
  gap: 30px;
  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 18px;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  }
`

export const ButtonError = styled(ButtonAdd)`
  width: 20%;
  border-radius: 4px;
`