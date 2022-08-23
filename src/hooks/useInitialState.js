import { useState } from 'react';

const initialState = {
    cart: [],
}

const unseInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };
    return {
        state,
        addToCart
    }
}

export default unseInitialState;
