import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';

const CatagoryDetails = (props) => {
    console.log(props)
    const {name} = props.product

    return (
        <div>
            <h4>Select your Catagories: {name}</h4>

        </div>
    );
};

export default CatagoryDetails;