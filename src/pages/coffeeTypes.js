import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout/layout"
import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"

const CoffeeTypes = (props) => {
  // const data = useStaticQuery(graphql`
  //   query coffeeTypeQuery {
  //     allContentfulCoffeeTypes {
  //       nodes {
  //         id
  //         coffeeType
  //         typeDescription
  //         coffeeComponents
  //         coffeeTypeImg {
  //           id
  //           fluid(maxWidth: 614) {
  //             src
  //           }
  //         }
  //         coffeeTypeOfferings {
  //           id
  //           coffeeName
  //           coffeeDescription
  //           slug
  //           coffeeType{
  //             coffeeType
  //             slug
  //           }
  //           coffeeImage {
  //             id
  //             fluid(maxWidth: 614) {
  //               src
  //             }
  //             fixed {
  //               src
  //             }
  //           }
  //         }
  //         slug
  //       }
  //     }
  //   }
  // `)
  // const { nodes: allData } = data.allContentfulCoffeeTypes
  // console.log(allData)
  console.log(props.pageContext.allCoffeeTypes);
  const allCoffeeTypes = props.pageContext.allCoffeeTypes;
  const style = {
    textAlign: `center`,
  }
  return (
    <Layout>
      {allCoffeeTypes.map(coffeetype => {
        return (
          <div key={coffeetype.id} style={style}>
            <Link to={`/${coffeetype.slug}`}>
              <h2>{coffeetype.coffeeType}</h2>
            </Link>
            <img src={coffeetype.coffeeTypeImg.fluid.src}></img>
            <br />
            {coffeetype.coffeeTypeOfferings.map(coffee => {
              return (
                <CoffeeCard
                  key={coffee.id}
                  coffee={coffee}
                ></CoffeeCard>
              )
            })}
          </div>
        )
      })}
    </Layout>
  )
}

export default CoffeeTypes
