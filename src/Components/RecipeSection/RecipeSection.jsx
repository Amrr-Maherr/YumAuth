import useFetchRecipes from "../../Hooks/useFetchRecipes";
import RecipeRow from "../RecipeRow/RecipeRow";

export default function RecipeSection() {
    return (
      <>
        <section className="my-5">
          <RecipeRow />
        </section>
      </>
    );
}
