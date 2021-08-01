import { combineReducers } from "redux";
import productsReducer from "./product.reducer.js";
import userReducer from "./user.reducer.js";
// import cartReducer from "./cart.reducer";

export default combineReducers({
    productsReducer: productsReducer,
    userReducer: userReducer,
});