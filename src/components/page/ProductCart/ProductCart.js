import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddToFavorite from "../../UI/AddToFavorite";
import {SlBasket} from "react-icons/sl";
import {useNavigate} from "react-router-dom";
import {ADD_TO_BASKET, ADD_TO_FAVORITE} from "../../../Redux/ActionType";
import {BsFillHeartFill} from "react-icons/bs";
import favorite from "../favorite/Favorite";

const ProductCart = ({product}) => {
    const [isLiked, setIsLiked] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const addToBasket = (product) => {
        let baskeds = JSON.parse(localStorage.getItem('baskeds')) || []
        baskeds = [...basked, {...product, quantity: 1}]
        localStorage.setItem('baskeds', JSON.stringify(baskeds))
        dispatch({type: ADD_TO_BASKET, payload: product})
    }

    const addToFavorite = (item) => {
        dispatch({type: ADD_TO_FAVORITE, payload: product})
        let favoriteTe = JSON.parse(localStorage.getItem('favorites')) || []
        const found = favoriteTe.find(el => el.id === product.id)
        if (!found) {
            favoriteTe = [...favoriteTe, {...product, isLiked: true}]
        }
        localStorage.setItem('favorites', JSON.stringify(favoriteTe))
        if (!product.isLiked) {
            setIsLiked(true)
            setTimeout(() => setIsLiked(false), 1000)
        }
    }

    const {basked, currencies, defaultCurrency} = useSelector(s => s)
    const foundProduct = basked.some(el => el.id === product.id)
    return (

        <div
            className="max-w-sm bg-[#202839] basis-1/3  my-5 border mx-3  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='relative'>
                <img onDoubleClick={() => addToFavorite(product)}
                     className="rounded-t-lg" src={product.image} alt=""/>


                <BsFillHeartFill
                    className={`absolute top-[50%] left-[45%] ${isLiked ? 'scale-2' : 'scale-0'}  transition-[.2ms] text-red-500 text-4xl rotate-[-12deg]`}/> :
                ''

            </div>

            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-[#747E8A] text-[15] dark:text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-[#747E8A] text-[20] dark:text-gray-400">{product.price * currencies[defaultCurrency]} {defaultCurrency}</p>

                <div className='flex justify-center'>
                    <AddToFavorite product={product}/>
                    {
                        foundProduct ? <button onClick={() => navigate('/basket')}
                                               className="flex items-center   text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                перейти в<SlBasket className='ml-2'/>
                            </button>
                            : <button type="button" onClick={() => addToBasket(product)}
                                      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                добавить в корзину
                            </button>
                    }

                </div>
            </div>
        </div>
    )
        ;
};

export default ProductCart;