import {
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div>
          <span>ABOUT SMART PALIKA</span>
          <h1>
            Making local government services
            <span> simpler.</span>
          </h1>
          <p>
            Smart Palika is a digital platform designed to connect citizens
            with local government services through a simple, transparent and
            accessible online system.
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-content">
          <span>OUR PURPOSE</span>

          <h2>One platform for better citizen services.</h2>

          <p>
            Citizens should not always need to visit a government office
            simply to submit an application or check its status. Smart Palika
            brings essential local government services online.
          </p>

          <p>
            Citizens can submit applications, upload documents, track their
            requests, receive notifications and access important municipal
            information from one platform.
          </p>

          <a href="/services" className="primary-button">
            Explore Services
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="about-visual">
          <div className="about-main-card">
            <Building2 size={35} />

            <h3>Digital Local Government</h3>

            <p>
              Connecting citizens, ward offices and municipal administration
              through technology.
            </p>
          </div>

          <div className="about-small-card">
            <Users size={22} />
            <strong>Citizen First</strong>
            <span>Accessible services</span>
          </div>

          <div className="about-small-card">
            <ShieldCheck size={22} />
            <strong>Transparent</strong>
            <span>Track every application</span>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <div>
            <span>OUR VALUES</span>
            <h2>Built around citizens</h2>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <CheckCircle2 />
            <h3>Accessibility</h3>
            <p>
              Make government information and services easier to access.
            </p>
          </div>

          <div className="value-card">
            <CheckCircle2 />
            <h3>Transparency</h3>
            <p>
              Allow citizens to understand and track their applications.
            </p>
          </div>

          <div className="value-card">
            <CheckCircle2 />
            <h3>Efficiency</h3>
            <p>
              Reduce unnecessary paperwork and repetitive office visits.
            </p>
          </div>

          <div className="value-card">
            <CheckCircle2 />
            <h3>Security</h3>
            <p>
              Protect citizen information through secure digital systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;