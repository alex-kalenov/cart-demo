import { useSelector } from "react-redux";
import Products from "./controls/products";
import Cart from "./controls/cart";

function App() {
  const opened_modal = useSelector((state) => state.modals.opened_modal);

  let modal;

  switch (opened_modal) {
    case "cart":
      modal = <Cart />;
      break;
    default:
      modal = <></>;
  }

  return (
    <div>
      <Products />
      {modal}
    </div>
  );
}

export default App;
