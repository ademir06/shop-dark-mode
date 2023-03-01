import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {BsGithub} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CHOOSE_THE_CURRENCY} from "../../Redux/ActionType";

const Header = ({getDark, dark}) => {
    const dispatch = useDispatch()
    const {defaultCurrency} = useSelector(s => s)
    const chooseCurrency = (e) => {
        let currency = e.target.value
        localStorage.setItem('currency', currency)
        dispatch({type: CHOOSE_THE_CURRENCY, payload: e.target.value})
    }
    const selectValue = {
        $: "USE",
        rub: 'RUB',
        som: 'KGS',
        ten: 'KZT',
        sum: 'UZS'
    }
    return (
        <div>
            <header>
                <nav className="bg-[#1F2937] border-gray-200 py-8 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                    <div className="container flex flex-wrap items-center justify-between mx-auto w-[90%]">
                        <Link to={'/'} className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9"
                                 alt=""/>
                            <span
                                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Motion web</span>
                        </Link>
                        <div className="flex md:order-2">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden outline-none text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br border-none from-gray-700 to-gray-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white">
                                  <span
                                      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#1F2937] text-white py-3 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                   log in
                                  </span>
                            </button>
                            <button
                                className="text-white bg-gray-800 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <a href="https://github.com/ademir06/redux-shop"></a>
                                <BsGithub className='text-xl'/>

                            </button>

                            <button onClick={() => getDark(dark)}
                                    id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button"
                                    className="text-gray-500 text-gray-400 mx-6 hover:bg-gray-100 hover:bg-gray-700 h-[50px] w-[50xp]   rounded-xl text-sm p-2.5">
                                {
                                    dark ? <svg aria-hidden="true" id="theme-toggle-light-icon" className="w-5 h-5"
                                                fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg> : <svg aria-hidden="true" id="theme-toggle-dark-icon" className="w-5 h-5"
                                                  fill="currentColor" viewBox="0 0 20 20"
                                                  xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                    </svg>
                                }

                                <span className="sr-only">Toggle dark mode</span>
                            </button>
                            <select onChange={chooseCurrency}
                                    id="countries "
                                    className="bg-gray-700  text-white  outline-none border-gray-300 text-gray-900 bg-gray-700  outline-none   text-sm rounded-lg focus:ring-blue-500 focus:border-gray-100 block w-[50px] h-[50px]  dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-100">
                                {
                                    Object.keys(selectValue).map(el => (
                                        <option value={el} selected={defaultCurrency === el}>{selectValue[el]}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div
                            className=" header-manu items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-cta">
                            <NavLink to={'/'}
                                     className="block py-2 text-2xl pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2F3C42] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</NavLink>
                            <NavLink to={'/favorite'}
                                     className="block py-2 text-2xl pl-3 mx-8 pr-4 text-gray-500  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2F3C42] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Favorite</NavLink>
                            <NavLink to={'/basket'}
                                     className="block py-2 text-2xl pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#2F3C42] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Basket</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;