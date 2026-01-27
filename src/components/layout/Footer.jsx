import React from "react";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card py-8">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-primary">
                CivicEye
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart Public Issue Reporting & Resolution System for transparent
              urban governance.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Report Issue</a></li>
              <li><a href="#" className="hover:text-primary">Track Status</a></li>
              <li><a href="#" className="hover:text-primary">Transparency Dashboard</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold">Departments</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Roads & Infrastructure</li>
              <li>Sanitation</li>
              <li>Electrical</li>
              <li>Water Supply</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Helpline: 1800-XXX-XXXX</li>
              <li>Email: support@civiceye.gov</li>
              <li>Municipal Corporation</li>
              <li>Mon-Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 CivicEye. A Government of India Initiative. All rights reserved.</p>
          <p className="mt-1">
            Final Year Engineering Project - Smart India Hackathon
          </p>
        </div>
      </div>
    </footer>
  );
}
