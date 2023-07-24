import { products as data } from '../data/products'
import Product from '../components/Product';
import usePos from '../hooks/usePos';

export default function Home() {

  const { categoryCurrent } = usePos()

  const products = data.filter(product => product.category_id === categoryCurrent.id)

  return (
    <>
      <h2 className="text-4xl font-black">{categoryCurrent.name}</h2>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación.
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        { products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        )) }
      </div>
    </>
  )
}
