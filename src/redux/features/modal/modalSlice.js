export function modalUserReducer(state = {}, action) {
    if (action.type === 'toggle-modal') {
        return {
            flag: action.payload.flag
        };
    }
    return state;
}
export const initialValue = {
    flag:  false
}

export function selectModal(state) {
    return state.modal.flag;
}

export function toggleModal (flag) {
    return {
        type: 'toggle-modal',
        payload: {
            flag: flag
        }
    }
}