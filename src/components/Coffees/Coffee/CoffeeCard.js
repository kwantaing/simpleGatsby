import React from 'react';
import {Link} from "gatsby";
import classes from "./CoffeeCard.module.css";
const CoffeeCard = (props) => {
    const coffee = props.coffee;
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
    
}

export default CoffeeCard;