import React from 'react'
import { Provider } from "react-redux";
import {store} from 'store'
import {People} from 'people'


export const App = () => {
    return (
        <Provider store={store}>
        <People />

        </Provider>
    )
}