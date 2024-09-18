import { addProductsAndFetch, fetchProducts } from "../../storeConfig/productsReducer";
import React, { useEffect } from "react";
import { Text, ActivityIndicator, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonError,
  ButtonTextError,
  Container,
  ContainerError,
  Loading,
  TextError,
} from "./styles";
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

  const handleAddProducts = () => {
    dispatch(addProductsAndFetch());
    dispatch(fetchProducts());
  };

  if (status === "loading") {
    return (
      <Loading>
        <ActivityIndicator size="large" color="#0000ff" />
      </Loading>
    );
  }

  if (status === "failed") {
    return (
      <Loading>
        <Text>Erro: {error}</Text>
      </Loading>
    );
  }

  if (products.length === 0) {
    return (
      <ContainerError>
        <TextError>
          Opa, parece que ainda não há produtos disponíveis no momento.
          {"\n"}
          Por favor, clique no botão abaixo para adicionar produtos ao seu banco
          de dados.
        </TextError>
        <ButtonError onPress={handleAddProducts}>
          <ButtonTextError>
            Adicionar Produtos ao Banco de Dados
          </ButtonTextError>
        </ButtonError>
      </ContainerError>
    );
  }
  return (
    <Container>
      <ScrollView>
        {products.map(({ imageUrl, name, price, id }) => (
          <Cart
            image={imageUrl}
            key={id}
            name={name}
            price={price}
            id={id}
            isCartSummary={false}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
