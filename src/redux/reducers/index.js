import { combineReducers } from "redux";
import { fetchProductReducer, fetchProductsReducer} from "./productReducer";
const reducers = combineReducers({
    allProducts:fetchProductsReducer,
    product:fetchProductReducer,  
})
export default reducers