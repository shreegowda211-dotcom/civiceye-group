import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function HomePage() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
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
              <span className="badge bg-light text-dark mb-3">
                Government of India Initiative
              </span>

              <h1 className="fw-bold display-5 mt-3">
                Smart Civic Issue Reporting
              </h1>

              <p className="lead mt-3">
                Report problems, track resolutions, and help build better cities.
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
                className="img-fluid hero-img"
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
              <div className="stat-card">
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
          Simple and transparent civic issue management
        </p>

        <div className="row mt-4 g-4">
          {[
            ["📸", "Easy Reporting", "Upload photos & details"],
            ["📍", "GPS Tracking", "Auto-detect location"],
            ["📊", "Live Status", "Track issue progress"],
            ["🏛️", "Transparency", "Public dashboards"],
          ].map((item, i) => (
            <div key={i} className="col-md-3">
              <div className="feature-card">
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
              <div className="role-card">
                <h5>{role[0]}</h5>
                <p>{role[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-cta text-center text-white">
        <h3 className="fw-bold">Ready to Improve Your City?</h3>
        <button className="btn btn-light btn-lg mt-3">
          Get Started
        </button>
      </footer>
    </>
  );
}

export default HomePage;
