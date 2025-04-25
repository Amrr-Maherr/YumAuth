import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const RECIPES_ENDPOINT = `${API_URL}${import.meta.env.VITE_RECIPES_ENDPOINT}`;

const GetData = async () => {
  const response = await axios.get(RECIPES_ENDPOINT);
  return response.data.recipes;
};

const useFetchRecipes = () => {
  return useQuery({
    queryKey: ["recipes"],
    queryFn: GetData,
  });
};

export default useFetchRecipes;
