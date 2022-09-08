import List from "../../wrappers/list";
import Layout from "../../wrappers/layout";
import { useDispatch, useSelector } from "react-redux";
import { actions as cartActions } from "../../store/cart/slice";
import { actions as modalsActions } from "../../store/modals/slice";
import ProductItem from "../../components/product-item";
import CartButton from "../../components/cart-button";

const Products = () => {
  const dispatch = useDispatch();
  const product_list = useSelector((state) => state.products.items);
  const total_cart_count = useSelector((state) => state.cart.total_count);

  const addToCart = (item, count) => {
    dispatch(cartActions.addItem({ item, count }));
  };

  const openCart = () => {
    dispatch(modalsActions.open("cart"));
  };

  const renderListItems = () => {
    return product_list.map((item) => (
      <ProductItem item={item} key={item.id} addToCart={addToCart} />
    ));
  };

  const head = (
    <>
      <h1>Магазин</h1>
      <CartButton count={total_cart_count} onClick={openCart}>
        Корзина
      </CartButton>
    </>
  );

  return (
    <Layout head={head}>
      <List renderItems={renderListItems} />
    </Layout>
  );
};

export default Products;
