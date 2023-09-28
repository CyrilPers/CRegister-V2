import React, { useContext, useEffect } from 'react'
import AdminContext from '../../../../../context/AdminContext.jsx';
import { theme } from '../../../../../theme/index.jsx';
import Empty from '../../../../reusable-ui/Empty.jsx';
import { getIndex, isEmpty } from '../../../../../utils/arrays.jsx';
import Loader from '../../../order/menu/Loader.jsx';
import { styled } from 'styled-components';
import { initialiseCustomers } from '../../../order/helpers/initialiseUserSession.jsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { menuAnimation } from '../../../../../theme/animations.jsx';
import CustomerCard from './CustomerCard'
import { checkIfProductIsClicked } from '../../../order/menu/helper/helpers.jsx';

export default function Customers() {

    const { customers, setCustomers, userId, isModeAdmin, deleteCustomer, selectCustomer, selectedCustomer } = useContext(AdminContext)

    useEffect(() => {
        initialiseCustomers(userId, setCustomers)
    }, [])

    const title = "La liste de clients est vide"
    const description = "Cliquez ci-dessous pour la réinitialiser"
    const label = "Générer de nouveaux clients"

    const handleReset = () => { } // A CHANGER

    const handleDelete = (event, id) => {
        event.stopPropagation()
        deleteCustomer(id)
    }

    const handleClick = (id) => {
        { isModeAdmin && selectCustomer(id) }
    }


    // Affichage:
    if (customers === undefined) return <Loader />
    if (isEmpty(customers)) return <Empty description={description} title={title} label={label} onClick={handleReset} />

    return (
        <TransitionGroup component={CustomersStyled} className='customers'>
            {customers.slice().reverse().map(({ id, name, surname, index, phoneNumber, address }) => {
                return (
                    <CSSTransition
                        classNames={"animation-card"}
                        key={id}
                        timeout={300}
                    >
                        <div className="customer">
                            <CustomerCard
                                key={id}
                                index={getIndex(id, customers) + 1}
                                name={name}
                                surname={surname}
                                city={address.city}
                                phoneNumber={phoneNumber}
                                showDeleteButton={isModeAdmin}
                                onDelete={(event) => handleDelete(event, id)}
                                onClick={() => handleClick(id)}
                                isSelected={checkIfProductIsClicked(id, selectedCustomer.id)}
                            />
                        </div>
                    </CSSTransition>
                )
            })}
        </TransitionGroup>
    )
}


const CustomersStyled = styled.div`
    background: ${theme.colors.background_white};
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    padding: 0 25px;

    &:hover {
        scrollbar-color: initial;
    }
    .customer {
        /* border: 1px solid red; */
        &:hover{
            transform:scale(1.05);
            transition: ease-out ${theme.animation.speed.slow};
        }
    }
    ${menuAnimation}
`;