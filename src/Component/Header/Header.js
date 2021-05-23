import React, { useContext, useState } from 'react';
import { CatagoryContext } from '../../App';

const Header = (props) => {
    const [category, setCount] = useContext(CatagoryContext)
    return (
        <div>
            <h1>This is Header : {category} </h1>
            <button onClick={() => setCount('laptop')}>laptop</button>
            <button onClick={() => setCount('Mobile')}>Mobile</button>
            <button onClick={() => setCount('Camera')}>Camera</button>
        </div>
    );
};

export default Header;