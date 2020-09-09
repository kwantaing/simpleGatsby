import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import Persons from "../components/Persons/Persons"

class Main extends Component {
  constructor(props) {
    super(props)
    console.log("[main.js] constructor")
  }
  state = {
    persons: [
      { id: "aaaa", name: "Jim", age: 25 },
      { id: "bbbb", name: "Jane", age: 24 },
      { id: "cccc", name: "Mark", age: 30 },
    ],
  }

  birthdayHandler = personIndex => {
    // ... spread operator makes a copy so you dont directly alter until complete
    const persons = [...this.state.persons]
    console.log(persons[personIndex])
    persons[personIndex].age += 1
    this.setState({ persons: persons })
  }
  render() {
    const style = {
      width: `60%`,
      margin: `16px auto`,
      border: `1px solid #eee`,
      boxShadow: `0 2px 3px #ccc`,
      padding: `16px`,
      textAlign: `center`,
    }

    return (
      <Layout>
        {/* <Persons persons = {this.state.persons} clicked ={this.birthdayHandler}></Persons> */}
        {this.state.persons.map((person, index) => {
          return (
            <div key={person.id} style={style}>
              <p>
                I'm {person.name} and I am {person.age} years old.
              </p>
              <button onClick={() => this.birthdayHandler(index)}>
                Birthday!
              </button>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Main
