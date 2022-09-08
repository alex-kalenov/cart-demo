import "./style.css";
import { cn as bem } from "@bem-react/classname";
import CountConfig from "../count-config";

const CartItem = ({ item, increment, decrement, onRemove, saveDeleted }) => {
  const cn = bem("CartItem");

  const onIncr = () => {
    increment(item);
  };

  const onDecr = () => {
    decrement(item);
  };

  const onRemoveItem = () => {
    saveDeleted(item);
    onRemove(item);
  };

  return (
    <div className={cn()}>
      <div className={cn("title")}>{item.title}</div>
      <div className={cn("side")}>
        <div className={cn("price")}>{item.price} ₽</div>
        <CountConfig count={item.count} increment={onIncr} decrement={onDecr} />
        <button onClick={onRemoveItem}>Удалить</button>
      </div>
    </div>
  );
};

export default CartItem;
