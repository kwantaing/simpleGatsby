import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import classes from "../components/Coffees/Coffee/CoffeeCard.module.css"
import Layout from "../components/Layout/layout"
import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard";

const AllCoffeePage = (props) => {
  // const data = useStaticQuery(graphql`
  // query allCoffeeQuery {
  //     allContentfulCoffee {
  //       nodes {
  //         coffeeName
  //         coffeeImage {
  //           fluid {
  //             src
  //           }
  //           fixed {
  //             src
  //           }
  //         }
  //         slug
  //         coffeeDescription
  //         coffeeRating
  //         coffeeType {
  //           slug
  //           coffeeType
  //         }
  //       }
  //     }
  //   }
  //   `)
    console.log(props.pageContext);
  const allCoffees = props.pageContext.allCoffees;
  return (
    <Layout>
            {allCoffees.map(coffee => {
                return (
                    <CoffeeCard coffee={coffee}></CoffeeCard>
                )
            })}
    </Layout>
  )
}

export default AllCoffeePage
