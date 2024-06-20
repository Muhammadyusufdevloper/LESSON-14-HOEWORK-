import { useGetProductsQuery } from '../../context/api/productApi'
import Product from '../../components/products';

const Home = () => {
  const { data: products } = useGetProductsQuery({ limit: 100 })

  console.log(products?.data?.products);
  return (
    <section className='pt-20 pb-32 bg-gray-50 dark:bg-gray-900'>
      <Product products={products} title={"Product"} />
    </section>
  )
}

export default Home
