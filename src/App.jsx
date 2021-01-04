import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth.jsx';
import Theater from './components/Theater';
import {connect} from 'react-redux'
import {setCurrentUser} from './reducers/gameDataActions'






class App extends React.Component {
 
  

  // unsubscribeFromAuth = null

  // componentDidMount(){
  //   const { setCurrentUser } = this.props;
    
    

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       console.log(userAuth);
  //       userRef.onSnapshot(snapShot => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         });
  //       });
  //     }

      
  //     setCurrentUser(userAuth);
  //   });
    
  // }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Auth} />
          <Route exact={true} path='/theater' component={Theater} />
        </Switch>
      </Router>
    );
  }
}


const mapDispatchToProps = dispatch => (
  {
    // Key         : Call Back Function -> user => dispatch(setCurrentUser(user))
    setCurrentUser : function (user){
      // dispatching setCurrentUser Action Creator with the user parameter
      dispatch(setCurrentUser(user))
    }
  }
)

const mapStateToProps = ({user}) => (
    {
        currentUser : user.currentUser
    }
  )

export default connect(mapStateToProps,mapDispatchToProps)(App);
