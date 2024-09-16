import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.WHITE};
  border-width: 1px;
  border-radius: 5px;
  overflow: hidden;
  padding: ${RFValue(20)}px;
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(20)}px;
`;

export const ContainerImage = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.Image`
  height: ${RFValue(200)}px;
  width: ${RFValue(217)}px;
  margin-bottom: ${RFValue(12)}px;
  flex-shrink: 0;
`;
export const ProductName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(10)}px;
`;
export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: ${RFValue(21)}px;
  margin-bottom: ${RFValue(10)}px;
`;
export const ButtonAdd = styled.TouchableOpacity`
  flex: 1;
  height: ${RFValue(42)}px;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(10)}px;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
export const OpacityQuantity = styled.View`
  width: ${RFValue(83)}px;
  height: ${RFValue(42)}px;
  background-color: ${({ theme }) => theme.COLORS.OPACITY_BUTTON};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  align-items: center;
`;

export const QuantityInput = styled.TextInput`
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  text-align: center;
`;
