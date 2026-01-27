import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ShieldAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow border-0 text-center">
              <div className="card-body p-5">
                <div className="mb-4">
                  <ShieldAlert size={48} className="text-danger" />
                </div>

                <h1 className="display-4 fw-bold text-primary">404</h1>
                <p className="fs-5 text-muted mt-2">
                  Oops! The page you’re looking for doesn’t exist.
                </p>

                <p className="text-muted small mb-4">
                  You may have entered an incorrect URL or the page has moved.
                </p>

                <div className="d-flex justify-content-center gap-3">
                  <Link to="/login" className="btn btn-primary">
                    Go to Login
                  </Link>
                  <Link to="/" className="btn btn-outline-secondary">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-muted small mt-3">
              CivicEye – Smart Public Issue Reporting System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
