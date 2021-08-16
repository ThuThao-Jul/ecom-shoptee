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
        localStorage.setItem("accessToken", res.data.data.accessToken)
        // api.defaults.headers.common["authorization"]= "Bearer " + res.data.data.accessToken;
        console.log("api", api.defaults.headers.common["authorization"])
        toast.success('Loged in successfully! Enjoy your shopping.')

        // GET Current User Profile 
        const currentProfile = await api.get('https://cs-ecom-be.herokuapp.com/api/users/me');
        console.log('current user data', currentProfile.data.data.user);
        dispatch({ type: types.POST_USERLOGIN_SUCCESS, payload: currentProfile.data.data.user});
    } catch (error) {
        // toast.error(error.message);
        dispatch({type: types.POST_USERLOGIN_FAILURE, payload: error});
    }
}



const postToCart = ({productId, quantity}) => async (dispatch) => {

    dispatch({ type: types.POST_ADDTOCART_REQUEST, payload: null});
    try {
        let url = `https://cs-ecom-be.herokuapp.com/api/users/cart`;
        console.log(url)
        await api.post(url, {productId, quantity});
        toast.success('This product has been added to your cart!')
        
        //   GET Current User Profile 
        const currentProfile = await api.get('https://cs-ecom-be.herokuapp.com/api/users/me');
        console.log('current user data', currentProfile.data.data.user);
        dispatch({ type: types.POST_USERLOGIN_SUCCESS, payload: currentProfile.data.data.user});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.POST_ADDTOCART_FAILURE, payload: error});
    }
}

const deleteCart = () => async (dispatch) => {

    dispatch({ type: types.DELETE_CARTPRODUCTS_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/users/cart`;
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


const postOrders = () => async (dispatch) => {

    dispatch({ type: types.POST_ORDER_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/orders`;
        const res = await api.post(url);
        toast.success('Ordered sucessfully. You can make your payment now.')
        console.log("order", res.data.data.order)

        dispatch({ type: types.POST_ORDER_SUCCESS, payload: res.data.data.order});
      
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.POST_ORDER_FAILURE, payload: null})
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



const postLogOut = () => (dispatch) => {

    dispatch({ type: types.POST_LOGOUT_REQUEST, payload: null});
    try {
        toast.success('You are logged out!')
        localStorage.setItem("accessToken", null)
        dispatch({ type: types.POST_LOGOUT_SUCCESS, payload: null});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.POST_LOGOUT_FAILURE, payload: error});
    }
}

const getDetailCart = (productId) => async (dispatch) => {

    dispatch({ type: types.GET_DETAILCART_REQUEST, payload: null});
    try {
        let url = `https://cs-ecom-be.herokuapp.com/api/products/${productId}`;
        if (productId) {
        const res = await api.get(url);

        dispatch({ type: types.GET_DETAILCART_SUCCESS, payload: res.data.data.product})};
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.GET_DETAILCART_FAILURE, payload: error});
    }
}

export const userActions = {postNewUser, postLogIn, postToCart, deleteCart, postOrders, putPayment, postLogOut, getDetailCart}