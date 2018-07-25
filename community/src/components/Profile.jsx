import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button, Label } from 'semantic-ui-react'

class Profile extends Component{
 
    render() {
        return (
            <div>
            <section className='profile'>
            <div className="userCards">
            <Card className='userCard'>
                    <Image className='userIMG' src='https://images.unsplash.com/photo-1524854859347-bd2f42367134?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e197d39473dd3cb9dd300b57a36ec9b&auto=format&fit=crop&w=500&q=60' />
                    <Card.Content>
                    <Card.Header>Jeff</Card.Header>
                    <Card.Meta>
                    <div className='meta'>
                        <span className='Age'>18</span>
                        <span className='Gender'> Cis Male</span>
                        <span className='Im'>Coming Out</span>
                        <span className='Identify'>Gay</span>
                    </div>
                    </Card.Meta>
                    </Card.Content>
                     <Card.Content extra>
                     </Card.Content>
                </Card>
                <Card className='userCard'>
                    <Image className='userIMG' src="https://images.unsplash.com/photo-1522609946836-c85cba8eb943?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=917cb3c845bb6aaffa27be9efa07e147&auto=format&fit=crop&w=400&q=60"/>
                    <Card.Content>
                    <Card.Header>Nick (Mentor)</Card.Header>
                    <Card.Meta>
                    <div className='meta'>
                        <span className='Age'>30</span>
                        <span className='Gender'> Cis Male</span>
                        <span className='Im'>Out</span>
                        <span className='Identify'>Gay</span>
                    </div>
                    </Card.Meta>
                    </Card.Content>
                     <Card.Content extra>
                     </Card.Content>
                </Card>
            
                
            </div>
            </section>
            <div className='joinChat'>
            <Button id='joinChat'><a href='/Chat'>Start Secure Chat</a> </Button>
            
            </div>
            </div>
        )
    }
}

export default Profile