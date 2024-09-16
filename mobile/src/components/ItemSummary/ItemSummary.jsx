import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ImageSummary,
  ContainerDescription,
  ContainerPrice,
  TextInput,
  Price,
  Description,
} from "./styles";
import { View } from "react-native";
import { removeProduct, updateQuantity } from "../../storeConfig/cartReducer";

export default function ItemSummary({ name, allQuantity, price, id, image }) {
  const [quantity, setQuantity] = useState(allQuantity || 0);
  const dispatch = useDispatch();

  const productPrice = (price, allQuantity) => {
    return (price * allQuantity).toFixed(2).replace(".", ",");
  };

  const handleUpdateQuantity = (newQuantity) => {
    const parsedQuantity = newQuantity === "" ? 0 : parseInt(newQuantity);
    setQuantity(parsedQuantity);
    dispatch(updateQuantity({ id, quantity: parsedQuantity }));
  };

  return (
    <View style={{ paddingBottom: 20 }}>
      <ContainerDescription>
        <ImageSummary source={{ uri: image }} resizeMode="contain" />
        <View style={{ paddingLeft: 20 }}>
          <Description>{name}</Description>
          <Price>R$ {price.toFixed(2).replace(".", ",")}</Price>
        </View>
      </ContainerDescription>
      <ContainerPrice>
        <TextInput
          keyboardType="numeric"
          value={quantity.toString()}
          onChangeText={handleUpdateQuantity}
        />
        <Price>R$ {productPrice(price, quantity)}</Price>
      </ContainerPrice>
    </View>
  );
}
