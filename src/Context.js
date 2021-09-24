import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [coupons, setCoupons] = useState([])
  const [isAddCouponShow,setIsAddCouponShow]=useState(false);
  const [couponsList,setcouponsList]=useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const fetchCoupons = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      console.log(data);
      const { coupons } = data
      if (coupons) {
        const newCoupons = coupons.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCoupons(newCoupons)
      } else {
        setCoupons([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[url])


  useEffect(() => {
    fetchCoupons()
  }, [url,fetchCoupons])


  return (
    <AppContext.Provider
      value={{ loading, coupons, setCoupons,isAddCouponShow,setIsAddCouponShow ,couponsList,setcouponsList,isEditing,setIsEditing,editID,setEditID,alert,setAlert}}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
