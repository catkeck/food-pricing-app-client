export default class UserAdapter {

	constructor() {
	    this.baseUrl = 'http://localhost:3000/api/v1/user'   
	}

	getUserRecipes() {
		const token =localStorage.getItem("token")
  	const params = {
      method: 'GET',
      headers: {
      	'Authorization': token,
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
    }
    
    return fetch(`${this.baseUrl}/recipes`, params)
      .then(resp => resp.json())
	}
}