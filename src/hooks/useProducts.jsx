import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/arrays"

export const useProducts = (second) => {

    const [products, setProducts] = useState(fakeMenu.SMALL)

    const resetProducts = () => {
        setProducts(fakeMenu.LARGE)
    }

    const addProduct = (newProduct) => {
        const productsCopy = deepClone(products)
        const productsUpdated = [newProduct, ...productsCopy]
        setProducts(productsUpdated)
    }

    const deleteProduct = (productId) => {
        const productsCopy = deepClone(products)
        const productsUpdated = productsCopy.filter((product) => product.id !== productId)
        setProducts(productsUpdated)
    }

    const editProduct = (productBeingEdited) => {
        const productsCopy = deepClone(products)
        const indexOfProducToEdit = products.indexOf(selectedProduct)
        productsCopy[indexOfProducToEdit] = productBeingEdited
        setProducts(productsCopy)
    }
    return { products, setProducts, resetProducts, addProduct, deleteProduct, editProduct }
}