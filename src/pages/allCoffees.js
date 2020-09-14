import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import classes from "../components/Coffees/Coffee/CoffeeCard.module.css"
import Layout from "../components/Layout/layout"
import AllCoffeesGrid from "../components/Coffees/AllCoffeesGrid"

const AllCoffeePage = () => {
  const data = useStaticQuery(
    graphql`
      query allCoffeeQuery {
        allContentfulCoffee {
          nodes {
            coffeeName
            coffeeDescription
            coffeeRating
            slug
            coffeeImage {
              fluid {
                src
              }
              fixed {
                src
              }
            }
            coffeeType {
              slug
            }
          }
        }
      }
    `
  )
  const allCoffees = data.allContentfulCoffee.nodes
  return (
    <Layout>
      {/* <div>
        {allCoffees.map(coffee => {
          return (
            <div className={classes.Coffee}>
              <h5>{coffee.coffeeName}</h5>
              <img
                src={coffee.coffeeImage.fluid.src}
                alt={coffee.coffeeName}
              ></img>
              <p>{coffee.coffeeDescription}</p>
              <button variant="contained">
                <Link to={`/${coffee.coffeeType.slug}/${coffee.slug}`}>More Info</Link>
              </button>
            </div>
          )
        })}
      </div> */}
      <AllCoffeesGrid AllCoffees={allCoffees}></AllCoffeesGrid>
    </Layout>
  )
}

export default AllCoffeePage
