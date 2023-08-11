// import { useState } from "react";
// import { Redirect } from 'react-router-dom';


function MyRecipesComponents({label, calories, image, ingredients, direction}){

    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src={image} alt="food"/>
            </div>
            <div className="container">
                <ul className="list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}> 
                            <img className="icon" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " alt="icon"/>
                            {ingredient}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <h3>{calories.toFixed()} calories</h3>
                {/* <h3>{Math.round(calories)} calories</h3> */}
            </div>
            <div className="container">
                
            </div>
        </div>
    )
}

export default MyRecipesComponents;