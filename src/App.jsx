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
import CartProvider from "./contexts/cart/CartProvider";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./routes/AdminRoute";
import NotAuthorized from "./pages/NotAuthorized";
import AdminProducts from "./components/adminpage/AdminProducts";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoaderProvider>
          <Router basename="client/">
            <AuthProvider>
              <Loader />
              <ScrollToTop />
              <CartProvider>
                <Routes>
                  {/* Home */}
                  <Route path="/" element={<HomePage />} />
                  {/* Login Signup Route */}
                  <Route path="/auth" element={<AuthPage />} />
                  {/* protected Auth Routes */}
                  {/* Admin Routes */}
                  <Route
                    path="admin/Dashboard"
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="admin/products"
                    element={
                      <AdminRoute>
                        <AdminProducts />
                      </AdminRoute>
                    }
                  />

                  {/* Product routes */}
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/cart" element={<CartPage />} />
                  <Route
                    path="/products/product-details/:category/:id"
                    element={<ProductFullDetailPage />}
                  />
                  {/* Gallery Route */}
                  <Route path="/gallery" element={<GalleryPage />} />
                  {/* NotAuthorized Route */}
                  <Route path="/not-authorized" element={<NotAuthorized />} />
                </Routes>
              </CartProvider>
            </AuthProvider>
          </Router>
        </LoaderProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
