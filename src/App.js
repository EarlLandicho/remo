import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth.js';
import Theater from './components/Theater';
import {connect} from 'react-redux'
import {setCurrentUser} from './reducers/gameDataActions'
import { auth } from 'services/firebase';






class App extends React.Component {
 
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render(){
    console.log(this.props.currentUser);
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
    setCurrentUser : function (user){
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
