import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AdminPage from "./components/AdminPage/AdminPage";
import Navbar from "./components/Navbar/Navbar";
import AuthRoute from "./components/Authroute/Authroute";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<Product />} />
        <Route
          path="/Admin"
          element={
            <AuthRoute>
              <AdminPage />
            </AuthRoute>
          }
        />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404 Page Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
