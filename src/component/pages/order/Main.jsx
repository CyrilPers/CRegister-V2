import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../theme/index';
import LeftColumn from '../main/left-column/LeftColumn';
import MainRightSide from '../Main/main-right-side/MainRightSide';


export default function Main() {

  return (

    <MainStyled>
      <MainRightSide />
      <LeftColumn />
    </MainStyled>
  )
}

const MainStyled = styled.div`
    border: solid 2px ${theme.colors.primary} ;
    border-top: none;
    background-color: ${theme.colors.background_white};
    height: 85vh;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: 1fr 25%;;
    overflow: hidden;


    @media(max-width: 767px) {
      display: flex;
      flex-direction: column;
      max-height: none;
    }

    @media(min-width: 768px) and (max-width: 1388px) {
      grid-template-columns: 33% 1fr;
    }
  `;