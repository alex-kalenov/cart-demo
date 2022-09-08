import "./style.css";
import { cn as bem } from "@bem-react/classname";

const Modal = ({ children, onClose }) => {
  const cn = bem("Modal");
  return (
    <>
      <div className={cn()}>{children}</div>
      <div className="background" onClick={onClose} />
    </>
  );
};

export default Modal;
