import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const GetDetails = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }${import.meta.env.VITE_RECIPE_DETAILS_ENDPOINT.replace(":id", id)}`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error("Error fetching recipe details:", error);
    }
  };

  useEffect(() => {
    GetDetails();
  }, [id]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <p className="text-center text-lg font-semibold text-red-500">
        Error fetching data.
      </p>
    );

  return (
    <>
      <NavBar />
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <img
            src={data.image}
            alt={data.name}
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
            <p className="text-lg text-gray-600">
              Cuisine: <span className="font-semibold">{data.cuisine}</span>
            </p>
            <div className="flex flex-wrap gap-4">
              {data.mealType.map((meal, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {meal}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-md text-gray-700">
              Rating: <span className="font-bold">{data.rating}</span> (
              {data.reviewCount} reviews)
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ingredients
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {data.ingredients.map((ingredient, index) => (
                <li key={index} className="text-md">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cooking Info
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Prep Time:</span>{" "}
                {data.prepTimeMinutes} minutes
              </p>
              <p>
                <span className="font-semibold">Cook Time:</span>{" "}
                {data.cookTimeMinutes} minutes
              </p>
              <p>
                <span className="font-semibold">Servings:</span> {data.servings}
              </p>
              <p>
                <span className="font-semibold">Difficulty:</span>{" "}
                {data.difficulty}
              </p>
              <p>
                <span className="font-semibold">Calories:</span>{" "}
                {data.caloriesPerServing} per serving
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Instructions
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            {data.instructions.map((instruction, index) => (
              <li key={index} className="text-md">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
}
