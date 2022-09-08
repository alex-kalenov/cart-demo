import "./style.css";
import { cn as bem } from "@bem-react/classname";

const ReviveDeleted = ({ item, onRevive }) => {
  const cn = bem("ReviveDeleted");

  const click = () => {
    onRevive(item);
  };

  return (
    <div className={cn()}>
      Товар "{item.title}" был удалён.
      <button onClick={click}>Восстановить</button>
    </div>
  );
};

export default ReviveDeleted;
