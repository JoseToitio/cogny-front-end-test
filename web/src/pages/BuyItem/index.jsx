import CardBuyItem from "../../components/CardBuyItem";
import { useProducts } from '../../context/productsContext';
import { Container, CardWrapper } from "./styles";

export default function BuyItem() {
  const { products: productsData, loading } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <CardWrapper>
      {productsData?.map(({ name, price, id, imageUrl }) => (
          <CardBuyItem
            key={id.toString()}
            id={id}
            name={name}
            price={price}
            image={imageUrl}
          />
        ))}
        </CardWrapper>
    </Container>
  );
}