
import { useEffect, useState } from 'react';
import './App.css';
import video from "./food.mp4"
import MyRecipesComponents from './myRecipeComponents';


function App() {

  const MY_ID = "852b8561";
  const MY_KEY = "cacd64a675c5196d8374e0f0e7bdf08a"

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("salad");


  useEffect( ()=>{
    const getRecipe = async () =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type = "video/mp4"/>
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value ={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>
      
      {myRecipes.map((element, index)=>(
        <MyRecipesComponents  key={index}
          label={element.recipe.label} 
          calories={element.recipe.calories} 
          image={element.recipe.image} 
          ingredients={element.recipe.ingredientLines}
          direction={element.recipe.totalNutrients.url}
        />
    ))}
  
    </div>
  );
}

export default App;


//yarn add react-router-dom --save

//API ID - 852b8561
//API KEY - cacd64a675c5196d8374e0f0e7bdf08a	
// API request link - https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=852b8561&app_key=cacd64a675c5196d8374e0f0e7bdf08a
