
const INTIAL_STATE = {
    users: [
        {user:null},
        {user:null},
        {user:null},
        {user:null},
        {user:null},
        {user:null}
    ],
    lastTable: ""

}
const tableReducer = (state = INTIAL_STATE, action ) => {
    
    switch(action.type){
        case 'ADD_USER_TO_TABLE':
            return {
                ...state,
                users: insertUser(action.payload, state.users)
            }
        case 'REMOVE_USER_FROM_TABLE':
            return {
                ...state,
                users: removeUser(action.payload, state.users)
            }
        case 'SET_LAST_TABLE':
            return {
                ...state,
                lastTable : action.payload
            }
        default:
            return state
    }
}

function insertUser(user, users)
{
    for(const element of users)
    {
        if(element.user == null)
        {
            
            element.user = user;
            return users;
        }
    }
    return users
}

function removeUser(user, users)
{
    for(const element of users)
    {
        if(element.user.uid == user.uid)
        {
            
            element.user = null;
            return users;
        }
    }
    return users
}


export default tableReducer