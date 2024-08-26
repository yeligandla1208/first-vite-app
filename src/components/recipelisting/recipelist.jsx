import { Component } from "react";
import RotatingLoader from "../../loaders/rotatingloader";
import CustomList from "../lists/list";
import { MainHeadings } from "../headings/heading";
import axios from "axios";

class RecipeList extends Component {
  state = {
    recipes: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    console.log("iam Component Did mount");
    //  i can call server to fetch data
    this.fetchData();
  }


  fetchData= async()=>{
    const {status,data} = await axios.get("https://dummyjson.com/recipes")
    
    if(status === 200){
      this.setState({
       recipes : data.recipes,
       loading : false
      })

    }
    


  }






//   fetchData = async () => {
//     try{
//     const data = await fetch("https://dummyjson.com/recipes");
//     const { recipes } = await data.json();

//     this.setState({
//       recipes: recipes,
//       loading: false,
//     });
// }catch(error){
//     console.error(error);
//     this.setState({
//         error:true
//     })
    
// }
//   };

  render() {
    return (
      <>
        <h2>Recipe Listing</h2>
        {this.state.loading ? (
          <RotatingLoader />
        ) : (
          <>
            <h2>Recipes...</h2>
            {this.state.recipes.map((eachRecipe) => {
              return (
                <div key={eachRecipe.id}>
                  <h3>{eachRecipe.name}</h3>
                  <img src={eachRecipe.image} height={100} width={100} alt={eachRecipe.name} />
                  <MainHeadings
                    heading={`Ingredients for ${eachRecipe.name}`}
                  />
                  <CustomList list={eachRecipe.ingredients} />
                  <MainHeadings
                    heading={`Instructions for ${eachRecipe.name}`}
                  />
                  <CustomList list={eachRecipe.instructions} />
                </div>
              );
            })}
          </>
        )}
      </>
    );
  }
}
export default RecipeList;
