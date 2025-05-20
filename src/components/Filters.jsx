import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FromCheckbox from './FromCheckbox';

const Filters = () => {
  const { meta, params } = useLoaderData();

  const { order, search, company, category, shipping, price } = params;
  console.log(price);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* Categories */}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* Company */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        defaultValue={company}
      />
      {/* SortBy */}
      <FormSelect
        label="sort by"
        name="order"
        defaultValue={order}
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* Price */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
        defaultValue={price}
      />
      {/* Shipping */}
      <FromCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
