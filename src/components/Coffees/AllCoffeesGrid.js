import React from "react"
import CoffeeCard from "./Coffee/CoffeeCard"
import {Link} from "gatsby"
import classes from "../Coffees/Coffee/CoffeeCard.module.css"

const AllCoffeesGrid = props => {
  const allCoffees = props.AllCoffees;
  return (
    <div>
      {allCoffees.map(coffee => {
        return (
            <CoffeeCard coffeeType = {coffee.coffeeType.slug} coffee={coffee}></CoffeeCard>
          // <div className={classes.Coffee}>
          //   <h5>{coffee.coffeeName}</h5>
          //   <img
          //     src={coffee.coffeeImage.fluid.src}
          //     alt={coffee.coffeeName}
          //   ></img>
          //   <p>{coffee.coffeeDescription}</p>
          //   <button variant="contained">
          //     <Link to={`/${coffee.coffeeType.slug}/${coffee.slug}`}>More Info</Link>
          //   </button>
          // </div>
        )
      })}
    </div>
  )
}

export default AllCoffeesGrid;