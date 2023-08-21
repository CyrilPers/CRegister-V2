import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import AdminContext from '../../../../../context/AdminContext';
import { FiCheck } from 'react-icons/fi'
import { theme } from '../../../../../theme';

const EMPTY_PRODUCT = {
    id:"",
    title: "",
    imageSource: "",
    price: 0,
}


export default function AddForm() {

    const {addProduct} = useContext(AdminContext)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const id = crypto.randomUUID()
        const newProductToAdd = {
            ...newProduct,
            id
        }
        addProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
        displaySubmittedMessage()
    }

    const displaySubmittedMessage = () => {
        setIsSubmitted(true)
        setTimeout(() => { setIsSubmitted(false)}, 2000)
    }


    const handleChange = (event) => {
        const newValue = event.target.value
        const name = event.target.name
        setNewProduct({ ...newProduct, [name] : newValue })  // Dynamic property name
    }


  return (
    <AddFormStyled  onSubmit={handleSubmit}>
            <div className='image-preview' >
                {newProduct.imageSource ? (
                <img src={newProduct.imageSource} alt={newProduct.title} /> 
                ) : (
                <div className='empty-img'>Aucune image</div> 
                )}
            </div>       
            <div className='input-fields'>
            <input name="title" value={newProduct.title} onChange={handleChange} type="text" placeholder='Nom du produit' />
            <input name="imageSource" value={newProduct.imageSource} onChange={handleChange} type="text" placeholder="Lien URL d'une image" />
            <input name="price" value={newProduct.price ? newProduct.price : ""} onChange={handleChange} type="text" placeholder='Prix' />
        </div>
        <div className='submit'>
            <button className='submit-button'>Submit button</button>
            {isSubmitted && (
            <div className='submit-message'>
                <FiCheck />
                <span>Ajouté avec succès !</span>
            </div>
            )}
        </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 20px;
    height: 100%;
    width: 70%;

    .image-preview {
        grid-area: 1 / 1 / 4 / 2;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }

        .empty-img {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${theme.colors.greyLight};
            line-height: 1.5;
            color: ${theme.colors.greySemiDark};
            border-radius: ${theme.borderRadius.round};
        }

    }
    .input-fields {
        grid-area: 1 / 2 / 4 / 5;
        display: grid;
    }

    .submit {
        grid-area: 4 / 2 / 5 / 5; 
        display: flex; 
        align-items: center;
    
        .submit-button {
            width:50%        
        }
        submit-message {
        }
    }
`;