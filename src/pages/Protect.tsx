import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { Navigate } from "react-router-dom";

const Protect = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    auth.authStateReady().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full bg-purple flex items-center justify-center">
        <img src="/loading.svg" alt="load" />
      </div>
    );
  } else {
    if (auth.currentUser) {
      return children;
    }
  }
  return <Navigate to={"/registration"}></Navigate>;
};

export default Protect;
