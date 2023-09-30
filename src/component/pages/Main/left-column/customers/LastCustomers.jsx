import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { isEmpty } from '../../../../../utils/arrays';

export default function LastCustomers({ customers }) {
    return (
        <LastCustomersStyled>
            <div className='titles'>
                <span>Prénom</span>
                <span>Nom</span>
                <span>Ville</span>
            </div>
            {!isEmpty(customers) &&
                customers.slice(0, 5).map(({ id, name, surname, address }) => (
                    <div key={id} className='customer'>
                        <span>{name ? name : "Na"}</span>
                        <span>{surname ? surname : "Na"}</span>
                        <span>{address.city ? address.city : "Na"}</span>
                    </div>
                ))}
        </LastCustomersStyled>
    )
}

const LastCustomersStyled = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: ${theme.fonts.size.P3};
    font-family: ${theme.fonts.family.stylish};
    span {
    padding: 0 10px;
    }

    .titles {
    width: 100%;
    display: flex;

    justify-content: space-between;
    margin: 5px 5px;
    padding: 0 10px;
    }

    .customer{
        width: 100%;
        background-color: ${theme.colors.greyLight};
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 5px 0px;}
`;