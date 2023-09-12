import { useState } from "react"
import { deepClone, findIdInArray, getIndex, removeItemFromArray } from "../utils/arrays"
import { createProductFromApi, deleteProductFromApi, getProductsFromApi, updateProductFromApi } from "../API/products"

export const useProducts = () => {

    const [products, setProducts] = useState()


    const addProduct = async (newProduct, userId, selectedCategory, categoryId) => {
        await createProductFromApi(newProduct, userId, categoryId)
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

    return { products, setProducts, addProduct, deleteProduct, editProduct }
}
