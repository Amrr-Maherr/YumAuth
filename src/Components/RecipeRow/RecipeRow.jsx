import useFetchRecipes from "../../Hooks/useFetchRecipes";
import RecipeCard from "../RecipeCard/RecipeCard"
export default function RecipeRow() {
    const { isLoading, isError, data } = useFetchRecipes()
    console.log(data);
  return (
    <>
      {/* <div className="flex items-start justify-center flex-wrap">
        {data?.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id}/>
        ))}
      </div> */}
    </>
  );
}