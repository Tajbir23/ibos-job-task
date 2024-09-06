import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


const Category = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/categories`)
        .then(response => response.json())
        .then(data => setCategories(data.slice(0,3)))
        .catch(error => console.log(error))
    },[])
  return (
    <div className="border-r pr-5 py-2 mr-5">
      {categories?.map((category) => {
        return <ul key={category?.slug}>
          <li className="my-1 py-2">
            <NavLink to={`products/category/${category?.slug}`}>{category?.name}</NavLink>
          </li>
        </ul>
      })}
    </div>
  )
}

export default Category