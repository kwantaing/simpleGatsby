import React from "react"
import Person from './Person/Person';

const Persons = props => {
  const style = {
    width: `60%`,
    margin: `16px auto`,
    border: `1px solid #eee`,
    boxShadow: `0 2px 3px #ccc`,
    padding: `16px`,
    textAlign: `center`,
  }
  return props.persons.map((person, index) => {
    return (
      <div key={person.id} style={style}>
        <p>
          I'm {person.name} and I am {person.age} years old.
        </p>
        <button onClick={() =>props.clicked(index)}>Birthday!</button>
      </div>
    //   <Person person={person} clicked ={() => props.clicked(index)}></Person>
    )
  })
}

export default Persons
