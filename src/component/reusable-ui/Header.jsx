import React from 'react'
import { theme } from '../../theme';
import { styled } from 'styled-components';

export default function Header({ children }) {
    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    width: 100%;
    height: 70px;
    background: ${theme.colors.background_dark};
    /* padding: 0 16px; */
    @media(max-width: 767px) {
        height: 50px;
    }
`;