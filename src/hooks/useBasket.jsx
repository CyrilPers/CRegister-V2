import { useState } from 'react'
import { removeItemFromArray } from '../utils/arrays'
import { createBasketProductFromApi, deleteBasketProductFromApi, getBasketFromApi, getBasketProductByProductIdFromApi, updateBasketProductFromApi } from '../API/basket'

export const useBasket = () => {
    const [basket, setBasket] = useState([])


    const addBasketProduct = async (productToAdd, invoiceId) => {
        const isProductAlreadyInBasket = await getBasketProductByProductIdFromApi(productToAdd.id)
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
            await createBasketProductFromApi(newBasketProduct, invoiceId)
            const updatedBasket = await getBasketFromApi(invoiceId)
            setBasket(updatedBasket)
            return
        }

        const updatedBasketProduct = {
            ...isProductAlreadyInBasket,
            quantity: isProductAlreadyInBasket.quantity += 1
        }
        await updateBasketProductFromApi(updatedBasketProduct)
        const updatedBasket = await getBasketFromApi(invoiceId)
        setBasket(updatedBasket)
    }


    const deleteBasketProduct = (basketProductId) => {
        const basketUpdated = removeItemFromArray(basketProductId, basket)
        setBasket(basketUpdated)
        deleteBasketProductFromApi(basketProductId)
    }


    return { basket, addBasketProduct, deleteBasketProduct, setBasket }
}