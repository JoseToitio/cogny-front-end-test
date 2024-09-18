import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.WHITE};
  border-width: 1px;
  border-radius: 4px;
  overflow: hidden;
  padding: 20px;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  height: 260px;
  width: 260px;
  margin-bottom: 12px;
  flex-shrink: 0;
  object-fit: contain;
`;
export const ProductName = styled.p`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.FONTS.ITEM_TITLE};
`;
export const ProductPrice = styled.p`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 21px;
  margin-bottom: 10px;
`;
export const ButtonAdd = styled.button`
  height: 42px;
  width: 70%;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 10px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  height: 100%;
`;

export const QuantityInput = styled.input`
  padding: 10px;
  width: 25%;
  height: 22px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 14px;
  border: 0;
  background-color: ${({ theme }) => theme.COLORS.OPACITY_BUTTON};
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
