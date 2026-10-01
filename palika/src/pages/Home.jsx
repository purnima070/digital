import {
  ArrowRight,
  FileText,
  Building2,
  HeartPulse,
  CreditCard,
  Search,
  ShieldCheck
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import NoticeCard from "../components/NoticeCard";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            Digital Government Services
          </span>

          <h1>
            Government services,
            <span> simpler and closer.</span>
          </h1>

          <p>
            Access local government services, submit applications,
            track requests and receive important information online.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="primary-button">
              Explore Services
              <ArrowRight size={18} />
            </a>

            <a href="#track" className="secondary-button">
              Track Application
            </a>
          </div>

        </div>

        <div className="hero-card">

          <div className="hero-card-header">
            <span>Citizen Services</span>
            <ShieldCheck size={22} />
          </div>

          <div className="application-box">
            <span>Application Status</span>
            <strong>APP-2083-00125</strong>

            <div className="progress">
              <div></div>
            </div>

            <small>Application under review</small>
          </div>

          <div className="hero-stat-grid">

            <div>
              <strong>24+</strong>
              <span>Services</span>
            </div>

            <div>
              <strong>8</strong>
              <span>Wards</span>
            </div>

          </div>

        </div>

      </section>

      <section className="services-section">

        <div className="section-heading">
          <div>
            <span>OUR SERVICES</span>
            <h2>Popular Government Services</h2>
          </div>

          <a href="/services">
            View all
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="service-grid">

          <ServiceCard
            icon={<FileText />}
            title="Birth Registration"
            description="Apply for birth-related services online."
          />

          <ServiceCard
            icon={<HeartPulse />}
            title="Death Registration"
            description="Submit and track death registration requests."
          />

          <ServiceCard
            icon={<Building2 />}
            title="Residence Recommendation"
            description="Request residence verification from your ward."
          />

          <ServiceCard
            icon={<CreditCard />}
            title="Tax Services"
            description="Access local tax and revenue services."
          />

        </div>

      </section>

      <section className="track-section" id="track">

        <div>
          <span>APPLICATION TRACKING</span>
          <h2>Where is your application?</h2>

          <p>
            Enter your application number to check the latest
            status of your request.
          </p>
        </div>

        <div className="tracking-form">

          <div className="input-wrapper">
            <Search size={20} />
            <input
              type="text"
              placeholder="Enter application number"
            />
          </div>

          <button className="primary-button">
            Track Application
          </button>

        </div>

      </section>

      <section className="notices-section">

        <div className="section-heading">
          <div>
            <span>UPDATES</span>
            <h2>Latest Notices</h2>
          </div>

          <a href="/notices">
            View all
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="notice-grid">

          <NoticeCard
            date="15 Ashwin 2083"
            title="Public Notice Regarding Tax Payment"
          />

          <NoticeCard
            date="12 Ashwin 2083"
            title="Ward Level Public Hearing Program"
          />

          <NoticeCard
            date="08 Ashwin 2083"
            title="Important Information for Citizens"
          />

        </div>

      </section>

      <section className="cta-section">

        <div>
          <span>NEED ASSISTANCE?</span>
          <h2>We're here to help citizens.</h2>
          <p>
            Contact your ward office for assistance with government services.
          </p>
        </div>

        <a href="/contact" className="secondary-button">
          Contact Us
          <ArrowRight size={18} />
        </a>

      </section>
    </>
  );
}

export default Home;