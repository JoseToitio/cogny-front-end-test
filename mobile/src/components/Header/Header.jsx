import { SafeAreaView, Text } from "react-native";
import {
  Container,
  ContainerTitle,
  OvalIcon,
  ShopCartContent,
  Title,
  OvalText,
} from "./styles";
import SafeViewAndroid from "../../utils/safeViewAndroid";
import ShoesIcon from "../../assets/images/Shoes.svg";
import PadlockIcon from "../../assets/images/PadlockIcon.svg";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../storeConfig/cartReducer";
import { Link, useNavigation } from "@react-navigation/native";

export function Header() {
  const count = useSelector(selectTotalItems);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Container>
        <Link to={"/BuyItem"}>
          <ContainerTitle>
            <Title>COGNYSHOES</Title>
            <ShoesIcon />
          </ContainerTitle>
        </Link>
        <Link to={"/ShopCart"}>
          <ShopCartContent>
            <PadlockIcon />
            {count > 0 && (
              <OvalIcon>
                <OvalText>{count}</OvalText>
              </OvalIcon>
            )}
          </ShopCartContent>
        </Link>
      </Container>
    </SafeAreaView>
  );
}
