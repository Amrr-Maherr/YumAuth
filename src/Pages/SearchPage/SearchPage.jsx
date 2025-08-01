import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import Loader from "../../Components/Loader/Loader";
import LoadingButton from "../../Components/LoadingButton/LoadingButton";

export default function SearchPage() {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [SearchValue, setSearchValue] = useState("");

  const HandelSearch = async () => {
    if (!SearchValue.trim()) return;

    try {
      setLoading(true);
      setError(false);

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${
          import.meta.env.VITE_SEARCH_RECIPES_ENDPOINT
        }?q=${SearchValue}`
      );
      setData(response.data.recipes);
      console.log(response.data.recipes);
    } catch (error) {
      setError(true);
      console.error("Error fetching recipe details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 p-6 w-full mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Search Recipes
          </h1>
          <p className="text-gray-500">Find your favorite recipes easily!</p>
        </div>
        <div className="flex justify-center">
          <div className="flex w-full md:w-2/3">
            <input
              onChange={(event) => setSearchValue(event.target.value)}
              value={SearchValue}
              type="text"
              placeholder="Search for a recipe..."
              className="flex-1 px-4 py-3 rounded-l-full shadow-md border-t border-b border-l focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            {loading ? (
              <LoadingButton />
            ) : (
              <button
                disabled={!SearchValue}
                onClick={HandelSearch}
                className={`bg-yellow-400 ${
                  SearchValue ? "cursor-pointer" : "cursor-not-allowed"
                } hover:bg-yellow-500 text-white font-semibold px-6 rounded-r-full transition`}
              >
                Search
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap my-5">
          {loading && <Loader />}
          {error && (
            <p className="text-center col-span-3 text-red-500 text-lg">
              Error fetching recipes.
            </p>
          )}
          {Data.length === 0 && !loading && !error ? (
            <p>No results found.</p>
          ) : (
            Data.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
