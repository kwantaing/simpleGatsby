const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query initialQuery {
      allContentfulCoffeeTypes {
        nodes {
          id
          coffeeType
          typeDescription
          coffeeComponents
          slug
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
            coffeeRating
            coffeeType {
              coffeeType
              slug
            }
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
        }
      }
      allContentfulCoffee {
        nodes {
          coffeeName
          coffeeImage {
            fluid {
              src
            }
            fixed {
              src
            }
          }
          slug
          coffeeDescription
          coffeeRating
          coffeeType {
            slug
            coffeeType
          }
        }
      }
    }
  `)
  const detailPage = path.resolve("./src/pages/DetailPage.js");
  const allCoffeePage = path.resolve("./src/pages/allCoffees.js");
  const coffeeTypesPage = path.resolve("./src/pages/coffeeTypes.js");
  console.log(queryResults)
  const allCoffeeTypes = queryResults.data.allContentfulCoffeeTypes.nodes;
  const allCoffees = queryResults.data.allContentfulCoffee.nodes;
  console.log(allCoffees);
  allCoffeeTypes.forEach(node => {
    //each coffee type
    createPage({
      path: `${node.slug}`,
      component: detailPage,
      context: {
        coffeeType: node,
      },
    })
    //each coffee for the type
    node.coffeeTypeOfferings.forEach(coffee => {
      createPage({
        path: `/${node.slug}/${coffee.slug}`,
        component: detailPage,
        context: {
          coffee: coffee,
        },
      })
    })
  })
  createPage({
    path: `/coffees`,
    component: allCoffeePage,
    context: {
      allCoffees : allCoffees
    }
  })
  createPage({
    path: `/categories`,
    component: coffeeTypesPage,
    context: {
      allCoffeeTypes: allCoffeeTypes
    }
  })
}
