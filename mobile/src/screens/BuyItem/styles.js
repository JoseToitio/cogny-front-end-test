import { RFValue } from "react-native-responsive-fontsize";
import { ButtonText } from "../../components/Card/styles";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Loading = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerError = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  flex: 1;
  padding: 20px;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonError = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
  border-radius: 4px;
  padding: ${RFValue(10)}px;
  margin-top: 20px;
`;
export const ButtonTextError = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: ${RFValue(12)}px;
`;
