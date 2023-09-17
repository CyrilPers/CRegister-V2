import React from 'react'

export default function SearchCustomer({ placeholder, data, handleClick, handleChange, value, icon }) {
    return (
        <>
            <div className='inputSearch'>
                <input
                    type="text"
                    name="search-bar"
                    id="search-bar"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
                <icon className="icon" />
            </div>
            <ul>
                {value &&
                    data.filter((element) => {
                        return element.name.includes(value) ||
                            element.surname.includes(value) ||
                            element.phoneNumber.includes(value);
                    }).map((element) => <li onClick={() => handleClick(element.name)} key={element.id}>{element.name} {element.surname} </li>)
                }
            </ul>
        </>
    )
}
