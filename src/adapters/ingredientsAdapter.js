export default class IngredientsAdapter {
  constructor() {
    this.baseUrl = "http://buttergrams-api.herokuapp.com/api/v1/ingredients";
  }

  getIngredientsCost(ingredients) {
    const ingredientsSearchParams = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        ingredients: { searchedIngredients: ingredients }
      })
    };

    return fetch(this.baseUrl, ingredientsSearchParams).then(resp =>
      resp.json()
    );
  }
}
