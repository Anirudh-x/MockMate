import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayouts";
import HomePage from "./routes/HomePage";
import AuthLayout from "./layouts/AuthLayout";
import { SignInPage } from "./routes/SignInPage";
import { SignUpPage } from "./routes/SignUpPage";
import ProtectedLayout from "./layouts/ProtectedLayout";
import { MainLayout } from "./layouts/MainLayout";
import { Generate } from "./components/Generate";
import { Dashboard } from "./routes/Dashboard";
import { CreateEditPage } from "./routes/CreateEditPage";
import { MockLoadPage } from "./routes/MockLoadPage";
import { MockInterviewPage } from "./routes/MockInterviewPage";
import { Feedback } from "./routes/Feedback";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedLayout>
              <MainLayout />
            </ProtectedLayout>
          }
        >
          {/* add all the protect routes */}
          <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;