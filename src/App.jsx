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
import LoaderProvider from "./contexts/loader/LoaderProvider";
import Loader from "./components/utils/Loader";
import ProductFullDetailPage from "./pages/ProductFullDetailPage";
import ScrollToTop from "./components/utils/ScrollToTop";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoaderProvider>
          <AuthProvider>
            <Router basename="client/">
              <Loader />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />

                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/cart" element={<CartPage />} />
                <Route
                  path="/products/product-details/:category/:id"
                  element={<ProductFullDetailPage />}
                />

                <Route path="/gallery" element={<GalleryPage />} />
              </Routes>
            </Router>
          </AuthProvider>
        </LoaderProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
