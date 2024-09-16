import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${RFValue(17)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding-right: ${RFValue(10)}px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
`;

export const ContainerTitle = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ShopCartContent = styled.View`
  display: flex;
  position: relative;
`;

export const OvalText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
`

export const OvalIcon = styled.View`
  display: flex;
  position: absolute;
  left: 12px;
  top: -5px;
  justify-content: center;
  align-items: center;
  width: 16px;
  flex-shrink: 0;
  height: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
