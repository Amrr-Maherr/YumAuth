import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import RecipeSection from "../../Components/RecipeSection/RecipeSection";
import useFetchRecipes from "../../Hooks/useFetchRecipes";
import HeroSection from "./HeroSection";
import Loader from "../../Components/Loader/Loader"
export default function Home() {
        const { isLoading} = useFetchRecipes()
    return (
        <>
            {isLoading ? (<Loader/>) : (
                <>
            <NavBar/>
            <HeroSection />
            <RecipeSection  />
            <Footer/>
                </>
            )}
        </>
    )
}