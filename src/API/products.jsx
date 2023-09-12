import axios from 'axios'

const API_URL = 'http://localhost:3001/cregister/api/product/'

export async function getProductsFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProductFromApi(productId) {
    try {
        await axios.delete(`${API_URL}delete/${productId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function createProductFromApi(newProduct, userId) {
    try {
        await axios.post(`${API_URL}create`, { title: newProduct.title, price: newProduct.price, isAvailable: newProduct.isAvailable ?? "true", imageSource: newProduct.imageSource, user: { id: userId }, category: { id: 49 } });
    } catch (error) {
        console.log(error)
    }
}


export async function updateProductFromApi(product) {
    try {
        await axios.put(`${API_URL}update/${product.id}`, { title: product.title, price: product.price, isAvailable: product.isAvailable, ImageSource: product.imageSource });
    } catch (error) {
        console.log(error)
    }
}


export async function initialiseBurgerProductsFromApi(userId, categoryId) {
    try {
        await axios.post(`${API_URL}initialise-burger/${userId}/${categoryId}`);
    } catch (error) {
        console.log(error)
    }
}

