import {login} from "./userAPI";


const getLocalStorage = () => {
    let token = localStorage.getItem('token')
    let refresh = localStorage.getItem('refresh')
    if(token && refresh) {
      return {loginUser:true,msg:''}
    }
    else {
      return {loginUser:false,msg:''}
    }
}
export function userReducer(state = {}, action) {
    if (action.type === 'login') {
        // console.log(action.payload.user);
        return {
            user: action.payload.user
        };
    } 
    if (action.type === 'logout') {
        return {
            user: getLocalStorage()
        };
    }
    if (action.type === 'login-error') {
        return {
            user: action.payload.user
        };
    }
    // if (action.type === 'errorLogin') {
    //     return {
    //         user: action.payload.
    //     }
    // }
    return state;
}

export const initialUser = {
    user: getLocalStorage()
}

export function selectUser(state) {
    return state.user;
}
export function userDispatch (data) {
    const newData = Object.assign(data, {loginUser: true,msg:''});
    return {
        type: 'login',
        payload: {user: newData}
    }
}

export function userLogout() {
    localStorage.removeItem('refresh');
    localStorage.removeItem('token');
    return {
        type: 'logout'
    }
}
export function userLoginError() {
    return {
        type: 'login-error',
        payload: {user: {loginUser:false,msg:'Your email address or password is not correct'}}
    }
}
export function loginUser(data) {
    return (dispatch, getState) => {
        return login(data).then((responseUser => {
            // console.log(responseUser,"error");
            localStorage.setItem('token', responseUser.data.tokens.access.token);
            localStorage.setItem('refresh', responseUser.data.tokens.refresh.token);
            dispatch(userDispatch(responseUser.data.user))

        }))
        .catch(() => dispatch(userLoginError()))
    }
}
