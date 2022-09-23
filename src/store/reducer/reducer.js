import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/actions";

const initialState = {
    isLoading: false,
    users: [],
    error: '',
    user: '',
}

const reducerFetchData = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_PENDING:
            return state;
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: null
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                error: null
            };

        case "DELETE_USER": 
            return {
                ...state,
                isLoading: false,
            }
        
        case "EDIT_USER":
            return {
                ...state,
                user: action.payload
            }

        case "ADD_USER":
            console.log(action.payload)
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        
        default:
            return state;
    }
}

export {
    reducerFetchData,
} 