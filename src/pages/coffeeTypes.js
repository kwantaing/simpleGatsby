import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout/layout"
import classes from "../components/Coffees/Coffee/CoffeeCard.module.css"
import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"

const CoffeeTypes = () => {
  const data = useStaticQuery(graphql`
    query coffeeTypeQuery {
      allContentfulCoffeeTypes {
        nodes {
          id
          coffeeType
          typeDescription
          coffeeComponents
          coffeeTypeImg {
            id
            fluid(maxWidth: 614) {
              src
            }
          }
          coffeeTypeOfferings {
            id
            coffeeName
            coffeeDescription
            slug
            coffeeImage {
              id
              fluid(maxWidth: 614) {
                src
              }
              fixed {
                src
              }
            }
          }
          slug
        }
      }
    }
  `)
  const { nodes: allData } = data.allContentfulCoffeeTypes
  console.log(allData)
  const style = {
    textAlign: `center`,
  }
  return (
    <Layout>
      {data.allContentfulCoffeeTypes.nodes.map(coffeetype => {
        return (
          <div key={coffeetype.id} style={style}>
            <h2>{coffeetype.coffeeType}</h2>
            <img src={coffeetype.coffeeTypeImg.fluid.src}></img><br/>
            {coffeetype.coffeeTypeOfferings.map(coffee => {
              return (
                // <div className={classes.Coffee}>
                //   <h5>{coffee.coffeeName}</h5>
                //   <img
                //     src={coffee.coffeeImage.fluid.src}
                //     alt={coffee.coffeeName}
                //   ></img>
                //   <p>{coffee.coffeeDescription}</p>
                //   <button variant="contained">
                //     <Link to={`/${coffee.slug}`}>More Info</Link>
                //   </button>
                // </div>
                <CoffeeCard key={coffee.id} coffeeType={coffeetype.slug} coffee={coffee}></CoffeeCard>
              )
            })}
          </div>
        )
      })}
    </Layout>
  )
}

export default CoffeeTypes
