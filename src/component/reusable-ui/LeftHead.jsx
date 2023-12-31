import React from 'react'
import Header from './Header'
import { theme } from '../../theme';
import styled from 'styled-components';

export default function LeftHead({ title }) {
    return (
        <Header>
            <LeftHeadStyled>
                {title}
            </LeftHeadStyled>
        </Header>
    )
}

const LeftHeadStyled = styled.div`
    display: flex;
    height: 65px;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P4};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.primary};
    @media(max-width: 767px) {
        height: 50px;
    }
    @media(min-width: 768px) and (max-width: 1388px) { 
    }
`;