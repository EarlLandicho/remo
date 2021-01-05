export const setCurrentUser = user => (
    {
        type: 'SET_CURRENT_USER', 
        payload: user
    }
)

export const setImageUrl = imageUrl => (
    {
        type: 'SET_IMAGE_URL', 
        payload: imageUrl
    }
)

export const moveTables = newTable => (
    {
        type: 'MOVE_TABLES',
        payload: newTable
    }
)

export const addUserToTable = (user) => (
    {
        type: 'ADD_USER_TO_TABLE',
        payload: user
    }
)

export const removeUserFromTable = (user) => (
    {
        type: 'REMOVE_USER_FROM_TABLE',
        payload: user
    }
)

export const setLastTable = (lastTable) => (
    {
        type: 'SET_LAST_TABLE',
        payload: lastTable
    }
)

