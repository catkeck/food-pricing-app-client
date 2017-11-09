import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'semantic-ui-react'
const Restaurant = (props) => {

  return (
    <div className="restaurant">
      <Link to={`/menus/${props.data.id}`}>
        <Card className="restaurant-cards">
          <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Description>{props.data.location.address}</Card.Description>
            <Card.Meta>
              <p>{props.data.url}</p>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Link>
    </div>
  )
}

export default Restaurant 