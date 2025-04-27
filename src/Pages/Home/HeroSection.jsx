import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 relative">
        <div className="grid gap-4 hidden md:grid">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4 hidden md:grid">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover"
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="absolute inset-0 w-full h-auto bg-black/60 z-10 flex items-center justify-center">
          <div className="text-center p-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Delicious Recipes
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Find inspiration for your next meal, from quick bites to gourmet
              dishes.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-black transition duration-150 ease-in-out">
              Browse Recipes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
