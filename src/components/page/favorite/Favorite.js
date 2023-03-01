import React from 'react';
import ProductCart from "../ProductCart/ProductCart";
import {useSelector} from "react-redux";

const Favorite = () => {
    const {favorite} = useSelector(s => s)
    return (
        <div className='container'>
            <div className='flex flex-wrap mx-10 justify-center py-32'>
                {
                    favorite.map(el => (
                        <ProductCart product={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorite;