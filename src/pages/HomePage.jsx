import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function HomePage() {
  return (
    <>
      {/* NAVBAR */}
<nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold text-primary d-flex align-items-center" href="#">
      <i className="bi bi-shield-check me-2 fs-5"></i>
      CivicEye
    </a>
    <div className="ms-auto">
      <button className="btn btn-outline-primary me-2">Login</button>
      <button className="btn btn-primary">Register</button>
    </div>
  </div>
</nav>


      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-white">
              <span className="badge hero-badge mb-3">
                Government of India Initiative
              </span>

              <h1 className="fw-bold display-5 mt-3">
                Smart Civic Issue Reporting
              </h1>

              <p className="lead mt-3 opacity-90">
                Report problems, track resolutions, and help build better cities
                with transparency and accountability.
              </p>

              <div className="mt-4">
                <button className="btn btn-success btn-lg me-3">
                  Report an Issue
                </button>
                <button className="btn btn-outline-light btn-lg">
                  Dashboard Login
                </button>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4149/4149678.png"
                alt="Smart City"
                className="img-fluid hero-img floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container stats-section">
        <div className="row g-4 text-center">
          {[
            ["12,847", "Issues Reported"],
            ["11,234", "Issues Resolved"],
            ["87%", "Resolution Rate"],
            ["4.2 Days", "Avg Resolution"],
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="stat-card hover-card">
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold">How CivicEye Works</h2>
        <p className="text-muted">
          Simple, transparent, and efficient civic issue management
        </p>

        <div className="row mt-4 g-4">
          {[
            ["📸", "Easy Reporting", "Upload photos & details"],
            ["📍", "GPS Tracking", "Auto-detect location"],
            ["📊", "Live Status", "Track issue progress"],
            ["🏛️", "Transparency", "Public dashboards"],
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="feature-card hover-card">
                <div className="icon">{item[0]}</div>
                <h5>{item[1]}</h5>
                <p>{item[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold">4-Step Process</h2>
        <div className="row mt-4">
          {["Report", "Assign", "Track", "Resolve"].map((step, i) => (
            <div key={i} className="col-md-3">
              <div className="circle-step">{i + 1}</div>
              <p className="fw-semibold mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="container my-5">
        <h2 className="fw-bold text-center">Who Uses CivicEye?</h2>
        <div className="row mt-4 g-4">
          {[
            ["Citizens", "Report & track civic issues"],
            ["Officers", "Resolve assigned issues"],
            ["Admins", "Monitor city performance"],
          ].map((role, i) => (
            <div key={i} className="col-md-4">
              <div className="role-card hover-card">
                <h5>{role[0]}</h5>
                <p>{role[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="footer-top text-center text-white">
        <div className="container">
          <h2 className="fw-bold">Ready to Make a Difference?</h2>
          <p className="mt-3 opacity-90">
            Join thousands of citizens in building better cities.
          </p>
          <button className="btn btn-light btn-lg mt-4 shadow">
            Get Started Now →
          </button>
        </div>
      </section>

      {/* FOOTER MAIN */}
      <footer className="footer-main">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3">
              <h5 className="fw-bold">CivicEye</h5>
              <p className="text-muted">
                Smart Public Issue Reporting & Resolution System for transparent
                urban governance.
              </p>
            </div>

            <div className="col-md-3">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li>Report Issue</li>
                <li>Track Status</li>
                <li>Transparency Dashboard</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="fw-bold">Departments</h6>
              <ul className="list-unstyled">
                <li>Roads & Infrastructure</li>
                <li>Sanitation</li>
                <li>Electrical</li>
                <li>Water Supply</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="fw-bold">Contact</h6>
              <p>Helpline: 1800-XXX-XXXX</p>
              <p>Email: support@civiceye.gov</p>
              <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          <hr />
          <p className="text-center text-muted small mb-0">
            © 2024 CivicEye – Government of India Initiative
          </p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
