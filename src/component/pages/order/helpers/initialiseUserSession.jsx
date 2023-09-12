import { getBasketFromApi } from "../../../../API/basket.jsx"
import { getCategoriesFromApi, initialiseCategoriesFromApi } from "../../../../API/categories.jsx"
import { getProductsFromApi, initialiseBurgerProductsFromApi, initialiseDessertProductsFromApi, initialiseMainProductsFromApi, initialiseSaladeProductsFromApi } from "../../../../API/products.jsx"
import { createUserFromApi, getUserIdFromApi } from "../../../../API/users.jsx"
import { findIdInArray } from "../../../../utils/arrays.jsx"

export const initialiseProducts = async (userId, setProducts) => {

  const productsExisting = await getProductsFromApi(userId)
  if (!productsExisting) {
    setProducts([])
    return
  }
  setProducts(productsExisting)
}


export const initialiseCategories = async (userId, setCategories) => {
  const categoriesExisting = await getCategoriesFromApi(userId)
  if (!categoriesExisting) {
    setCategories([])
    return
  }
  setCategories(categoriesExisting)
}


export const initialiseBasket = async (invoiceId, setBasket) => {

  const basketExisting = await getBasketFromApi(invoiceId)
  if (!basketExisting) {
    setBasket([])
    return
  }
  setBasket(basketExisting)
}

export const initialiseUser = async (setUserId, username) => {
  const newUserId = await getUserIdFromApi(username)
  setUserId(newUserId)
}

export const authentificateUser = async (username) => {
  const existingUser = await getUserIdFromApi(username)
  if (!existingUser) {
    await initialiseNewUserFromApi(username)
  }
  return existingUser
}

export const initialiseNewUserFromApi = async (username) => {
  await createUserFromApi(username)
  const newUserId = await getUserIdFromApi(username)
  await initialiseCategoriesFromApi(newUserId)
  const categories = await getCategoriesFromApi(newUserId)
  const mainCatId = findIdInArray("MAIN", categories)
  const burgerCatId = findIdInArray("BURGERS", categories)
  const saladeCatId = findIdInArray("SALADES", categories)
  const dessertCatId = findIdInArray("DESSERTS", categories)
  initialiseMainProductsFromApi(newUserId, mainCatId)
  initialiseBurgerProductsFromApi(newUserId, burgerCatId)
  initialiseSaladeProductsFromApi(newUserId, saladeCatId)
  initialiseDessertProductsFromApi(newUserId, dessertCatId)
}


