import React, { Component } from 'react'
import Cards from './Cards'

const Profiles = (props) => {
    const mentors = props.mentors ? props.mentors.mentors.map((mentor, index)=> {
        return<Cards            key={index}
                                Im={mentor.Im}
                                Age={mentor.age}
                                Description={mentor.description}
                                Gender={mentor.gender}
                                Id={mentor.id}
                                Identity={mentor.identity}
                                Image={mentor.image}
                                Name={mentor.name} />
}) : null
return (
    <section className='profiles'>
    <div className="cards">
    {mentors}
    </div>
    </section>
  
)
}

export default Profiles