import { ArrowUpRight } from "lucide-react";

function NoticeCard({ date, title }) {
  return (
    <article className="notice-card">

      <span>{date}</span>

      <h3>{title}</h3>

      <a href="/notices">
        Read notice
        <ArrowUpRight size={16} />
      </a>

    </article>
  );
}

export default NoticeCard;