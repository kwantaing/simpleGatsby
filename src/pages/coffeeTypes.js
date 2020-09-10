import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/layout"

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
  return (
    <Layout>
      {/* {allData.map(coffeeType => {
        return (
          <React.Fragment>
            <p>{coffeeType.coffeeType}</p>
            <img src={coffeeType.coffeeTypeImg.fluid.src}></img>
          </React.Fragment>
        )
      })} */}
    </Layout>
  )
}

export default CoffeeTypes
