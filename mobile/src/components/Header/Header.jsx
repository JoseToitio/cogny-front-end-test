import { SafeAreaView, Text } from "react-native";
import { Container, ContainerTitle, OvalIcon, ShopCartContent, Title, OvalText } from "./styles";
import SafeViewAndroid from "../SafeViewAndroid";
import ShoesIcon from "../../assets/images/Shoes.svg";
import PadlockIcon from "../../assets/images/PadlockIcon.svg";
import { useSelector } from 'react-redux';

export function Header() {
  const count = useSelector((state) => state.cart.totalItems);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Container>
        <ContainerTitle>
          <Title>COGNYSHOES</Title>
          <ShoesIcon />
        </ContainerTitle>
        <ShopCartContent>
          <PadlockIcon />
          {count > 0 && (
            <OvalIcon>
            <OvalText>{count}</OvalText>
          </OvalIcon>
          )}
        </ShopCartContent>
      </Container>
    </SafeAreaView>
  );
}

