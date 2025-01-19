import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export default function Team({ img, title, designation }) {
  return (
    <div className="card bg-base-100 flex items-center justify-center shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{designation}</p>
        <div className="card-actions">
          <button>
            <FacebookIcon />
          </button>
          <button>
            <GithubIcon />
          </button>
          <button>
            <LinkedinIcon />
          </button>
          <button>
            <YoutubeIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
