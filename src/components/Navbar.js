import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {
  Button,
  Container,
  Menu
} from 'semantic-ui-react'

 const FixedMenu = () => {

  function handleLogout() {
    localStorage.removeItem("token")
  }                      
  return (
    <div className = "navbar">                        
      <h2><Link to={`/`}>Butter Grams</Link></h2>
      {localStorage["token"] ? <Link to={`/user/recipes`}>Saved Recipes</Link> : null}
      {localStorage["token"] ? <Link to={'/'} onClick={handleLogout}> Log Out</Link>: <div><Link to={'/signup'}>Sign Up</Link><Link to={'/login'}>Log In</Link></div>}
    </div>
  )
}
    
 export default FixedMenu
      