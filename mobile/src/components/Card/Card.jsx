import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import {
  addProduct,
  selectCartItems,
  updateQuantity,
} from "../../storeConfig/cartReducer";
import { saveCartToFirestore } from "../../utils/firestoreFunctions";

export function Cart({ name, price, image, id }) {
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        id,
        name,
        price,
        imageUrl: image,
        quantity: parseInt(quantity),
      })
    );
  };

  const handleUpdateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
  };

  useEffect(() => {
    saveCartToFirestore(cartItems);
  }, [cartItems]);

  return (
    <Container>
      <ContainerImage>
        <Image source={{ uri: image }} resizeMode="contain" />
      </ContainerImage>
      <ProductName>{name}</ProductName>
      <ProductPrice>R$ {price.toFixed(2).replace(".", ",")}</ProductPrice>
      <ButtonsContainer>
        <OpacityQuantity>
          <QuantityInput
            keyboardType="numeric"
            value={quantity.toString()}
            onChangeText={handleUpdateQuantity}
          />
        </OpacityQuantity>
        <ButtonAdd onPress={handleAddToCart}>
          <ButtonText>ADICIONAR</ButtonText>
        </ButtonAdd>
      </ButtonsContainer>
    </Container>
  );
}
