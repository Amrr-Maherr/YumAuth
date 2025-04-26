import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const nav = useNavigate()
    useEffect(() => {
        if (!userInfo) {
          nav("/login");
        } else {
          return children;
        }
    },[])
}