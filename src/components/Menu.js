import React from 'react'
import RestaurantAdapter from '../adapters/restaurantAdapter'
import Item from './Item'

class Menu extends React.Component {

  constructor() {
    super()
    this.state ={
      menu: [],
      recipe: ""
    }
  }

  componentWillMount = () => {
    const adapter = new RestaurantAdapter()
    adapter.getMenu(this.props.venueId.match.params.id).then(json => this.setState({menu: json}))
  }


  ///we could split the types into another page if we want
  render() {
    // console.log(this.state.menu.menu)
    return (
      <div className="menu-items">
        {this.state.menu.menu ? this.state.menu.menu.map((type,index) => <div className="menuType" key={index}><h1>{type.name}</h1><p>{type.description}</p>{type.entries.items.map((item,index) => <div key={index}><Item data={item} description={item} price={item}/></div>)}</div>) : <h1>Sorry, but this restaurant does not have an available menu.</h1>}
      </div>
    )
  }
}

export default Menu 