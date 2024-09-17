import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 17;
  flex-direction: row;
  justify-content: space-around;

  a {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: first baseline;
  flex-direction: row;
  gap: 15px;
`;

export const ShopCartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  margin: 0;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

`

export const QuantityText = styled.span`
  display: flex;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 12px;
  opacity: 0.6;
`;