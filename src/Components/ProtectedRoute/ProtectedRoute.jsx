import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!userInfo) {
      setIsAuthenticated(false);
    }
  }, [userInfo]);

  // إذا لم يكن هناك مستخدم، نوجهه لصفحة تسجيل الدخول
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
