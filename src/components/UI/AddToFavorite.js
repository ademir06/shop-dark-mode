import React from 'react';
import {BsFillHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {ADD_ADN_DELETE_FAVORITE} from "../../Redux/ActionType";
import {FaTrash} from "react-icons/fa";

const AddToFavorite = ({product}) => {
    const dispatch = useDispatch()
    const {favorite} = useSelector(s => s)
    const found = favorite.some(el => el.id === product.id)
    const addToFavorite = (item) => {
        dispatch({type: ADD_ADN_DELETE_FAVORITE, payload: item})
        let favoriteDe = JSON.parse(localStorage.getItem('favorites'))
        const found = favoriteDe.find(el => el.id === item.id)
        if (!found) {
            favoriteDe = [...favoriteDe, {...item, isLiked: true}]
        } else {
            favoriteDe = favoriteDe.filter(el => el.id !== item.id)
        }
        localStorage.setItem('favorites', JSON.stringify(favoriteDe))
    }
    return (
        <>
            <button onClick={() => addToFavorite(product)}
                    className={`${found ? 'text-red-600' : 'text-white'} bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
                {
                    product.isLiked ? <FaTrash className='text-white'/> : <BsFillHeartFill/>

                }
            </button>
        </>


    );
};

export default AddToFavorite;