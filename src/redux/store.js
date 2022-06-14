import {combineReducers, createStore, applyMiddleware} from "redux";
import {modalUserReducer, initialValue} from "./features/modal/modalSlice";
import {
    initialProduct, initialProductSubSystem,
    initialProductSystem,
    productReducer, productScannerSubSystemReducer,
    productScannerSystemReducer
} from "./features/product/ProductSlice";
import {initialUser, userReducer} from "./features/user/UserSlice";
import thunk from "redux-thunk";

const store =  createStore(combineReducers({
    modal: modalUserReducer,
    product: productReducer,
    user: userReducer,
    productSystem: productScannerSystemReducer,
    productSubSystem: productScannerSubSystemReducer
}) ,{
    modal: initialValue,
    product: initialProduct,
    user: initialUser,
    productSystem: initialProductSystem,
    productSubSystem: initialProductSubSystem
}, applyMiddleware(thunk));

export default store;