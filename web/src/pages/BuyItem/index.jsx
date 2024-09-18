import CardBuyItem from "../../components/CardBuyItem";
import { useProducts } from "../../context/productsContext";
import { addProductsToFirestore, getProductsFromFirestore } from "../../utils/fireStoreFunctions";
import { Container, CardWrapper, ContainerError, ButtonError } from "./styles";

export default function BuyItem() {
  const { products: productsData, loading, setProducts } = useProducts();

  const handleClickAddFirebase = async () => {
    await addProductsToFirestore();
    const updatedProducts = await getProductsFromFirestore();
    setProducts(updatedProducts);
  };

  if (loading) {
    return (
      <ContainerError>
        <p>Loading...</p>
      </ContainerError>
    );
  }

  if (productsData.length === 0) {
    return (
      <ContainerError>
        <p>
          Opa, parece que ainda não há produtos disponíveis no momento.
          <br />
          Por favor, clique no botão abaixo para adicionar produtos ao seu banco
          de dados.
        </p>
        <ButtonError onClick={handleClickAddFirebase}>
          Adicionar Produtos ao Banco de Dados
        </ButtonError>
      </ContainerError>
    );
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
