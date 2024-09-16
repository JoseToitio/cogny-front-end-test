import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 4px;
  margin: 20px;
  padding: 15px;
`;

export const FinishButton = styled.TouchableOpacity`
  width: 315px;
  height: 42px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 30px;
`

export const TotalText = styled.Text`
  color: #999;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
`
