import { toast } from "react-toastify";
import api from "../../apiService"
import * as types from "../constants/products.constant";

const getProducts = (page, limit, search) => async (dispatch) => {
    
    dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/products?page=${page}&limit=${limit}`;
        if (search) {
            url += `&search=${search}`};
        console.log(url)
        const res = await api.get(url);
        console.log("success", res.data)
        dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data.data});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.GET_PRODUCTS_FAILURE, payload: error});
    }
};

const getDetailProduct = (productId) => async (dispatch) => {

    dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/products/${productId}`;
        if (productId) {
        const res = await api.get(url);

        dispatch({ type: types.GET_DETAIL_SUCCESS, payload: res.data.data.product})};
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.GET_PRODUCTS_FAILURE, payload: error});
    }
}

const getCategories = () => async (dispatch) => {

    dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/categories`;
        const res = await api.get(url);

        dispatch({ type: types.GET_CATEGORIES_SUCCESS, payload: res.data.data.categories});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.GET_PRODUCTS_FAILURE, payload: error});
    }
}

const getProductsByCategory = (id) => async (dispatch) => {

    dispatch({ type: types.GET_PRODUCTS_REQUEST, payload: null});
    try {
        let url = `http://cs-ecom-be.herokuapp.com/api/products/categories/${id}`;
        const res = await api.get(url);

        dispatch({ type: types.GET_PRODUCTSBYCATEGORY_SUCCESS, payload: res.data.data});
    } catch (error) {
        toast.error(error.message);
        dispatch({type: types.GET_PRODUCTS_FAILURE, payload: error});
    }
}



// const postReadingList = (book) => async (dispatch) => {

//     dispatch({ type: types.POST_BOOKS_REQUEST, payload: null});
//     try {
//         let url = `${process.env.REACT_APP_BACKEND_API}/favorites`;
//         if (book) {
//         console.log(url)
//         const res = await api.post(url, book)
//         toast.success("The book has been added to the reading list!")
//         dispatch({ type: types.POST_BOOKS_SUCCESS, payload: res.data})};
//     } catch (error) {
//         toast.error(error.message);
//         dispatch({type: types.POST_BOOKS_FAILURE, payload: error});
//     }
// }

// const getReadingList = () => async (dispatch) => {

//     dispatch({ type: types.GET_BOOKS_REQUEST, payload: null});
//     try {
//         let url = `${process.env.REACT_APP_BACKEND_API}/favorites`;
//         console.log(url)
//         const res = await api.get(url)
//         dispatch({ type: types.GET_READINGBOOKS_SUCCESS, payload: res.data});
//     } catch (error) {
//         toast.error(error.message);
//         dispatch({type: types.GET_BOOKS_FAILURE, payload: error});
//     }
// }

// const removeBook = (bookId) => async (dispatch) => {

//     dispatch({ type: types.DELETE_BOOKS_REQUEST, payload: null});
//     try {
//         let url = `${process.env.REACT_APP_BACKEND_API}/favorites/${bookId}`;
//         if (bookId) {
//         console.log(url)
//         const res = await api.delete(url)
//         // console.log(updatedRes.data)
//         toast.success("The book has been removed");
//         dispatch({ type: types.DELETE_BOOKS_SUCCESS, payload: res.data})};
//     } catch (error) {
//         toast.error(error.message);
//         dispatch({type: types.DELETE_BOOKS_FAILURE, payload: error});
//     }
// }


export const productActions = {getProducts, getDetailProduct, getCategories, getProductsByCategory};