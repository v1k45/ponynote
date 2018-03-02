import { combineReducers } from 'redux';
import notes from "./notes";


const ponyApp = combineReducers({
    notes,
})

export default ponyApp;
