import React from 'react'
import RecipeAdapter from '../adapters/recipeAdapter'
import Recipe from './Recipe'

class RecipeSearch extends React.Component {
	constructor() {
		super()
		this.state ={
			searchTerm: "",
			response: {}
		}
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value 
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const adapter = new RecipeAdapter()
		console.log(this.state.searchTerm)
		adapter.getRecipe(this.state.searchTerm).then(json => this.setState({response: json}))
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
					<input type="submit" />
				</form>
				<Recipe data={this.state.response}/>
			</div>

		)
	}
}


export default RecipeSearch