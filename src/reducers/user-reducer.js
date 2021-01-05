
const INTIAL_STATE = {
    currentTable: "",
    currentUser: null,
    imageUrl: "",
}
const userReducer = (state = INTIAL_STATE, action ) => {
    
    switch(action.type){
        case 'MOVE_TABLES':
            return {
                ...state,
                currentTable: action.payload
            }
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