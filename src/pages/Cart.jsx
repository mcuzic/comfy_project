import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  //temp
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 sm:grid-cols-12">
        <div className="sm:col-span-8">
          <CartItemsList />
        </div>
        <div className="sm:col-span-4 sm:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
