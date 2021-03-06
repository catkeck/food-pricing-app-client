import React from "react";
import Ingredient from "./Ingredient";
import IngredientsAdapter from "../../adapters/ingredientsAdapter";
import RecipeAdapter from "../../adapters/recipeAdapter";
import Modal from "react-modal";

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      loading: true,
      modalIsOpen: false
    };
  }

  filteredName = name => {
    let filter = /[a-zA-Z]+(?![^(]*\))/g;
    let filteredString = name
      .match(filter)
      .join(" ")
      .toLowerCase();
    let replacements = /\b(cup|cups|teaspoon|teaspoons|tablespoon|tablespoons|quart|quarts|pint|pints|dash|dashes|pinch|pinches|pound|pounds|tbsp|tsp|fluid oz.|fluid oz|fluid ounce|fluid ounces|ounce|ounces|kilogram|kilograms|gram|grams|ml|mls|gallon|gallons|gal.|oz|g|liter|liters|stick|sticks|head|peeled|cooked|large|bunches|cloves|sliced|piece|cm|inch|inches|coarsely|torn|halved|lengthwise|finely|minced|torn|lb|taste|sliced|split|melted|removed|a|frozen|thawed|grated|the|an|and|to|of|in|or|for|lightly|crushed|beaten|about|&|cut|discarded|into|pieces|part|parts|freshly|squeezed|seeded|de-seeded|softened|sweetened|shredded|matchsticks|small|large|big|bunch|fresh|chopped|diced|chilled|pitted|flesh|scooped|out|then|roughly|peeled|halved|stemmed|with|without|skin|regular|or|grainy|variety|c|snipped|flaked|bag|log|soft|extra|divided|crumbled|thickly|well|plus|combined|boneless|skinless|horizontally|vertically|easy|chunky|preferably|one|two|three|four|five|six|seven|eight|nine|glass|thinly|canned|packed|light|sheets|ten|thick|s|tips|browned|drained|medium|only)\b/gi;
    return filteredString.replace(replacements, "");
  };

  setIngredients = () => {
    let ingredients = [];
    if (this.props.data.ingredients) {
      for (let i = 0; i < this.props.data.ingredients.length; i++) {
        ingredients.push({
          name: this.filteredName(this.props.data.ingredients[i].text),
          amount: this.props.data.ingredients[i].weight
        });
      }
    }
    return ingredients;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props) {
      return;
    } else {
      this.getIngredients(this.setIngredients());
    }
  }

  getIngredients = ingredients => {
    const adapter = new IngredientsAdapter();
    adapter
      .getIngredientsCost(ingredients)
      .then(json => this.setState({ ingredients: json, loading: false }));
  };

  getPrice = () => {
    let price = 0;
    if (this.state.ingredients.ingredients) {
      this.state.ingredients.ingredients.forEach(function(ingredient) {
        price += ingredient.price;
      });
      return price;
    }
    return 0;
  };

  openModal = () => {
    this.props.searchItem();
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSave = event => {
    event.preventDefault();
    const adapter = new RecipeAdapter();
    const recipeParams = {
      reference: this.props.data.recipe_uri
    };
    adapter.saveRecipe(recipeParams);
  };

  render() {
    const price = this.getPrice();
    return (
      <div>
        <button onClick={this.openModal}>Get Recipe</button>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <h2>{this.props.data.name}</h2>
          <img src={this.props.data.image} alt="" />
          <p>
            Serving Size: {this.props.data.yield}
            {this.props.data.yield === 1 ? "person" : "people"}
          </p>
          <p>Try this as an alternative!</p>
          {this.props.data.ingredients
            ? this.props.data.ingredients.map(ingredient => (
                <div>
                  <Ingredient ingredient={ingredient} />
                </div>
              ))
            : null}
          <p> Recipe Cost: ${price.toFixed(2)}</p>
          <button onClick={this.handleSave}>Save Recipe</button>
        </Modal>
      </div>
    );
  }
}

export default Recipe;
