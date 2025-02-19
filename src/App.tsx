import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/PublicLayout";
import Home from "@/routes/Home";
import AuthLayout from "@/layouts/AuthLayout";
import ProtectedLayouts from "@/layouts/ProtectedLayouts";
import { MainLayout } from "@/layouts/MainLayout";

import SignInPage from "./routes/SignInPage";
import SignUpPage from "./routes/SignUpPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/signin/*" element={<SignInPage />} />
            <Route path="/signup/*" element={<SignUpPage />} />
          </Route>

          {/* Protected Routes */}
          <Route
            path="/protected/*"
            element={
              <ProtectedLayouts>
                <MainLayout />
              </ProtectedLayouts>
            }
          ></Route>


          
        </Routes>
      </Router>
    </>
  );
};

export default App;
