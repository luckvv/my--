import React from 'react'
import {Provider} from 'react-redux'
import {GlobalStyle} from './style.js';
import Header from './common/header/index.jsx'
import store from './store'

export default class App extends React.Component{
    render(){
        return(
            <div className="one">
                <GlobalStyle/>
                <Provider store={store}>
                   <Header/>
                </Provider>
            </div>
        )
    }
}