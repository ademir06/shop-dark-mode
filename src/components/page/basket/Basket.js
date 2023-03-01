import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basked} = useSelector(s => s)
    return (
        <div className='container'>
            <div className="relative my-14 overflow-x-auto">
                {
                    basked.length ? <BasketTable/> :
                 <div>
                     <Link to={'/'}> <div className='flex items-center justify-center bg-gray-700 cursor-pointer w-[30%] mx-auto border-none h-16 my-20'>NOT BASKET</div></Link>
                 </div>
                }
            </div>
        </div>
    );
};

export default Basket;