import React from "react"
import Layout from "../components/Layout/layout"
import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"

const DetailPage = props => {
  console.log(props.pageContext)
  const coffee = props.pageContext.coffee
  const coffeetype = props.pageContext.coffeeType;
  const style = {textAlign:`center`}
  if (typeof coffeetype === "undefined") {
    return (
      <Layout>
        <CoffeeCard coffee={coffee}></CoffeeCard>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div key={coffeetype.id}style={style}>
          <h2>{coffeetype.coffeeType}</h2>
          <img src={coffeetype.coffeeTypeImg.fluid.src}></img>
          <br />
          {coffeetype.coffeeTypeOfferings.map(coffee => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffeeType={coffeetype.slug}
                coffee={coffee}
              ></CoffeeCard>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default DetailPage
