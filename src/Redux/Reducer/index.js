import {
    ADD_ADN_DELETE_FAVORITE,
    ADD_TO_BASKET,
    ADD_TO_FAVORITE, CHOOSE_THE_CURRENCY,
    DELETE,
    GET_PRODUCT,
    INCREASE_QUANTITY
} from "../ActionType";

const initialStore = {
    product: [],
    basked: JSON.parse(localStorage.getItem('baskeds')) || [],
    favorite: JSON.parse(localStorage.getItem('favorites')) || [],
    currencies: {
        som: 1,
        $: 0.012,
        rub: 0.8,
        ten: 5.41,
        sum: 131.69,
    },
    defaultCurrency: localStorage.getItem('currency') || 'som'
}


export const Reducer = (state = initialStore, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state, product: action.payload}
        case ADD_TO_BASKET:
            const found = state.basked.find(el => el.id === action.payload.id)
            if (found) {
                return {
                    ...state, basked: state.basked.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el
                    )
                }
            }
            return {...state, basked: [...state.basked, {...action.payload, quantity: 1}]}
        case INCREASE_QUANTITY:
            return {
                ...state, basked: state.basked.map(el => {
                        if (el.id === action.payload) {
                            if (el.quantity > 1) {
                                return {...el, quantity: el.quantity - 1}
                            } else {
                                return el
                            }
                        } else {
                            return el
                        }

                    }
                )
            }
        case DELETE :
            return {...state, basked: state.basked.filter(el => el.id !== action.payload)}
        case ADD_ADN_DELETE_FAVORITE:
            const foundFavorite = state.favorite.find(el => el.id === action.payload.id)
            if (foundFavorite) {
                return {...state, favorite: state.favorite.filter(el => el.id !== action.payload.id)}
            } else {
                return {...state, favorite: [...state.favorite, {...action.payload, isLiked: true}]}
            }
        case ADD_TO_FAVORITE: {
            const foundProduct = state.favorite.find(el => el.id === action.payload.id)
            if (!foundProduct) {
                return {...state, favorite: [...state.favorite, {...action.payload, isLiked: true}]}
            }
            return state
        }

        case CHOOSE_THE_CURRENCY: {
            return {...state, defaultCurrency: action.payload}
        }
        default:
            return state
    }
}