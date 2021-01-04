import * as firebase from 'firebase';
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication

// TODO: fill in your firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAlKlxBDEHOm-djBHRlOheoFtgoMKSNXzU",
    authDomain: "remo-5f313.firebaseapp.com",
    projectId: "remo-5f313",
    storageBucket: "remo-5f313.appspot.com",
    messagingSenderId: "112386354525",
    appId: "1:112386354525:web:6dc68a544f146293de4cb4",
    measurementId: "G-MW7B9SD5BE"
};

firebase.initializeApp(firebaseConfig);

// Assigning your firebase authentication library
export const auth = firebase.auth()
// Assigning your firebase firestore library
export const firestore = firebase.firestore()



export const createUserProfileDocument = async (user, additionalData) => {

    console.log('check3')
    // If not user object doesn't exist we are not going to create document
    if(!user) return 


    // User Reference Document 
    const userRef = firestore.doc(`users/${user.uid}`) 

    // Get method to get those details
    const snapShot = await userRef.get()
    if(!snapShot.exists){
        // This is the details we have to store in firestore as a document
        const {email, displayName} = user
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log("Error Creating a User Document", error.message)
        }
    }

    return userRef

}

// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase;