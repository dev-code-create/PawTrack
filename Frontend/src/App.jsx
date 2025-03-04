import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import SignUpPage from "./pages/SignOutPage";
import { useUser } from "@clerk/clerk-react";

const PrivateRoute = ({ children }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/sign-in" />;
};

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/sign-in"
            element={!isSignedIn ? <SignInPage /> : <Navigate to="/" />}
          />
          <Route
            path="/sign-up"
            element={!isSignedIn ? <SignUpPage /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
