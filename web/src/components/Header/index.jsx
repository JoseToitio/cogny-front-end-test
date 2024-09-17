import { Link } from "react-router-dom";
import {
  Container,
  ContainerTitle,
  QuantityText,
  ShopCartContent,
  Text,
  Title,
} from "./styles";
import { ReactComponent as ShoesIcon } from "../../assets/images/Shoes.svg";

export default function Header() {
  const count = 1;
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
          <QuantityText>{count} itens</QuantityText>
        </ShopCartContent>
      </Link>
    </Container>
  );
}
