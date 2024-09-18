import React, { useEffect, useState } from "react";
import CardSummary from "../../components/CardSummary";
import { useProducts } from "../../context/productsContext";
import {
  Container,
  ContainerEmpty,
  Content,
  EmptyCart,
  FinishButton,
  FinishContainer,
  Header,
  HeaderItem,
  Line,
  Price,
  TotalText,
} from "./styles";
import { Link } from "react-router-dom";

export default function ShopCart() {
  const { cartItems, resetCart } = useProducts();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCloseOrder = () => {
    resetCart();
    alert("Pedido finalizado!");
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <ContainerEmpty>
        <EmptyCart>O Carrinho está vazio.</EmptyCart>
        <Link to="/">
          <FinishButton>VOLTAR</FinishButton>
        </Link>
      </ContainerEmpty>
    );
  }

  return (
    <Container>
      <Content>
        <Header>
          <HeaderItem></HeaderItem>
          <HeaderItem>Produto</HeaderItem>
          <HeaderItem>QTD</HeaderItem>
          <HeaderItem>PREÇO</HeaderItem>
        </Header>
        {cartItems.map((product) => (
          <React.Fragment key={product.id}>
            <CardSummary
              name={product.name}
              price={product.price}
              allQuantity={product.quantity}
              image={product.imageUrl}
              id={product.id}
            />
            <Line />
          </React.Fragment>
        ))}
        <FinishContainer>
          <FinishButton onClick={handleCloseOrder}>FINALIZAR PEDIDO</FinishButton>
          <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
            <TotalText>TOTAL</TotalText>
            <Price>
              R$ {totalPrice.toFixed(2).replace(".", ",")}
            </Price>
          </div>
        </FinishContainer>
      </Content>
    </Container>
  );
}
