import { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import Card from '../../../reusable-ui/Card.jsx';
import { formatPrice } from '../../../../utils/maths';
import AdminContext from '../../../../context/AdminContext.jsx';
import { EMPTY_PRODUCT, IMAGE_COMING_SOON, IMAGE_NO_STOCK } from '../../../../enum/product';
import { findInArray, isEmpty } from '../../../../utils/arrays';
import EmptyMenu from './EmptyMenu';
import Loader from './Loader';
import { checkIfProductIsClicked } from './helper/helpers.jsx'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { menuAnimation } from '../../../../theme/animations';
import { convertStringToBoolean } from '../../../../utils/string'

export default function Menu() {

  const {
    products,
    isModeAdmin,
    deleteProduct,
    resetProducts,
    setSelectedProduct,
    selectedProduct,
    titleEditRef,
    addBasketProduct,
    username,
    selectProduct,
  } = useContext(AdminContext)

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    deleteProduct(idProductToDelete)
    idProductToDelete === selectedProduct.id && setSelectedProduct(EMPTY_PRODUCT)
  }

  const handleAddButton = (idProductToAdd) => {
    const productToAdd = findInArray(idProductToAdd, products)
    productToAdd.isAvailable ? addBasketProduct(productToAdd, username) : null;
  }

  const handleClick = (id) => {
    isModeAdmin ? selectProduct(id) : handleAddButton(id);
  }

  let containerClassName = isModeAdmin ? "card-container is-hoverable" : 'card-container'


  // Afficahge 
  if (products === undefined) return <Loader />

  if (isEmpty(products)) {
    return <EmptyMenu onClick={() => resetProducts(username)} />
  }

  return (
    <TransitionGroup component={MenuStyled} className='menu'>
      {products.slice().reverse().map(({ id, title, imageSource, price, isAvailable }) => {
        return (
          <CSSTransition
            classNames={"animation-card"}
            key={id}
            timeout={300}
          >
            <div className={containerClassName}>
              <Card
                key={id}
                title={title}
                imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                leftDescription={formatPrice(price)}
                showDeleteButton={isModeAdmin}
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={() => handleClick(id)}
                isHoverable={isModeAdmin}
                isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
                overlapImageSource={IMAGE_NO_STOCK}
                isOverlapImageVisible={convertStringToBoolean(isAvailable) === false}
              />
            </div>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

const MenuStyled = styled.div`
  
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 50px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  &:hover {
        scrollbar-color: initial;
    }

  ${menuAnimation}

  .card-container {
    position: relative; 
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    &.is-hoverable {
      &:hover{
        transform:scale(1.05);
        transition: ease-out ${theme.animation.speed.slow};
      }
    }
  }
    .ribbon {
      z-index: 2;
  }
  
  @media(max-width: 767px) {
    grid-auto-rows: 90px;
    max-width: 100%;
    overflow-x: hidden;
    padding: 10px 0;
    .card-container {
      height: 140px;
    }
  }

  @media(min-width: 768px) and (max-width: 1388px) { 
    padding: 10px 10px;
    grid-auto-rows: 140px;
    max-width: 100%;
    overflow-x: hidden;
    .card-container {
      height: 190px;
    }

  }
`;