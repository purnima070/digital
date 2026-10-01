import { ArrowUpRight } from "lucide-react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <div className="service-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <a href="/services">
          Apply
          <ArrowUpRight size={16} />
        </a>
      </div>

    </div>
  );
}

export default ServiceCard;