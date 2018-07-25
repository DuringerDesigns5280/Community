import React, {Component} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button, Segment } from 'semantic-ui-react'



const Cards = (props) => (
  <Card id='card'>
    <Image className='pimage' src={props.Image} />
    <Card.Content>
      <Card.Header>{props.Name}</Card.Header>
      <Card.Meta>
        <div className='meta'>
        <span className='Age'>{props.Age}</span>
        <span className='Gender'>{props.Gender}</span>
        <span className='Im'>{props.Im}</span>
        <span className='Identify'>{props.Identity}</span>
        </div>
      </Card.Meta>
      <Card.Description className='desc'>{props.Description}</Card.Description>
    </Card.Content>
      <Button   color='blue'><a href='/Profile'>
        Let's Connect!
      </a></Button>
  </Card>
)

export default Cards