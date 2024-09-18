import { useEffect, useState } from "react";
import {
  ContainerDescription,
  ContainerPrice,
  Description,
  ImageSummary,
  Price,
  TextInput,
  ItemContent,
} from "./styles";
import { useProducts } from "../../context/productsContext";

export default function CardSummary({ name, price, image, allQuantity, id }) {
  const [quantity, setQuantity] = useState(allQuantity);
  const { updateQuantity } = useProducts();

  const productPrice = (price, quantity) => {
    return (price * quantity).toFixed(2).replace(".", ",");
  };

  useEffect(() => {
    if (quantity !== allQuantity) {
      updateQuantity(id, quantity);
    }
  }, [quantity, allQuantity, id, updateQuantity]);

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity("");
    } else if (Number(value) >= 0) {
      setQuantity(Number(value));
    }
  };

  return (
    <div style={{ paddingBottom: 20 }}>
      <ItemContent>
        <ImageSummary src={image} />
        <ContainerDescription>
          <div style={{ width: "fit-content" }}>
            <Description>{name}</Description>
            <Price>R$ {price?.toFixed(2).replace(".", ",")}</Price>
          </div>
        </ContainerDescription>
        <ContainerPrice>
          <TextInput
            type="number"
            value={quantity}
            min="0"
            onChange={handleQuantityChange}
          />
        </ContainerPrice>
        <Price>R$ {productPrice(price, quantity || 0)}</Price>
      </ItemContent>
    </div>
  );
}
