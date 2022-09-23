export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const ADD_USER = "ADD_USER";
export const DEL_USER = "DEL_USER";
const URL = 'http://localhost:3001/users';


function fetchUsersPending() {
    return {
        type: FETCH_USERS_PENDING
    }
}

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        error: error
    }
}

function fetchProducts() {
    return async (dispatch) => {
        dispatch(fetchUsersPending());
        await fetch(URL)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchUsersSuccess(data))
            })
            .catch(error => dispatch(fetchUsersError(error)))
    }
}

function delUser() {
    return {
        type: "DELETE_USER",
    }
}

function postUser(data) {
    return async (dispatch) => {
        dispatch(fetchUsersPending());
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(user => user && dispatch(fetchProducts()))
            .catch(error => dispatch(fetchUsersError(error)))
    }
}

function deleteUser(id) {
    return async (dispatch) => {
        await fetch(`${URL}/${id}`, { method: 'DELETE' })
            .then(user => {

                user &&
                    dispatch(delUser())
                dispatch(fetchProducts())
            })
            .catch(error => dispatch(fetchUsersError(error)))
    }
}

function getUser(id) {
    return async (dispatch) => {
        await fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(user => {
                dispatch({ type: 'EDIT_USER', payload: user })
            })
    }
}

function updateUser(user, id) {
    return async dispatch => {
        await fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(user => user && dispatch(fetchProducts()))
            .catch(error => dispatch(fetchUsersError(error)))
    }
}

export {
    fetchProducts,
    postUser,
    deleteUser,
    getUser,
    updateUser
}