import { combineReducers } from 'redux';
import notes from "./notes";
import auth from "./auth";


const ponyApp = combineReducers({
    notes, auth,
})

export default ponyApp;
