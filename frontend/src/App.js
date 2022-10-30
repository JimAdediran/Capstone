// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePageEx from "./pages/HomePageEx/HomePageEx";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import ChartsPage from "./pages/ChartsPage/ChartsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePageEx />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contributions" element={<ItemsPage />} />
        <Route path="/charts" element={<ChartsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
