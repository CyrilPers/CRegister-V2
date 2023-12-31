import axios from 'axios'

const API_URL = 'https://my-pos-nmyg.onrender.com/cregister/api/product/'

export async function getProductsFromApi(userId) {
    try {
        const { data } = await axios.get(`${API_URL}user=${userId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProductFromApi(productId) {
    try {
        await axios.delete(`${API_URL}delete/${productId}`, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}


export async function createProductFromApi(newProduct, userId) {
    try {
        const { data } = await axios.post(`${API_URL}create`, { title: newProduct.title, price: newProduct.price, isAvailable: newProduct.isAvailable ?? "true", imageSource: newProduct.imageSource ?? "/image/coming-soon.png", user: { id: userId }, category: { id: newProduct.category.id } }, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function updateProductFromApi(product) {
    try {
        await axios.put(`${API_URL}update/${product.id}`, { title: product.title, price: product.price, isAvailable: product.isAvailable, imageSource: product.imageSource ?? "/image/coming-soon.png" }, {
            headers: {
                'Access-Control-Allow-Origin': 'https://mypos.cyrilpersonne.website'
            }
        });
    } catch (error) {
        console.log(error)
    }
}


