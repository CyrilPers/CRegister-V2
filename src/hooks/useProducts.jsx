import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone, getIndex, removeItemFromArray } from "../utils/arrays"

export const useProducts = (second) => {

    const [products, setProducts] = useState(fakeMenu.LARGE)

    const resetProducts = () => {
        setProducts(fakeMenu.LARGE)
    }

    const addProduct = (newProduct) => {
        const productsCopy = deepClone(products)
        const productsUpdated = [newProduct, ...productsCopy]
        setProducts(productsUpdated)
    }

    const deleteProduct = (productId) => {
        const productsUpdated = removeItemFromArray(productId, products)
        setProducts(productsUpdated)
    }

    const editProduct = (product) => {
        const productsCopy = deepClone(products)
        const indexOfProducToEdit = getIndex(product.id, products)
        productsCopy[indexOfProducToEdit] = product
        setProducts(productsCopy)
    }
    return { products, setProducts, resetProducts, addProduct, deleteProduct, editProduct }
}
