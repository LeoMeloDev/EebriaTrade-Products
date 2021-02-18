import Product from '../components/Product'

export const createChildrenArray = (data) =>
  data.map((item) => <Product key={item.name} product={item} />);