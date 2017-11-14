import React from 'react'
import RestaurantAdapter from '../../adapters/restaurantAdapter'
import Restaurants from './Restaurants'

class RestaurantSearch extends React.Component {
	constructor() {
		super()
		this.state ={
			searchTerm: "",
			response: {},
			searched: false
		}
	}

	handleChange = (event) => {
		this.setState({
			searchTerm: event.target.value 
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const adapter = new RestaurantAdapter()
		adapter.getRestaurants(this.state.searchTerm).then(json => this.setState({response: json, searched: true})
		)
	}

	showMenu = (venue_id) => {
		const adapter = new RestaurantAdapter()
		adapter.getMenu(venue_id).then(json => this.setState({response: json}))
	}


	render() {
		return (
			<div className="all">
				{!this.state.searched ? <img className="header-img" src="pasta.jpg" alt=""/> : null}
				<div className="search-form">
					<form className="form-wrapper cf" onSubmit={this.handleSubmit}>
						<input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
						<button type="submit">Search</button>
					</form>
				</div>
				<div>
					<Restaurants data={this.state.response} showMenu={this.showMenu}/>
				</div>
			</div>



		)
	}
}
export default RestaurantSearch