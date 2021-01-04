
const INTIAL_STATE = {
    currentUser: null,
    imageUrl: ""
}
const userReducer = (state = INTIAL_STATE, action ) => {
    
    switch(action.type){
        case 'UPDATE_MOVE':
            return state
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'SET_IMAGE_URL':
            return {
                ...state,
                imageUrl: action.payload
            }
        default:
            return state
    }
}


export default userReducer