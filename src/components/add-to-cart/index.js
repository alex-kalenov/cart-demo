import { useState } from "react";
import "./style.css";
import { cn as bem } from "@bem-react/classname";

const AddToCart = ({ item, onAdd }) => {
  const [count, setCount] = useState(1);

  const cn = bem("AddToCart");

  const change = (event) => {
    setCount(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    onAdd(item, count);
  };

  return (
    <form onSubmit={submit} className={cn()}>
      <input
        type="number"
        min="1"
        value={count}
        onChange={change}
        className={cn("count")}
      />
      <input type="submit" value="Добавить" className={cn("submit")} />
    </form>
  );
};

export default AddToCart;
