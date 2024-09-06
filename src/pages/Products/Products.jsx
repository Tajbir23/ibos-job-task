import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../component/Products/Card"


const Products = () => {
  const {category} = useParams()
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
     .then(response => response.json())
     .then(data => {
      const duplicateProducts = [...data.products]
      while (duplicateProducts.length < 9){
        duplicateProducts.push(...data.products)
      }
      
      setProducts(duplicateProducts.slice(0, 9))
     })
  },[category])

  console.log(products)
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {products?.map(product => {
        return <Card key={product?.id} product={product} />
      })}
    </div>
  )
}

export default Products