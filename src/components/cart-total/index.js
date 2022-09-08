import "./style.css";
import { cn as bem } from "@bem-react/classname";

const CartTotal = ({ count, price }) => {
  const cn = bem("CartTotal");
  return (
    <div className={cn()}>
      Итого: {price} ₽ ({count} товара)
    </div>
  );
};

export default CartTotal;
