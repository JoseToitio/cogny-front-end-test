import { Alert, Text, View } from "react-native";
import { resetCart, selectTotalPrice } from "../../storeConfig/cartReducer";
import { Container, FinishButton, TotalText } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ButtonText } from "../Card/styles";
import ItemSummary from "../ItemSummary/ItemSummary";
import { Price } from "../ItemSummary/styles";
import { ScrollView } from "react-native";

export function CartItemSummary({ products }) {
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  function handleCheckout() {
    Alert.alert("Pedido finalizado!");
    dispatch(resetCart());
  }

  return (
    <ScrollView>
      <Container>
        {products.map((product) => (
          <ItemSummary
            name={product.name}
            price={product.price}
            allQuantity={product.quantity}
            key={product.id}
            image={product.imageUrl}
            id={product.id}
          />
        ))}
        <View style={{ alignItems: "center" }}>
          <TotalText>TOTAL</TotalText>
          <Price style={{ fontSize: 30 }}>
            R$ {total.toFixed(2).replace(".", ",")}
          </Price>
          <FinishButton onPress={handleCheckout}>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </FinishButton>
        </View>
      </Container>
    </ScrollView>
  );
}
