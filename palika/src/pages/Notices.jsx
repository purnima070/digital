import {
  Bell,
  CalendarDays,
  Download,
  ArrowRight
} from "lucide-react";

const notices = [
  {
    date: "15 Ashwin 2083",
    category: "Public Notice",
    title: "Public Notice Regarding Local Tax Payment",
    description:
      "Citizens are requested to complete applicable local tax payments within the specified period."
  },
  {
    date: "12 Ashwin 2083",
    category: "Information",
    title: "Ward Level Public Hearing Program",
    description:
      "Information regarding the upcoming ward-level public hearing and citizen participation."
  },
  {
    date: "08 Ashwin 2083",
    category: "Announcement",
    title: "Important Information for Citizens",
    description:
      "Important information and updates regarding municipal services and citizen facilities."
  },
  {
    date: "03 Ashwin 2083",
    category: "Program",
    title: "Community Development Program",
    description:
      "Details about upcoming community development activities and public participation."
  },
  {
    date: "28 Bhadra 2083",
    category: "Notice",
    title: "Service Delivery Update",
    description:
      "Information about changes and updates to selected local government services."
  }
];

function Notices() {
  return (
    <div className="page">
      <section className="page-hero">
        <div>
          <span>PUBLIC INFORMATION</span>

          <h1>
            Latest notices and
            <span> announcements.</span>
          </h1>

          <p>
            Stay informed about important government announcements,
            programs, deadlines and public information.
          </p>
        </div>
      </section>

      <section className="notices-page-section">
        <div className="notice-filter">
          <button className="active">All Notices</button>
          <button>Public Notices</button>
          <button>Announcements</button>
          <button>Programs</button>
        </div>

        <div className="notice-list">
          {notices.map((notice, index) => (
            <article className="large-notice-card" key={index}>
              <div className="notice-date">
                <CalendarDays size={18} />
                <span>{notice.date}</span>
              </div>

              <div className="notice-info">
                <span className="notice-category">
                  {notice.category}
                </span>

                <h3>{notice.title}</h3>

                <p>{notice.description}</p>

                <a href="/">
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>

              <button className="download-button">
                <Download size={18} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="notice-subscribe">
        <Bell size={30} />

        <div>
          <h2>Never miss an important update.</h2>
          <p>
            Citizens can receive notifications about important
            government announcements.
          </p>
        </div>

        <button className="primary-button">
          Subscribe
        </button>
      </section>
    </div>
  );
}

export default Notices;