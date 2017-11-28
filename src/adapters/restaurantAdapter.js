export default class RestaurantAdapter {
  constructor() {
    this.baseUrl = "https://buttergrams-api.herokuapp.com/api/v1/restaurants";
    this.baseUrl2 = "https://buttergrams-api.herokuapp.com/api/v1/menus";
  }

  getRestaurants(restaurant) {
    const restaurantSearchParams = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ restaurant: { searchTerm: restaurant } })
    };
    return fetch(this.baseUrl, restaurantSearchParams).then(resp =>
      resp.json()
    );
  }

  getMenu(venueId) {
    const menuSearchParams = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ restaurant: { venueId: venueId } })
    };

    return fetch(this.baseUrl2, menuSearchParams)
      .then(resp => resp.json())
      .catch(err => console.log("throw in garbage"));
  }
}
