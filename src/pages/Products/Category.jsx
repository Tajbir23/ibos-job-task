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
    <ul className="border-r pr-5 py-2 mr-5">
      {categories?.map((category) => {
        return <li key={category?.slug} className="my-1 py-2">
            <NavLink to={`category/${category?.slug}`} className="text-[22px] font-semibold w-full px-[10px] py-[8px]">{category?.name}</NavLink>
        </li>
      })}
    </ul>
  )
}

export default Category