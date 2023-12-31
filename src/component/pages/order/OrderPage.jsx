import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { theme } from '../../../theme'
import Main from './Main'
import Navbar from '../../navbar/Navbar'
import AdminContext from "../../../context/AdminContext"
import { useProducts } from '../../../hooks/useProducts'
import { useBasket } from '../../../hooks/useBasket'
import { useParams } from 'react-router-dom'
import { initialiseBasket, initialiseInvoice, initialiseCategories, initialiseCustomers, initialiseProducts, initialiseUser, } from './helpers/initialiseUserSession'
import { findInArray } from '../../../utils/arrays'
import { useCategories } from '../../../hooks/useCategories'
import { useCustomers } from '../../../hooks/useCustomers'
import { useInvoices } from '../../../hooks/useInvoices'


export default function OrderPage() {


  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState("invoices")
  const [currentTabSelected, setCurrentTabSelected] = useState("add")

  const titleEditRef = useRef()
  const { invoices, setInvoices, editInvoice, customer, setCustomer, invoice, setInvoice, deleteInvoice, createInvoice, getPdf } = useInvoices()
  const { deleteProductsFromCategory, products, addProduct, deleteProduct, editProduct, setProducts, resetCategoryAndProducts, selectedProduct, setSelectedProduct, newProduct, setNewProduct, filteredProducts, setFilteredProducts } = useProducts()
  const { basket, addBasketProduct, deleteBasketProduct, setBasket, totalBasket, setTotalBasket } = useBasket()
  const { categories, setCategories, selectedCategory, setSelectedCategory, newCategory, setNewCategory, deleteCategory, addCategory } = useCategories()
  const { setCustomers, customers, deleteCustomer, selectedCustomer, setSelectedCustomer, addCustomer, editCustomer, resetCustomers, newCustomer, setNewCustomer } = useCustomers()
  const { username } = useParams()
  const [userId, setUserId] = useState();
  const [invoiceId, setInvoiceId] = useState("1")

  const selectProduct = async (productIdSelected) => {
    const productClickedOn = findInArray(productIdSelected, products)
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    await setSelectedProduct(productClickedOn)
    titleEditRef.current.focus()
  }

  const selectCustomer = async (customerIdSelected) => {
    const customerClickedOn = findInArray(customerIdSelected, customers)
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    await setSelectedCustomer(customerClickedOn)
    titleEditRef.current.focus()
  }

  const init = async () => {
    const initUserId = await initialiseUser(setUserId, username)
    await initialiseCategories(initUserId, setCategories);
    await initialiseCustomers(initUserId, setCustomers);
    await initialiseProducts(initUserId, setProducts);
  }


  useEffect(() => { init() }, [userId])


  const adminContextValue = {
    filteredProducts,
    setFilteredProducts,
    setTotalBasket,
    totalBasket,
    resetCustomers,
    resetCategoryAndProducts,
    createInvoice,
    initialiseBasket,
    initialiseInvoice,
    initialiseCustomers,
    deleteInvoice,
    selectCustomer,
    editCustomer,
    addCustomer,
    currentPage,
    setCurrentPage,
    selectedCustomer,
    setSelectedCustomer,
    deleteCustomer,
    invoice,
    setInvoice,
    invoices,
    setInvoices,
    editInvoice,
    customer,
    setCustomer,
    setCustomers,
    customers,
    deleteProductsFromCategory,
    deleteCategory,
    newCategory,
    setNewCategory,
    categories,
    setCategories,
    invoiceId,
    setInvoiceId,
    username,
    userId,
    setUserId,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    setProducts,
    addProduct,
    deleteProduct,
    newProduct,
    setNewProduct,
    newCustomer,
    setNewCustomer,
    selectedProduct,
    setSelectedProduct,
    editProduct,
    titleEditRef,
    basket,
    addBasketProduct,
    deleteBasketProduct,
    selectProduct,
    setBasket,
    selectedCategory,
    setSelectedCategory,
    addCategory,
    getPdf,
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
    max-height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    border-radius: ${theme.borderRadius.extraRound}
  }  

  @media(max-width: 1388px) {
    padding: 0 0px;
    min-height: 100vh;
    max-height: none;
    max-width: 100%;

    .container {
      max-width: 100%;
      width: 100%;
      max-height: none;
      padding: 0 5px;
    }
  }
`;