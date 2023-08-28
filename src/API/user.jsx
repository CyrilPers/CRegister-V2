import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from './firebase-config.jsx'
import { fakeMenu } from '../fakeData/fakeMenu.js'

export const getUser = async (userId) => {
    const docRef = doc(db, "users", userId)

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        return userReceived
    }
}

export const createUser = (userId) => {
    const docRef = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: fakeMenu.SMALL,
    }
    setDoc(docRef, newDoc)
}

export const authentificateUser = async (userId) => {
    if (!existingUser) {
        createUser(userId)
    }
}