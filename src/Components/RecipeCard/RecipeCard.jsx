import { Link, useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const Nav = useNavigate()
  return (
    <div className="rounded-lg w-[400px] overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-all duration-300 ease-in-out my-3 mx-auto">
      <img
        className="w-full h-48 object-cover"
        src={recipe.image}
        alt={recipe.name}
      />

      <div className="p-6">
        {/* اسم الوصفة */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {recipe.name}
        </h2>

        {/* التقييم وعدد المراجعات */}
        <div className="flex items-center text-gray-600 mb-4">
          <span className="font-bold text-lg text-yellow-500">
            {recipe.rating}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            ({recipe.reviewCount} reviews)
          </span>
        </div>

        {/* عدد الحصص */}
        <div className="flex items-center text-gray-600">
          <span className="font-semibold">Servings:</span>
          <span className="ml-2">{recipe.servings}</span>
        </div>
        <button onClick={()=>{Nav(`/details/${recipe.id}`);}} className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Show Details
        </button>
      </div>
    </div>
  );
}
