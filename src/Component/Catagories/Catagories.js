import React, { useContext, useEffect, useState } from 'react';
import { CatagoryContext } from '../../App';
import CatagoryDetails from '../CatagoryDetails/CatagoryDetails';

const allProduct = [
    {
        name: 'Lenovo',
        catagroy : 'laptop'
    },
    {
        name : 'Asus',
        catagroy: 'laptop'
    },
    {
        name: 'Dell',
        catagroy: 'laptop'
    },
    {
        name: 'samsung',
        catagroy: 'mobile'
    },
    {
        name : 'Nokia',
        catagroy: 'mobile'
    },
    {
        name: 'appple',
        catagroy: 'mobile'
    },
    {
        name: 'canon',
        category: 'camera'
    },
    {
        name: 'Nikkon',
        catagroy: 'camera'
    },
    {
        name:'sony',
        catagroy: 'camera'
    }
]

const Catagories = () => {
    const [category] = useContext(CatagoryContext);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        console.log({category})
        const matchProduct = allProduct.filter(pd => pd.category === category.toLowerCase())
        setProduct(matchProduct)
    }, [category])
     return (
        <div>
            <h2>This is your Catagories: {category} </h2>
            {
                product.map(pd => <CatagoryDetails product={pd}></CatagoryDetails>)
            }
        </div>
    );
};

export default Catagories;