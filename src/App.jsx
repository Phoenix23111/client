import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      <Router basename="client/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
