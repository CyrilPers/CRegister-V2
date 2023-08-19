import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme';
import Card from '../../reusable-ui/Card.jsx';
import { formatPrice } from '../../../utils/maths';
import AdminContext from '../../../context/AdminContext';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {

  const {products} = useContext(AdminContext)


  return (

      <MenuStyled className='menu'>
      {products.map(({id, title, imageSource, price}) => {
        return (
          <Card 
          key={id}
          title={title}
          imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT }
          leftDescription={formatPrice(price)}
        />
          )
          })}
      </MenuStyled>
    )
  }

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  `