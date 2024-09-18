import { Link } from "react-router-dom";
import { ReactComponent as ShoesIcon } from "../../assets/images/Shoes.svg";
import { useProducts } from "../../context/productsContext";
import {
  Container,
  ContainerTitle,
  QuantityText,
  ShopCartContent,
  Text,
  Title,
} from "./styles";

export default function Header() {
  const { cartItems } = useProducts();
  const count = cartItems.length;
  return (
    <Container>
      <Link to="/">
        <ContainerTitle>
          <Title>COGNYSHOES</Title>
          <ShoesIcon width={52} height={36}  />
        </ContainerTitle>
      </Link>
      <Link to="/ShopCart">
        <ShopCartContent>
          <Text>Meu carrinho</Text>
          <QuantityText>{count} {count === 1 ? "item" : "itens"}</QuantityText>
        </ShopCartContent>
      </Link>
    </Container>
  );
}
