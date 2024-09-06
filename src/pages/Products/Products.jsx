import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../component/Products/Card"
import Pagination from "./Pagination"


const Products = () => {
  const {category} = useParams()
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
     .then(response => response.json())
     .then(data => {
      setProducts(data.products)
     })
  },[category])

  console.log(products)
  return (
    <div>
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {products?.map(product => {
        return <Card key={product?.id} product={product} />
      })}
    </div>
    <div>
      <Pagination />
    </div>
    </div>
  )
}

export default Products