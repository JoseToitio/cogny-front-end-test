import { SafeAreaView, Text } from "react-native";
import { Container, ContainerTitle, OvalIcon, ShopCartContent, Title, OvalText } from "./styles";
import SafeViewAndroid from "../SafeViewAndroid";
import ShoesIcon from "../../assets/images/Shoes.svg";
import PadlockIcon from "../../assets/images/PadlockIcon.svg";

export function Header() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Container>
        <ContainerTitle>
          <Title>COGNYSHOES</Title>
          <ShoesIcon />
        </ContainerTitle>
        <ShopCartContent>
          <PadlockIcon />
          <OvalIcon>
            <OvalText>5</OvalText>
          </OvalIcon>
        </ShopCartContent>
      </Container>
    </SafeAreaView>
  );
}
