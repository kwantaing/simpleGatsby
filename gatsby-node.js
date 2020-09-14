const path = require("path");
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
    }
  `)
  const detailPage = path.resolve('./src/pages/DetailPage.js');
  console.log(queryResults);
  const allCoffeeTypes = queryResults.data.allContentfulCoffeeTypes.nodes;
  allCoffeeTypes.forEach(node => {
      //each coffee type
      createPage({
          path: `${node.slug}`,
          component: detailPage,
          context: {
              coffeeType: node,
          }
      })
      //each coffee for the type
      node.coffeeTypeOfferings.forEach(coffee => {
          createPage({
              path: `/${node.slug}/${coffee.slug}`,
              component: detailPage,
              context:{
                  coffee:coffee
              }
          })
      })
  })
}
