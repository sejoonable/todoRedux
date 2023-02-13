import { createStore } from "redux";
import { combineReducers } from "redux";

import TodoBOXES from "../modules/TodoBOXES";
import naeyong from "../modules/naeyong";
import jaemok from "../modules/jaemok";

const rootReducer = combineReducers({
    TodoBOXES:TodoBOXES, naeyong:naeyong, jaemok:jaemok
});
const store = createStore(rootReducer);

export default store;