import {combineReducers} from 'redux'
import headerReducer from './../common/header/store/reducers'

export default combineReducers({
    header: headerReducer
})