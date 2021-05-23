import React, { useContext } from 'react';
import { CatagoryContext } from '../../App';
import Catagories from '../Catagories/Catagories';

const Home = () => {
    const category = useContext(CatagoryContext)
    return (
        <div>
            <h1>This is Home : {category}</h1>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;