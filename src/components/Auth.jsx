import React, { useEffect } from 'react';
import Firebase from '../services/firebase.js';
import { useHistory } from 'react-router-dom';
import { sendGetRequest, sendPostRequest } from '../apis';
import {connect} from 'react-redux'
import {setCurrentUser, setImageUrl} from '../reducers/gameDataActions'
import {auth, createUserProfileDocument} from '../services/firebase'

function storeUser(props)
{

  const { setCurrentUser , setImageUrl} = props;
    
    // var unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     console.log(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   }
      
    //   setCurrentUser(userAuth);
      

    // });
    console.log(props);
    setImageUrl(props.imageUrl);
}

const Auth = (props) => {
  const history = useHistory();

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        props.setCurrentUser(user)
        props.setImageUrl(user.photoURL)
        history.push('/theater');
      }
    });

    // Sample API requests
    sendGetRequest(`sample-get-request?param=1`).then(response => console.log(response));
    sendPostRequest(`sample-post-request`, {postParam: 1}).then(response => console.log(response));
  }, []);
  const redirect = () => {
    const provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithPopup(provider);
  };

  return ( 
    <div 
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1> Remo Coding Challenge Join Room </h1>
      <button onClick={redirect}> Login With Google </button>
    </div> 
  );
};
const mapDispatchToProps = dispatch => (
  {
    setCurrentUser : function (user){
      dispatch(setCurrentUser(user))
    },

    setImageUrl : function (imageUrl){
      dispatch(setImageUrl(imageUrl))
    },
  }
)

const mapStateToProps = ({user}) => (
    {
        currentUser : user.currentUser,
        imageUrl : user.imageUrl
    }
  )

export default connect(mapStateToProps,mapDispatchToProps)(Auth);