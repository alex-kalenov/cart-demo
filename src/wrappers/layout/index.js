import { cn as bem } from "@bem-react/classname";
import "./style.css";

const Layout = ({ head, children, className }) => {
  const cn = bem("Layout");

  const final_classname = `${cn()} ${className ? className : ""}`;

  return (
    <div className={final_classname}>
      <div className={cn("head")}>{head}</div>
      <div className={cn("body")}>{children}</div>
    </div>
  );
};

export default Layout;
