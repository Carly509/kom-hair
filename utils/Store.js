import Cookies from 'js-cookie';
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
    darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
};

function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}