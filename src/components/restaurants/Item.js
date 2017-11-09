import React from 'react'
import RecipeAdapter from '../../adapters/recipeAdapter'
import Recipe from '../recipes/Recipe'
import { Card } from 'semantic-ui-react'

class Item extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		clicked: false,
  		recipe: {}
  	}
  }

  searchItem = () => {  	
	const adapter = new RecipeAdapter()
	adapter.getRecipe(this.props.data.name).then(json => this.setState({clicked: true, recipe: json}))

  }

  render() {
  	// console.log(this.state)
  	return (
	    <div className="ui centered link card">
	      <Card
		    link
		    header={this.props.data.name}
		    meta={this.props.data.price}
		    description={this.props.data.description}> 
		    
		  </Card>
	     <Recipe searchItem={this.searchItem} data={this.state.recipe}/>
	    </div>
	  )
  }
}

export default Item 