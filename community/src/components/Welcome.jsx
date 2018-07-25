import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'

class Welcome extends Component {
    render() {
      return (
       
       <div>
        <div className='welcome'>
            <div className='welcomebody'>
            <h1 className='welcomeLogo'>Welcome</h1>
            <p>Can't manage to get to an LGBTQ center? Find your true community here. 

Community is your one-stop virtual space to find essential LGBTQ resources. A one-on-one private and secure chat with one of our verified Mentors may be just what you need because let's face it; we all deserve someone to talk to sometimes. Coming out can be such a dark and lonely place to be stuck in but with community it doesn't have to be.

Connecting people at the start of their journey of self love with a mentor who has been in their shoes can help the process tremendously. </p>
         </div>
         </div>
         <div className='welcome'>
         <div className='howWeWork'>
         <h1 className='workLogo'>How Community Works</h1>
         <h3>Here at Community we strive to provide a safe and therapeutic space for our members as well as our mentors we do this by: </h3>
         <ul>
           <li>Ensuring each one of our mentors pass a vigorous background and mental check.</li>
           <li>Providing a secure and safe space to chat one-on-one with your mentor.</li>
           <li>Community also provides a resources page filled with other free resources. </li>
         </ul>
         </div>
         </div>
        <div className='welcome'>
        <div className='testbody'>
        <div>
        <h1 className='testLogo'>Testimonies</h1>
        </div>
        <div className='testPro'>
        <div className='testimony'>
        <div className='r-img'>
        <Image src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3fa46375259c39d07d0227e8ade6daa&auto=format&fit=crop&w=500&q=60' size='medium' circular />
        </div>
        <div className='testpara'>
        <p>"Wow what a great community to be a part of, I love it! I would also like to say thank you to all your Mentors. Community offered me a safe space to talk through some of the darkest time in my life"- Adrien N. </p>
        </div>
        </div>
        <div className='testimony'>
        <div className='r-img'>
        <Image src='https://images.unsplash.com/photo-1515664069236-68a74c369d97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1bbad330774dd9b76d99456d055e143a&auto=format&fit=crop&w=500&q=60' size='medium' circular />
        </div>
        <div className='testpara'>
        <p>"No matter where you go, Community is available for you where and whenever you need it! I would have never made it through coming out with out the help of my mentor Jack!" -Mike </p>
        </div>
        </div>
        <div className='testimony'>
        <div className='r-img'>
        <Image src='https://images.unsplash.com/photo-1496360650824-229a83e340db?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5afd15b24ec20538f9c9c15f8a3590d4&auto=format&fit=crop&w=500&q=60' size='medium' circular />
        </div>
        <div className='testpara'>
        <p>"I would be lost without Community. Thanks Community! Such an easy app to use and it truly is wonderful connecting with people who know what I am going through"
          - Ashley R. </p>
        </div>
        </div>
        <div className='testimony'>
        <div className='r-img'>
        <Image src='https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2abac325ee96218afb69e1fb0cb23829&auto=format&fit=crop&w=500&q=60' size='medium' circular />
        </div>
        <div className='testpara'>
        <p>""You've saved my life Community! I'd be lost without you guys. If you aren't sure, always go for Community."
          - Tedda M.  </p>
         </div>
        </div>
        </div>
        </div>
        
        
        
        
        </div>

         </div>
      );
    }
  }

export default Welcome