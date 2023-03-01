import React from 'react';
import {FcFullTrash} from "react-icons/fc";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_BASKET, DELETE, INCREASE_QUANTITY} from "../../../Redux/ActionType";

const BasketRow = ({el}) => {
    const {currencies, defaultCurrency} = useSelector(s => s)
    const deleteFrom = (id) => {
        let baskeds = JSON.parse(localStorage.getItem('baskeds'))
        baskeds = baskeds.filter(el => {
            return el.id !== id
        })
        localStorage.setItem('baskeds', JSON.stringify(baskeds))
        dispatch({type: DELETE, payload: id})
    }
    const increaseQuantity = (id) => {
        dispatch({type: INCREASE_QUANTITY, payload: id})
    }
    const decreaseQuantity = (product) => {
        dispatch({type: ADD_TO_BASKET, payload: product})
    }

    const dispatch = useDispatch()
    return (
        <tr className=" dark:bg-gray-800 text-white">
            <th scope="row"
                className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className="px-6  py-4">
                <img src={el.image} width={45} alt=""/>
            </td>
            <td className="px-6 flex items-center mt-4 py-4">
                <span onClick={() => decreaseQuantity(el)}
                      className='mx-2 cursor-pointer text-xl text-blue-600'>
                    <AiOutlinePlus/>
                </span>
                {el.quantity}
                <span onClick={() => increaseQuantity(el.id)}
                      className={`mx-2 cursor-pointer text-xl ${el.quantity > 1 ? 'text-blue-600' : 'opacity-50'}`}>
                    <AiOutlineMinus/>
                </span>
            </td>
            <td className="px-6 py-4">
                {el.price * el.quantity * currencies[defaultCurrency]}
            </td>
            <td className="px-6 py-4">
                <FcFullTrash onClick={() => deleteFrom(el.id)} className='text-2xl cursor-pointer'/>
            </td>
        </tr>

    );
};

export default BasketRow;