import { useState } from "react";
import { useProducts } from "../../context/productsContext";
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  ButtonAdd,
  QuantityInput,
  ContainerImage,
  ButtonsContainer,
} from "./styles";

export default function CardBuyItem({ name, price, image, id }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useProducts();

  const handleAddToCart = () => {
    const product = {
      id: id,
      imageUrl: image,
      name: name,
      price: price,
    };

    addToCart(product, quantity);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value === "" ? "" : Math.max(1, parseInt(value, 10) || 1));
  };

  return (
    <Container>
      <ContainerImage>
        <Image src={image} />
      </ContainerImage>
      <ProductName>{name}</ProductName>
      <ProductPrice>R$ {price?.toFixed(2).replace(".", ",") || 0}</ProductPrice>
      <ButtonsContainer>
        <QuantityInput
          type="number"
          min="1"
          value={quantity.toString()}
          onChange={handleQuantityChange}
        />
        <ButtonAdd onClick={handleAddToCart}>ADICIONAR AO CARRINHO</ButtonAdd>
      </ButtonsContainer>
    </Container>
  );
}
