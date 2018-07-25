import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Profiles from './components/Profiles'
import Footer from './components/Footer'
import Login from './components/Login'
import Resources from './components/Resources'
import Chat from './components/chat/Chat'


const apiURL = 'https://community-taylor.herokuapp.com/'

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = { mentors: undefined }
    }
  
  componentDidMount() {
    this.getMentors()
  }

  getMentors = () => {

    return fetch(apiURL)
    .then(response => response.json())
    .then(mentors => {
      console.log(mentors)
      this.setState({
        mentors: mentors
      })
    })
  }
 
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <main>
          <Route exact path='/' component={() => <Welcome />} />
          <Route exact path='/login' component={() => <Login />} />
          <Route exact path='/Profile' component={() => <Profile/>}/>
          <Route exact path='/Profiles' component={() => <Profiles mentors={this.state.mentors}/>}/>
          <Route exact path='/Resources' component={() => <Resources />} />
          <Route exact path='/Chat' component={() => <Chat />} />
          </main>
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
