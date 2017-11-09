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
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Menu position='left'>
          <Menu.Item as='a'> <Link to={`/`}>ButterGrams</Link></Menu.Item>
          {localStorage["token"] ? <Menu.Item as='a'> <Link to={`/user/recipes`}>Saved Recipes</Link></Menu.Item> : null}
        </Menu.Menu>
          <h1><Link to={`/`}>Butter Grams</Link></h1>
        <Menu.Menu position='right'>
          {localStorage["token"] ? <Menu.Item as='a'><Link to={'/'} onClick={handleLogout}> Log Out</Link></Menu.Item> : <div><Menu.Item as='a'><Link to={'/signup'}>Sign Up</Link></Menu.Item><Menu.Item as='a'> <Link to={'/login'}>Log In</Link></Menu.Item></div>}
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
    
 export default FixedMenu
      