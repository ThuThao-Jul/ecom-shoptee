import * as types from "../constants/user.constants"

const initialState = {
    "login": false,
    "data": {},
    "inCart": [],
}

const userReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.POST_USERLOGIN_REQUEST:
            return state;
        case types.POST_USERLOGIN_SUCCESS:
            return {...state, "login": true, "data": payload};
        case types.POST_USERLOGIN_FAILURE:
            return state;
        case types.POST_ADDTOCART_SUCCESS:
            return {...state, "data": payload};
        case types.DELETE_CARTPRODUCTS_SUCCESS:
            return {...state, "data": payload}
        default:
            return state;
    }
}

export default userReducer;