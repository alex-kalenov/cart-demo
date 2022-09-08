import "./style.css";
import { cn as bem } from "@bem-react/classname";

const CountConfig = ({ count, increment, decrement }) => {
  const cn = bem("CountConfig");

  return (
    <div className={cn()}>
      <button onClick={decrement}>-</button>
      <div className={cn("value")}>{count} шт.</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CountConfig;
