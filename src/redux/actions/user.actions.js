import { toast } from "react-toastify";
import api from "../../apiService"
import * as types from "../constants/user.constants";

const postNewUser = (userData) => async (dispatch) => {

    dispatch({ type: types.POST_USER_REQUEST, payload: null});
    try {
        let url = `https://cs-ecom-be.herokuapp.com/api/auth/register`;
        console.log(url)
        const res = await api.post(url, userData);
        console.log("success", res)
        toast.success('New account created successfully')
        dispatch({ type: types.POST_USER_SUCCESS, payload: res});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.POST_USER_FAILURE, payload: error});
    }
}

const postLogIn = (dataLogIn) => async (dispatch) => {

    dispatch({ type: types.POST_USERLOGIN_REQUEST, payload: null});
    try {
        let url = `https://cs-ecom-be.herokuapp.com/api/auth/login`;
        console.log(url)
        const res = await api.post(url, dataLogIn);
        api.defaults.headers.common["authorization"]= "Bearer " + res.data.data.accessToken;
        localStorage.setItem("login", true)
        console.log("api", api.defaults.headers.common["authorization"])
        toast.success('Loged in successfully! Enjoy your shopping.')

        // GET Current User Profile 
        const currentProfile = await api.get('https://cs-ecom-be.herokuapp.com/api/users/me');
        console.log('current user data', currentProfile.data.data.user)
        dispatch({ type: types.POST_USERLOGIN_SUCCESS, payload: currentProfile.data.data.user});
    } catch (error) {
        // toast.error(error.message);
        dispatch({type: types.POST_USERLOGIN_FAILURE, payload: error});
    }
}

const postToCart = (product) => async (dispatch) => {

    dispatch({ type: types.POST_ADDTOCART_REQUEST, payload: null});
    try {
        let url = `https://cs-ecom-be.herokuapp.com/api/users/cart`;
        console.log(url)
        const res = await api.post(url, product);
        toast.success('This product has been added to your cart!')
        console.log("add to cart", res.data.data.user)
        dispatch({ type: types.POST_ADDTOCART_SUCCESS, payload: res.data.data.user});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.POST_ADDTOCART_FAILURE, payload: error});
    }
}

const deleteCart = () => async (dispatch) => {

    dispatch({ type: types.DELETE_CARTPRODUCTS_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/users/cart/`;
        console.log(url)
        const res = await api.delete(url);
        console.log("delete", res)

         // GET Current User Profile 
         const currentProfile = await api.get('https://cs-ecom-be.herokuapp.com/api/users/me');
         console.log('current user data', currentProfile.data.data.user)
        dispatch({ type: types.DELETE_CARTPRODUCTS_SUCCESS, payload: currentProfile.data.data.user});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.DELETE_CARTPRODUCTS_FAILURE, payload: error});
    }
}

const putPayment = (id) => async (dispatch) => {

    dispatch({ type: types.PUT_PAYMENT_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/users/orders/${id}/payment`;
        console.log(url)
        const res = await api.put(url);
        console.log("success", res)
        toast.success('Paid successfully! Thanks for shopping at ShopTee <3')
        dispatch({ type: types.PUT_PAYMENT_SUCCESS, payload: res.data.data.user});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.PUT_PAYMENT_FAILURE, payload: error});
    }
}

export const userActions = {postNewUser, postLogIn, postToCart, deleteCart, putPayment}