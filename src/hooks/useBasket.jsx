import { useState } from 'react'
import { addItemToArray, deepClone, getIndex, isProductIdInBasket, removeItemFromArray } from '../utils/arrays'
import { deleteBasketProductFromApi } from '../API/basket'
import { editInvoiceFromApi } from '../API/invoice'

export const useBasket = () => {
    const [basket, setBasket] = useState([])


    const addBasketProduct = async (productToAdd, invoice, userId) => {
        let newBasketProductApi


        const isProductAlreadyInBasket = isProductIdInBasket(productToAdd.id, basket)
        if (!isProductAlreadyInBasket) {
            const newBasketProduct = {
                productName: productToAdd.title,
                productPrice: productToAdd.price,
                productId: productToAdd.id,
                imageSource: productToAdd.imageSource,
                quantity: 1,
                totalPrice: 0,
                producePrice: 0
            }
            await editInvoiceFromApi(invoice, invoice.customer, newBasketProduct)
                .then(apiResponse => {
                    newBasketProductApi = apiResponse;
                });
            const basketCopy = deepClone(basket);
            const updatedBasket = addItemToArray(newBasketProductApi, basketCopy);
            setBasket(updatedBasket)
        }

        const updatedBasketProduct = {
            ...isProductAlreadyInBasket,
            quantity: isProductAlreadyInBasket.quantity += 1
        }

        await editInvoiceFromApi(invoice, invoice.customer, updatedBasketProduct)

        const basketCopy = deepClone(basket)
        const indexOfBasketProducToEdit = getIndex(updatedBasketProduct.id, basketCopy)
        basketCopy[indexOfBasketProducToEdit] = updatedBasketProduct
        setBasket(basketCopy)
    }



    const deleteBasketProduct = async (basketProductId, invoice,) => {
        const basketproductToDelete = {
            id: basketProductId,
            quantity: 0,
            productPrice: 0
        }
        await editInvoiceFromApi(invoice, invoice.customer, basketproductToDelete)
        deleteBasketProductFromApi(basketProductId)
        const basketCopy = deepClone(basket)
        const basketUpdated = removeItemFromArray(basketProductId, basketCopy)
        setBasket(basketUpdated)
    }


    return { basket, addBasketProduct, deleteBasketProduct, setBasket }
}