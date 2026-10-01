
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FileText,
  HeartPulse,
  Home,
  Building2,
  CreditCard,
  Users,
  ArrowRight
} from "lucide-react";

const icons = {
  Registration: <FileText />,
  Recommendation: <Users />,
  Business: <Building2 />,
  Revenue: <CreditCard />
};

function Services() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/services"
        );

        setServices(response.data);
      } catch (error) {
        setError("Unable to load services.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <section className="page-hero">
        <div>
          <span>GOVERNMENT SERVICES</span>

          <h1>
            Services designed around
            <span> citizens.</span>
          </h1>

          <p>
            Explore local government services and submit applications
            digitally through your ward office.
          </p>
        </div>
      </section>

      <section className="services-page-section">
        <div className="service-page-header">
          <div>
            <span>AVAILABLE SERVICES</span>
            <h2>Choose a service</h2>
          </div>

          <div className="service-search">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {loading && (
          <div className="service-loading">
            Loading services...
          </div>
        )}

        {error && (
          <div className="service-error">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="service-list">
            {filteredServices.map((service) => (
              <div className="large-service-card" key={service._id}>
                <div className="large-service-icon">
                  {icons[service.category] || <FileText />}
                </div>

                <div className="large-service-content">
                  <span>{service.category}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <small>
                    {service.fee === 0
                      ? "Free service"
                      : `Service fee: NPR ${service.fee}`}
                    {" • "}
                    {service.processingTime}
                  </small>
                </div>

                <button className="service-apply">
                  Apply
                  <ArrowRight size={17} />
                </button>
              </div>
            ))}
          </div>
        )}

        {!loading &&
          !error &&
          filteredServices.length === 0 && (
            <div className="service-empty">
              No services found.
            </div>
          )}
      </section>

      <section className="service-help">
        <div>
          <span>NEED HELP?</span>

          <h2>Not sure which service you need?</h2>

          <p>
            Contact your ward office for assistance before submitting
            an application.
          </p>
        </div>

        <a href="/contact" className="secondary-button">
          Contact Us
          <ArrowRight size={17} />
        </a>
      </section>
    </div>
  );
}

export default Services;
