import { Text } from "react-native";
import { Container, ContainerError } from "./styles";
import COLORS from "../../styles/theme";
import { CartItemSummary } from "../CartItemSummary/CartItemSummary";
import { selectCartItems } from "../../storeConfig/cartReducer";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const productsSelecteds = useSelector(selectCartItems);

  if (!productsSelecteds?.length)
    return (
      <ContainerError>
        <Text style={{color: COLORS.COLORS.WHITE, fontFamily: COLORS.FONTS.ROBOTO_BOLD, fontSize: 18}}>O Carrinho está vazio.</Text>
      </ContainerError>
    );
  return (
    <Container>
        <CartItemSummary products={productsSelecteds} />
    </Container>
  );
}
