import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";
import Button from "../Button";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <div>
      <ul>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              {item.name}
              <Button type={type} item={item} />
            </li>
          ))}
        {type === "cart" &&
          cart.map((item, index) => (
            <li key={index}>
              {item.name}
              <Button type={type} item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ProductList;
