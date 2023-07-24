import { createContext, useState } from 'react'
import { categories as categoriesDB } from "../data/categories"

const PosContext = createContext()

const PosProvider = ({ children }) => {

   const [categories, setCategories] = useState(categoriesDB)
   const [categoryCurrent, setCategoryCurrent] = useState(categories[0])

   const handleClickCategory = id => {
      const category = categories.filter(category => category.id === id)[0]
      setCategoryCurrent(category)
   } 

   return (
      <PosContext.Provider
         value={{
            categories,
            categoryCurrent,
            handleClickCategory
         }}
      >{children}</PosContext.Provider>
   )
}

export {
   PosProvider
}

export default PosContext