import React from 'react';
import BasketRow from "./BasketRow";
import {useSelector} from "react-redux";

const BasketTable = () => {
    const {currencies,defaultCurrency} = useSelector(s => s)
const {basked} = useSelector(s => s)
    localStorage.setItem('baskeds', JSON.stringify(basked))
    const totalPrice = basked.reduce((acc, el) => {
        return acc + el.price * el.quantity
    }, 0) * currencies[defaultCurrency]
    return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-[#39414F] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6  py-3 ">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        Price  <span className='text-blue-600'>({defaultCurrency})</span>
                    </th>
                    <th scope="col" className="px-6 py-3 ">

                    </th>
                </tr>
                </thead>
                <tbody className='bg-[#1F2937]'>
                {
                    basked.map(el => <BasketRow el={el}/>)
                }
                </tbody>
                <tfoot>
                <tr className="dark:bg-gray-600 bg-gray-700 text-white">
                    <th scope="row" className="px-6 py-3 text-base">Total</th>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3">3</td>
                    <td className="px-6 py-3">{totalPrice} {defaultCurrency}</td>
                    <td className="px-6 py-3"></td>
                </tr>
                </tfoot>
            </table>

        </>
    );
};

export default BasketTable;