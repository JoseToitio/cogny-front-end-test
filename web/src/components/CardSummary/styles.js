import styled from "styled-components";

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemContent = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr;
  align-items: center;
  justify-content: center;
`
export const ImageSummary = styled.img`
  width: 80px;
  padding-right: 10px;
  height: 80px;
  flex-shrink: 0;
  object-fit: contain;
`;

export const TextInput = styled.input`
  width: 51px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER_INPUT};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 14px;
  color: #666;

`;

export const Price = styled.p`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BOLD};
  font-size: 16px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 14px;
  line-height: 18px;
  width: 50%;
  padding-bottom: 5px;
`;
