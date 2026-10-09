import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import EquipmentPage from "./pages/EquipmentPage";
import EquipmentDetailPage from "./pages/EquipmentDetailPage";
import ServicesPage from "./pages/ServicesPage";
// import CertificationsPage from "./pages/CertificationsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-40 px-4 text-center">
      <div className="font-mono-spec text-[80px] font-bold text-outline-variant leading-none mb-4">
        404
      </div>
      <h1 className="font-display text-headline-md text-on-surface mb-4">
        Page Not Found
      </h1>
      <p className="font-body text-body-lg text-secondary mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-primary text-on-primary px-8 py-4 font-mono-spec text-utility-sm uppercase tracking-widest hover:brightness-110 transition-all border-b-4 border-on-primary-fixed-variant"
      >
        Return Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:categorySlug" element={<CategoryPage />} />
          <Route
            path="products/:categorySlug/:productId"
            element={<ProductDetailPage />}
          />
          <Route path="equipment" element={<EquipmentPage />} />
          <Route
            path="equipment/:equipmentId"
            element={<EquipmentDetailPage />}
          />
          <Route path="services" element={<ServicesPage />} />
          {/* <Route path="certifications" element={<CertificationsPage />} /> */}
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
