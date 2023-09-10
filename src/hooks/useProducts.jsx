import { useState } from "react"
import { deepClone, getIndex, removeItemFromArray } from "../utils/arrays"
import { createProductFromApi, deleteProductFromApi, getProductsFromApi, initialiseProductsFromApi, updateProductFromApi } from "../API/products"


export const useProducts = () => {

    const [products, setProducts] = useState()



    const addProduct = async (newProduct, userId) => {
        await createProductFromApi(newProduct, userId)
        const updatedProducts = await getProductsFromApi(userId);
        setProducts(updatedProducts);
    }

    const deleteProduct = (productId) => {
        deleteProductFromApi(productId)
        const productsCopy = deepClone(products)
        const productsUpdated = removeItemFromArray(productId, productsCopy)
        setProducts(productsUpdated)
    }

    const editProduct = (productBeingEdited) => {
        const productsCopy = deepClone(products)
        const indexOfProducToEdit = getIndex(productBeingEdited.id, products)
        productsCopy[indexOfProducToEdit] = productBeingEdited
        setProducts(productsCopy)
        updateProductFromApi(productBeingEdited)
    }

    const resetProducts = async (userId) => {
        initialiseProductsFromApi(userId)
        const updatedProducts = await getProductsFromApi(userId);
        setProducts(updatedProducts)
    }

    return { products, setProducts, resetProducts, addProduct, deleteProduct, editProduct }
}
