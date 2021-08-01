import * as types from "../constants/products.constant";

const initialState = {
    "loading": false,
    "data": [],
    "totalPage": null,
    "selectedProduct": {},
    "categories": [],
    "productsByCategory": [],
    // "PBCtotalPages": null,
};


const productsReducer = (state = initialState , action) => {
    const {type, payload} = action;

    switch (type) {
        case types.GET_PRODUCTS_REQUEST:
            console.log("request")
            return {...state, loading:"true"};
        case types.GET_PRODUCTS_SUCCESS:
            console.log("products data", payload)
            return {...state, "loading": false, "data": payload.products, "totalPage": payload.totalPages};
        case types.GET_PRODUCTS_FAILURE:
             console.log("failure")
            return {...state, "loading": false}; 
        case types.GET_DETAIL_SUCCESS:
            return {...state, "loading": false, "selectedProduct": payload};
        case types.GET_CATEGORIES_SUCCESS:
            return {...state, "loading": false, "categories": payload};
        case types.GET_PRODUCTSBYCATEGORY_SUCCESS:
            return {...state, "loading": false, "totalPage": payload.totalPages, "productsByCategory": payload.products}

        // case types.GET_DETAIL_SUCCESS:
        //     // console.log("book detail", payload)
        //     return {...state, selectedBook: payload, loading: false};
     
        // case types.GET_READINGBOOKS_SUCCESS:
        //     console.log("reading", payload)
        //     return {...state, readingList: payload, loading: false};
        // case types.DELETE_BOOKS_SUCCESS:
        //     // console.log("remove", payload)
        //     return {...state, readingList: payload}
        default:
            return state;
    }
};

export default productsReducer;