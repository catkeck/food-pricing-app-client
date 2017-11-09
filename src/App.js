import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import RestaurantSearch from './components/restaurants/RestaurantSearch'
import Menu from './components/restaurants/Menu'
import Login from './components/Login'
import Signup from './components/Signup'
import UserRecipesContainer from './components/users/UserRecipesContainer'
import AuthAdapter from './adapters/authAdapter'
import Navbar from './components/Navbar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedin: false
    }
  }
  
  handleLogout = (event) => {
    event.preventDefault();
    AuthAdapter.logOut();
    this.setState({loggedin: false})
  }

  handleLoginAndSignup = () => {
    this.setState({loggedin: true})
  }

// <h1><Link to={`user/recipes`}>Saved Recipes</Link></h1>
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar />
          

  
        </div>
        <div>
        </div>
        <Route exact path={'/'} component={RestaurantSearch}/>
        <Route path={'/menus/:id'} render={(match) => <Menu venueId={match} />}/>
        <Route path={'/user/recipes'} component={UserRecipesContainer}/>
        <Route exact path={'/login'} render={({history}) => <Login history={history} handleLoginAndSignup={this.handleLoginAndSignup}/>}/>
        <Route exact path={'/signup'} render={({history}) => <Signup history={history} handleLoginAndSignup={this.handleLoginAndSignup}/>}/>
      </div>
    );
  }
}

export default App;
