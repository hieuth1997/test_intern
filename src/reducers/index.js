import { combineReducers } from 'redux';
import topMusic from './topmusic';
import searchMusic from './searchmusic'
const appReducer = combineReducers(
    { 
        topMusic,
        searchMusic,
        

    }
)
export default appReducer;