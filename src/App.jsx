import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">BeautyButik</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Glow With Confidence</h2>

          <p>
            Welcome to BeautyButik.Space — your destination for beauty,
            skincare, makeup, and self-care products.
          </p>

          <button>Book Appointment</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="Beauty"
          />
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-cards">
          <div className="card">
            <h3>Makeup</h3>
            <p>Professional bridal and party makeup services.</p>
          </div>

          <div className="card">
            <h3>Skincare</h3>
            <p>Healthy glowing skin with expert treatments.</p>
          </div>

          <div className="card">
            <h3>Hair Styling</h3>
            <p>Modern haircuts and styling for every occasion.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 BeautyButik.Space | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;