import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ImportIcon } from "lucide-react";
import logo1 from "./images/logo.jpg"; // Adjust the path as necessary

// IMPORT YOUR REAL PAGES HERE
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

type Page = "home" | "about" | "services" | "contact";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeScrollOut, setWelcomeScrollOut] = useState(false);

  // For page transitions
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextPage, setNextPage] = useState<Page>("home");

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
      setShowWelcome(true);
    }, 2000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const handleGetStarted = () => {
    setWelcomeScrollOut(true);
    setTimeout(() => setShowWelcome(false), 800);
  };

  const navItems = [
    { label: "Home", page: "home" as Page },
    { label: "About", page: "about" as Page },
    { label: "Services", page: "services" as Page },
    { label: "Contact", page: "contact" as Page },
  ];

  const handlePageChange = (page: Page) => {
    if (page === currentPage) return;
    setNextPage(page);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300); // match animation duration
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  // ---------- LOADER ----------
  if (showLoader) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-6">
            <Sparkles className="w-20 h-20 text-amber-700 animate-pulse mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-amber-300 border-t-amber-700 rounded-full animate-spin"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-neutral-800 mb-2">
            Self-Sabotage Alchemy
          </h2>
          <p className="text-neutral-600 animate-pulse">
            Loading your transformation...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 relative">
      {/* ---------- WELCOME SCREEN ---------- */}
      {showWelcome && (
        <div
          className={`fixed inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100 flex items-center justify-center z-50 transition-transform duration-800 ease-in-out ${
            welcomeScrollOut ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="text-center px-4">
            <div className="mb-8 relative">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto flex items-center justify-center shadow-xl">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-amber-200 rounded-full animate-ping"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-4">
              Welcome to Self-Sabotage Alchemy
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Transform your self-sabotage into your greatest strength
            </p>
            <p className="text-lg text-neutral-500 mb-12">
              Discover the power within you to overcome limitations and achieve
              extraordinary success
            </p>

            <button
              onClick={handleGetStarted}
              className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started
            </button>

            <div className="mt-12 animate-bounce">
              <div className="w-6 h-10 border-2 border-amber-700 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-amber-700 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- NAVBAR ---------- */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
  onClick={() => handlePageChange("home")}
  className="flex items-center gap-2.5 hover:opacity-70 transition-opacity"
>
  <img
    src={logo1} // adjust path to your logo
    alt="Self-Sabotage Alchemy Logo"
    className="w-28 h-28 object-contain"
  />
  <span className="text-xl font-semibold text-neutral-800">
    Self-Sabotage Alchemy
  </span>
</button>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handlePageChange(item.page)}
                className={`transition-colors duration-300 ${
                  currentPage === item.page
                    ? "text-amber-700 font-semibold"
                    : "text-neutral-700 hover:text-amber-700"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md">
              Enroll Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-800"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handlePageChange(item.page)}
                  className={`text-left py-2 transition-colors duration-300 ${
                    currentPage === item.page
                      ? "text-amber-700 font-semibold"
                      : "text-neutral-700 hover:text-amber-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition-all duration-300 w-full mt-2">
                Enroll Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ---------- PAGE WITH TRANSITION ---------- */}
      <main className="pt-20 relative overflow-hidden">
        <div
          key={currentPage} // Important for React to detect change
          className={`transition-all duration-300 ${
            isTransitioning
              ? "opacity-0 translate-x-5"
              : "opacity-100 translate-x-0"
          }`}
        >
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;