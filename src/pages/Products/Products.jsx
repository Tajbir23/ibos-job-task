import { useEffect, useState } from "react"
import Card from "../../component/Products/Card"
import Pagination from "./Pagination"

const Products = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=9`)
     .then(response => response.json())
     .then(data => {
      setProducts(data.products)
     })
    },[])
  return (
    <div>
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {products?.map(product => {
        return <Card key={product?.id} product={product} />
      })}
    </div>
    <div className="mt-10">
      <Pagination />
    </div>
    </div>
  )
}

export default Products