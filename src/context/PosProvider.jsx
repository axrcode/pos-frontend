import { createContext, useState } from 'react'
import { categories as categoriesDB } from "../data/categories"

const PosContext = createContext()

const PosProvider = ({ children }) => {

   const [categories, setCategories] = useState(categoriesDB)
   const [categoryCurrent, setCategoryCurrent] = useState(categories[0])
   const [modal, setModal] = useState(false)
   const [product, setProduct] = useState({})

   const handleClickCategory = id => {
      const category = categories.filter(category => category.id === id)[0]
      setCategoryCurrent(category)
   } 

   const handleClickModal = () => {
      setModal(!modal)
      console.log(modal);
   }

   const handleSetProduct = product => {
      setProduct(product)
   }

   return (
      <PosContext.Provider
         value={{
            categories,
            categoryCurrent,
            handleClickCategory,
            modal,
            handleClickModal,
            product,
            handleSetProduct,
         }}
      >{children}</PosContext.Provider>
   )
}

export {
   PosProvider
}

export default PosContext