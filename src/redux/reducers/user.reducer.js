import * as types from "../constants/user.constants"

const initialState = {
    "data": {}
}

const userReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.POST_USERLOGIN_REQUEST:
            return state;
        case types.POST_USERLOGIN_SUCCESS:
            return {"data": payload};
        case types.POST_USERLOGIN_FAILURE:
            return state;
        case types.POST_ADDTOCART_SUCCESS:
            return {"data": payload}
        default:
            return state;
    }
}

export default userReducer;