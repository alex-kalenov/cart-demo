import "./style.css";
import { cn as bem } from "@bem-react/classname";
import AddToCart from "../add-to-cart";

const ProductItem = ({ item, addToCart }) => {
  const cn = bem("ProductItem");

  return (
    <div className={cn()}>
      <div className={cn("title")}>{item.title}</div>
      <div className={cn("side")}>
        <div className={cn("price")}>{item.price} ₽</div>
        <AddToCart item={item} onAdd={addToCart} />
      </div>
    </div>
  );
};

export default ProductItem;
