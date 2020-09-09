import React from "react"
import classes from "./Person.module.css"

const Person = props => {
  return (
    <div className={classes.Person}>
      <p>
        I'm {person.name} and I am {person.age} years old.
      </p>
      <button onClick={props.clicked}>Birthday!</button>
    </div>
  )
}

export default Person;