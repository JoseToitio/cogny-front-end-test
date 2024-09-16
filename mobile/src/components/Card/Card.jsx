import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  ButtonAdd,
  QuantityInput,
  ContainerImage,
  OpacityQuantity,
  ButtonText,
  ButtonsContainer,
} from "./styles";
import { addProduct, selectCartItems, updateQuantity } from "../../storeConfig/cartReducer";

export function Cart({ name, price, image, id }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(addProduct({ id, name, price, imageUrl: image, quantity: parseInt(quantity) }));
  };

  const handleUpdateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
  };
  console.log(cartItems)
  return (
    <Container>
      <ContainerImage>
        <Image source={{ uri: image }} resizeMode="contain" />
      </ContainerImage>
      <ProductName>{name}</ProductName>
      <ProductPrice>R$ {price.toFixed(2).replace(".", ",")}</ProductPrice>
      <ButtonsContainer>
        <OpacityQuantity>
          <QuantityInput keyboardType="numeric" value={quantity.toString()} onChangeText={handleUpdateQuantity} />
        </OpacityQuantity>
        <ButtonAdd onPress={handleAddToCart}>
          <ButtonText>ADICIONAR</ButtonText>
        </ButtonAdd>
      </ButtonsContainer>
    </Container>
  );
}
