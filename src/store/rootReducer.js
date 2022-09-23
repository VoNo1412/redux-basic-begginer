import { combineReducers } from "redux";
import { reducerFetchData,  } from "./reducer/reducer";
const rootReducer = combineReducers({
    fetchData: reducerFetchData
});

export default rootReducer