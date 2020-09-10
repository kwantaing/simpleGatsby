import React from "react"
import classes from "./Person.module.css"

const Person = props => {
  //assign styling based on age
  let divClasses = [classes.Person]
  if (props.person.age % 2 !== 0) {
    divClasses.push(classes.odd)
  } else {
    divClasses.push(classes.even)
  }
  return (
    <div className={divClasses.join(" ")}>
      <p>
        I'm {props.person.name} and I am {props.person.age} years old.
      </p>
      <button className={classes.btnClass} onClick={props.clicked}>
        Birthday!
      </button>
    </div>
  )
}

export default Person
