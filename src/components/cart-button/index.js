import "./style.css";
import { cn as bem } from "@bem-react/classname";

const CartButton = ({ onClick, children, count }) => {
  const cn = bem("CartButton");
  return (
    <button onClick={onClick} className={cn()}>
      {children}
      <div className={cn("count")}>{count}</div>
    </button>
  );
};

export default CartButton;
