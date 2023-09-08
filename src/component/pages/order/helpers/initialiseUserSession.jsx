import { getProductsFromApi } from "../../../../API/products.jsx"
import { getUserIdFromApi } from "../../../../API/users.jsx"
import { getLocalStorage } from "../../../../utils/window.jsx"


const initialiseProducts = async (username, setProducts) => {
  const userId = await getUserIdFromApi(username)
  const productsExisting = await getProductsFromApi(userId)
  if (!productsExisting) {
    setProducts([])
    return
  }
  setProducts(productsExisting)
}

const initialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username)
  if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async (username, setProducts, setBasket) => {
  await initialiseProducts(username, setProducts)
  initialiseBasket(username, setBasket)
}
