import React from 'react';

const CoffeeDetail = props => {
    const Coffee = props.coffee;
    console.log(Coffee);
    return(
        <div>
            <h5>{Coffee.coffeeName}</h5>
            <img src={Coffee.coffeeImage.fluid.src} alt=""></img>
            <p>Type of Coffee: {Coffee.coffeeType.coffeeType}</p>
            <p>{Coffee.coffeeDescription}</p>
            <p>Rating: {Coffee.coffeeRating}</p>
        </div>
    )
}


export default CoffeeDetail;