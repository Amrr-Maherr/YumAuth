import LoaderImage from "../../assets/pizza_15407645.gif"
export default function Loader() {
    return (
        <>
        <div className="h-screen flex items-center justify-center">
            <img src={LoaderImage} alt="" />
        </div>
        </>
    )
}