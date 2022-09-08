import "./style.css";
import { cn as bem } from "@bem-react/classname";

const CartEmpty = () => {
  const cn = bem("CartEmpty");
  return <div className={cn()}>Корзина пуста</div>;
};

export default CartEmpty;
