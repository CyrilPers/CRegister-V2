import React from 'react'
import Logo from '../reusable-ui/Logo';
import { theme } from '../../theme';
import { refreshPage } from '../../utils/window';
import NavbarUser from './NavbarUser';
import { styled } from 'styled-components';




export default function Navbar() {

  return (
    <NavbarStyled>
      <Logo onClick={refreshPage} className={"logo-order-page"} />
      <NavbarUser />
    </NavbarStyled>

  )
}

const NavbarStyled = styled.div`
    border: solid 2px ${theme.colors.primary} ;
    background-color: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};

    .logo-order-page {
      cursor: pointer;
    }

`;