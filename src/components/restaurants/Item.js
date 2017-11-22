import React from "react";
import RecipeAdapter from "../../adapters/recipeAdapter";
import Recipe from "../recipes/Recipe";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      recipe: {}
    };
  }

  searchItem = () => {
    const adapter = new RecipeAdapter();
    adapter
      .getRecipe(this.props.data.name)
      .then(json => this.setState({ clicked: true, recipe: json }));
  };

  render() {
    return (
      <div className="card">
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.price}</p>
        <p>{this.props.data.description}</p>
        <Recipe searchItem={this.searchItem} data={this.state.recipe} />
      </div>
    );
  }
}

export default Item;
