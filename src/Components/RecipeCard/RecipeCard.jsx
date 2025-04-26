import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300 mx-auto w-full max-w-[400px] my-5">
      {/* صورة الوصفة */}
      <img
        className="w-full h-48 object-cover"
        src={recipe.image}
        alt={recipe.name}
      />

      {/* تفاصيل الوصفة */}
      <div className="p-4 space-y-3">
        {/* اسم الوصفة */}
        <h2 className="text-xl font-bold text-gray-800">{recipe.name}</h2>

        {/* التقييم وعدد المراجعات */}
        <div className="flex items-center text-gray-600 text-sm space-x-2">
          <span className="text-yellow-500 font-bold">{recipe.rating}</span>
          <span>({recipe.reviewCount} reviews)</span>
        </div>

        {/* عدد الحصص */}
        <div className="flex items-center text-gray-600 text-sm">
          <span className="font-semibold">Servings:</span>
          <span className="ml-1">{recipe.servings}</span>
        </div>

        {/* شوية بادجات مثلاً لو حابب تضيف */}
        {recipe.mealType && (
          <div className="flex flex-wrap gap-2">
            {recipe.mealType.map((type, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        )}

        {/* زر عرض التفاصيل */}
        <button
          onClick={() => navigate(`/details/${recipe.id}`)}
          className="mt-4 w-full py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-full transition"
        >
          Show Details
        </button>
      </div>
    </div>
  );
}
