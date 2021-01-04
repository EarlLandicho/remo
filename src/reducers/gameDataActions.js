export const setCurrentUser = user => (
    {
        type: 'SET_CURRENT_USER', 
        payload: user
    }
)

export const setImageUrl= imageUrl => (
    {
        type: 'SET_IMAGE_URL', 
        payload: imageUrl
    }
)