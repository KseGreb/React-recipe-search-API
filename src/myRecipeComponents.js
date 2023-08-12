function MyRecipesComponents({label, calories, image, ingredients, url, people}){

    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <a href={url}><img src={image} alt="food"/></a>
            </div>
            <div className="container">
                <h3 className="extra">This meal is for {people} people</h3>
            </div>
            <div className="container">
                <h3 className="">{calories.toFixed()} calories </h3>
                {/* <h3>{Math.round(calories)} calories</h3> */}
            </div>
            
                <ul className="container list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}> 
                            <img className="icon" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " alt="icon"/>
                            {ingredient}
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default MyRecipesComponents;