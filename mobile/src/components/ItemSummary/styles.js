import styled from "styled-components/native";

export const ContainerDescription = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
`;
export const ImageSummary = styled.Image`
  width: 80px;
  padding-right: 10px;
  height: 80px;
  flex-shrink: 0;
`;

export const TextInput = styled.TextInput`
  width: 51px;
  height: 26px;
  border: 1px solid  ${({ theme }) => theme.COLORS.BORDER_INPUT};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 14px;
  color: #666;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 16px;
`;

export const ContainerPrice = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.CARD_SUMMARY};
  border-radius: 4px;
  padding: 7px 35px;
  justify-content: space-between;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 14px;
  line-height: 18px;
  width: 50%;
  padding-bottom: 5px;
`;
