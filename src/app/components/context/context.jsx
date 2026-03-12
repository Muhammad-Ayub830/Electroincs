'use client'

import backendUrl from "@/app/backendurl"
import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const NavContext = createContext(null)

const ContextFile = ({ children }) => {

  const [products, setProducts] = useState([])
  const [isclose, setClose] = useState(false)
  const [category, setCategory] = useState('All')
  const [favorite, setFavorite] = useState({})
  const [shippingfee, setShippingFee] = useState(0)
  const [isAdmin, setAdmin] = useState('/')

  // safer cart initialization
  const [cart, setCart] = useState(() => {
    if (typeof window === "undefined") return {}

    try {
      const storedCart = localStorage.getItem("cart")
      return storedCart ? JSON.parse(storedCart) : {}
    } catch {
      return {}
    }
  })

  // add to cart
  const addtoCart = (id, quantity = 1) => {
    setCart(prev => {
      const updated = { ...prev }

      if (updated[id]) {
        updated[id] += quantity
      } else {
        updated[id] = quantity
      }

      return updated
    })
  }

  // delete item
  const deleteCartItem = (id) => {
    setCart(prev => {
      const updated = { ...prev }
      delete updated[id]
      return updated
    })
  }

  // cart total
  const cartTotal = () => {
    let total = 0

    for (const id in cart) {
      const product = products.find(p => p._id === id)

      if (!product) continue

      total += product.price * cart[id]
    }

    return total
  }

  // cart item count
  const favoriteCount = () => {
    const count = Object.keys(cart).length
    return count > 9 ? 9 : count
  }

  // persist cart
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  // fetch products
  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${backendUrl}get-products`)

        if (Array.isArray(res.data)) {
          setProducts(res.data)
        } else {
          setProducts([])
        }

      } catch (err) {
        console.error("Product fetch error:", err)
      }
    }

    fetchProducts()

  }, [])

  return (
    <NavContext.Provider
      value={{
        isclose,
        setClose,
        products,
        category,
        setCategory,
        favoriteCount,
        addtoCart,
        cart,
        cartTotal,
        shippingfee,
        deleteCartItem,
        isAdmin,
        setAdmin
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export default ContextFile