import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import AuthProvider from "./contexts/auth/AuthProvider";
import GalleryPage from "./pages/GalleryPage";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router basename="client/">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />

              <Route path="/products" element={<ProductsPage />}>
                <Route path="cart" element={<CartPage />} />
              </Route>
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
