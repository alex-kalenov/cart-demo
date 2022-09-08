import "./style.css";
import { cn as bem } from "@bem-react/classname";

const CartClose = ({ onClick }) => {
  const cn = bem("CartClose");
  return (
    <button onClick={onClick} className={cn()}>
      Х
    </button>
  );
};

export default CartClose;
