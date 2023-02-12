import { createStore } from "redux";
import { combineReducers } from "redux";

import TodoBOXES from "../modules/TodoBOXES";

const rootReducer = combineReducers({
    TodoBOXES:TodoBOXES, 
});
const store = createStore(rootReducer);

export default store;