import { useDispatch } from 'react-redux';
import { removeItem, editItem } from '../feaures/cart/cartSlice';
import { formatPrice, generateAmountOptions } from '../utilits';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* info */}
      <div className="sm:ml-16">
        {/* Title */}
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* Color */}
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          color:{' '}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 1)}
          </select>
        </div>
        {/* remove */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeFromTheCart}
        >
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
      {/* price */}
    </article>
  );
};
export default CartItem;
