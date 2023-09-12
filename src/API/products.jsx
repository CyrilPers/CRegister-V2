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
    console.log("newProduct.category.id", newProduct.category.id)
    try {
        await axios.post(`${API_URL}create`, { title: newProduct.title, price: newProduct.price, isAvailable: newProduct.isAvailable ?? "true", imageSource: newProduct.imageSource ?? "/image/coming-soon.png", user: { id: userId }, category: { id: newProduct.category.id } });
    } catch (error) {
        console.log(error)
    }
}


export async function updateProductFromApi(product) {
    try {
        await axios.put(`${API_URL}update/${product.id}`, { title: product.title, price: product.price, isAvailable: product.isAvailable, imageSource: product.imageSource ?? "/image/coming-soon.png" });
    } catch (error) {
        console.log(error)
    }
}

export async function initialiseMainProductsFromApi(userId, categoryId) {
    console.log("main user", userId)
    console.log("main cat", categoryId)
    try {
        await axios.post(`${API_URL}initialise-main/${userId}/${categoryId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function initialiseBurgerProductsFromApi(userId, categoryId) {
    console.log("burger user", userId)
    console.log("burger cat", categoryId)
    try {
        await axios.post(`${API_URL}initialise-burger/${userId}/${categoryId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function initialiseSaladeProductsFromApi(userId, categoryId) {
    console.log("salade user", userId)
    console.log("salade cat", categoryId)
    try {
        await axios.post(`${API_URL}initialise-salade/${userId}/${categoryId}`);
    } catch (error) {
        console.log(error)
    }
}

export async function initialiseDessertProductsFromApi(userId, categoryId) {
    console.log("dessert user", userId)
    console.log("dessert cat", categoryId)
    try {
        await axios.post(`${API_URL}initialise-dessert/${userId}/${categoryId}`);
    } catch (error) {
        console.log(error)
    }
}