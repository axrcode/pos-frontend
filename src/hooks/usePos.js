import { useContext } from 'react'
import PosContext from '../context/PosProvider'

const usePos = () => {
   return useContext(PosContext)
}

export default usePos