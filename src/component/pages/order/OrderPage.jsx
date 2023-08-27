import { useRef, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'
import Navbar from '../../navbar/Navbar'
import AdminContext from "../../../context/AdminContext"
import { EMPTY_PRODUCT } from '../../../enum/product.jsx'
import { useProducts } from '../../../hooks/useProducts'
import { useBasket } from '../../../hooks/useBasket'


export default function OrderPage() {

  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [selectedProduct, setSelectedProduct] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  const { products, resetProducts, addProduct, deleteProduct, editProduct } = useProducts()
  const { basket, addToBasket, deleteBasketProduct, editBasketProduct } = useBasket()


  const adminContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    addProduct,
    deleteProduct,
    resetProducts,
    newProduct,
    setNewProduct,
    selectedProduct,
    setSelectedProduct,
    editProduct,
    titleEditRef,
    basket,
    addToBasket,
    deleteBasketProduct,
    editBasketProduct,
  }

  return (
    <AdminContext.Provider value={adminContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </AdminContext.Provider>
  )
}

const OrderPageStyled = styled.div`  
  background: 
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('/images/background.png') fixed center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: ${theme.borderRadius.extraRound}
  }  
`;