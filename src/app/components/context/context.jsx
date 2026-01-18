'use client'

import { products } from "@/data"
import { createContext, useState } from "react"

export const NavContext = createContext(null)

const ContextFile = ({children}) => {
  
    const [isclose,setClose] = useState(false)
  return (
    <NavContext.Provider value={{isclose,setClose,products}}>
        {children}
    </NavContext.Provider>
  )
}

export default ContextFile
