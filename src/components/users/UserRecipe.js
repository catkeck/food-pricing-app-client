import React from 'react'
import Ingredient from '../recipes/Ingredient'

const UserRecipe = (props) => {

  return (
    <div class="ui items">
      <div class="item">
        <div class="ui small image">
          <img src={props.data.image} alt=""/>
        </div>
        <div class="content">
          <div class="header">{props.data.name}</div>
          <div class="meta">
            <span class="price">Serves {props.data.yield} {props.data.yield === 1 ? "person" : "people"}</span>
          </div>
          <div class="description">
            {props.data.ingredients ? props.data.ingredients.map(ingredient => <div><Ingredient ingredient={ingredient}/></div>) : null}
          </div>
        </div>
      </div>
    </div>
  )

}


export default UserRecipe 