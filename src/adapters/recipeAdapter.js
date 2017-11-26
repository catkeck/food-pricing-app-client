export default class RecipeAdapter {
  constructor() {
    this.baseUrl = "http://buttergrams-api.herokuapp.com/api/v1/recipes";
  }

  getRecipe(recipe) {
    const recipeSearchParams = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ recipe: { searchTerm: recipe } })
    };

    return fetch(this.baseUrl, recipeSearchParams).then(resp => resp.json());
  }

  saveRecipe(recipe) {
    console.log(recipe);
    const token = localStorage.getItem("token");
    const recipeSaveParams = {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ recipe: recipe })
    };

    fetch(`${this.baseUrl}/new`, recipeSaveParams);
  }
}
