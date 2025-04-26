import LoaderImage from "../../assets/pizza_15407645.gif"
export default function Loader() {
    return (
        <>
        <div className="h-screen flex items-center justify-center w-full">
            <img src={LoaderImage} alt="" />
        </div>
        </>
    )
}