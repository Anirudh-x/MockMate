
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import AuthHanlder from "@/handlers/AuthHandler";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <AuthHanlder />
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};