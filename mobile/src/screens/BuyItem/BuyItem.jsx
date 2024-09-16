import { fetchProducts } from "../../storeConfig/productsReducer";
import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styles";
import { Cart } from "../../components/Card/Card";

export function BuyItem() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (status === "failed") {
    return <Text>Erro: {error}</Text>;
  }

  return (
    <Container>
      <ScrollView>
        {products.map(({ imageUrl, name, price, id }) => (
          <Cart image={imageUrl} key={id} name={name} price={price} id={id} />
        ))}
      </ScrollView>
    </Container>
  );
}
