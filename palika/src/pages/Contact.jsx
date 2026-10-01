import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react";

function Contact() {
  return (
    <div className="page">
      <section className="page-hero">
        <div>
          <span>GET IN TOUCH</span>

          <h1>
            We're here to
            <span> help.</span>
          </h1>

          <p>
            Have a question about a service, application or ward office?
            Send us a message and our team will assist you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <span>CONTACT INFORMATION</span>

          <h2>
            Let's make government services easier together.
          </h2>

          <p>
            Contact the municipal office for information about services,
            applications, complaints and other citizen support.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div>
                <Phone size={20} />
              </div>

              <section>
                <span>Phone</span>
                <strong>01-0000000</strong>
              </section>
            </div>

            <div className="contact-item">
              <div>
                <Mail size={20} />
              </div>

              <section>
                <span>Email</span>
                <strong>info@smartpalika.com</strong>
              </section>
            </div>

            <div className="contact-item">
              <div>
                <MapPin size={20} />
              </div>

              <section>
                <span>Office</span>
                <strong>Municipal Office</strong>
              </section>
            </div>

            <div className="contact-item">
              <div>
                <Clock size={20} />
              </div>

              <section>
                <span>Office Hours</span>
                <strong>10:00 AM – 5:00 PM</strong>
              </section>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <h2>Send us a message</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Subject</label>

            <select>
              <option>Select a subject</option>
              <option>Government Service</option>
              <option>Application</option>
              <option>Complaint</option>
              <option>Technical Support</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button type="submit" className="primary-button">
            Send Message
            <Send size={17} />
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;