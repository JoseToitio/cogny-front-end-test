import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
  padding: 15px 35px;
  margin: 0 20% 0 20%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const FinishContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 39px 0 30px 0;
`
export const FinishButton = styled.button`
  width: 163px;
  height: 42px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 0;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:active {
    transform: scale(0.96);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr;
  align-items: initial;
  padding: 15px 0 30px 0;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 16px;
`;

export const HeaderItem = styled.div`
  text-align: initial;
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const TotalText = styled.p`
  color: #999;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
`;

export const Price = styled.p`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 30px;
`;

export const Line = styled.hr`
  width: 100%;
  height: 0px;
  opacity: 0.2;
  background-color: ${({ theme }) => theme.COLORS.CARD_SUMMARY};
`

export const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  height: 400px;
`
export const EmptyCart = styled.p`
  color: #999;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  margin-top: 20px;`

