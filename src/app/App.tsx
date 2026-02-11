import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductPage } from "./pages/ProductPage";
import { OrderPage } from "./pages/OrderPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogArticlePage } from "./pages/BlogArticlePage";
import { StudentPackagesPage } from "./pages/StudentPackagesPage";
import { ComparePage } from "./pages/ComparePage";
import { Laptop } from "./components/LaptopCard";

type PageType = "home" | "shop" | "product" | "order" | "contact" | "about" | "blog" | "blog-article" | "student-packages" | "compare";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [pageData, setPageData] = useState<any>(null);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page as PageType);
    setPageData(data || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "shop":
        return <ShopPage onNavigate={handleNavigate} />;
      case "product":
        return pageData ? (
          <ProductPage laptop={pageData as Laptop} onNavigate={handleNavigate} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        );
      case "order":
        return <OrderPage laptop={pageData as Laptop | undefined} onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "blog":
        return <BlogPage onNavigate={handleNavigate} />;
      case "blog-article":
        return pageData ? (
          <BlogArticlePage article={pageData} onNavigate={handleNavigate} />
        ) : (
          <BlogPage onNavigate={handleNavigate} />
        );
      case "student-packages":
        return <StudentPackagesPage onNavigate={handleNavigate} />;
      case "compare":
        return <ComparePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}