import Modal from "../../wrappers/modal";
import Layout from "../../wrappers/layout";
import List from "../../wrappers/list";
import CartItem from "../../components/cart-item";
import { useSelector, useDispatch } from "react-redux";
import CartClose from "../../components/cart-close";
import CartEmpty from "../../components/cart-empty";
import { actions as modalsActions } from "../../store/modals/slice";
import { actions as cartActions } from "../../store/cart/slice";
import CartTotal from "../../components/cart-total";
import { useState } from "react";
import ReviveDeleted from "../../components/revive-deleted";

const Cart = () => {
  const [deletedItem, setDeletedItem] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const closeCart = () => {
    dispatch(modalsActions.close());
  };

  const incrCount = (item) => {
    dispatch(cartActions.addItem({ item, count: 1 }));
  };

  const decrCount = (item) => {
    dispatch(cartActions.removeItem({ item, count: 1 }));
  };

  const removeItem = (item) => {
    dispatch(cartActions.removeItem({ item, count: item.count }));
  };

  const reviveItem = (item) => {
    dispatch(cartActions.addItem({ item, count: item.count }));
    setDeletedItem(null);
  };

  const head = (
    <>
      <h2>Корзина</h2>
      <CartClose onClick={closeCart} />
    </>
  );

  const renderItems = () => {
    return cart.items.map((item) => (
      <CartItem
        item={item}
        key={item.id}
        increment={incrCount}
        decrement={decrCount}
        onRemove={removeItem}
        saveDeleted={setDeletedItem}
      />
    ));
  };

  const content = cart.items.length ? (
    <>
      <List renderItems={renderItems}></List>
      {!!deletedItem && (
        <ReviveDeleted item={deletedItem} onRevive={reviveItem} />
      )}
      <CartTotal count={cart.total_count} price={cart.total_price} />
    </>
  ) : (
    <CartEmpty />
  );

  return (
    <Modal onClose={closeCart}>
      <Layout head={head} className="reset-height">
        {content}
      </Layout>
    </Modal>
  );
};

export default Cart;
