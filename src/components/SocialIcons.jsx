import linkedinDefault from "../assets/Linkedin-color.png";
import linkedinHover from "../assets/Linkedin-White.png";

import facebookDefault from "../assets/Facebook-color.png";
import facebookHover from "../assets/Facebook-white.png";

import xDefault from "../assets/X-dark.png";
import xHover from "../assets/X-white.png";

import instagramDefault from "../assets/Instagram-color.png";
import instagramHover from "../assets/Instagram-white.png";

function SocialIcons() {
  return (
    <div className="social-section">
      <ul className="wrapper flex flex-wrap gap-4">

        {/* LinkedIn */}
        <li className="icon linkedin">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-visible:ring-2 focus-visible:ring-teal rounded-full"
          >
            <span className="tooltip" aria-hidden="true">LinkedIn</span>

            <img
              src={linkedinDefault}
              alt="LinkedIn"
              className="icon-default"
            />
            <img
              src={linkedinHover}
              alt=""
              className="icon-hover"
              aria-hidden="true"
            />
          </a>
        </li>

        {/* Facebook */}
        <li className="icon facebook">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="focus-visible:ring-2 focus-visible:ring-teal rounded-full"
          >
            <span className="tooltip" aria-hidden="true">Facebook</span>

            <img
              src={facebookDefault}
              alt="Facebook"
              className="icon-default"
            />
            <img
              src={facebookHover}
              alt=""
              className="icon-hover"
              aria-hidden="true"
            />
          </a>
        </li>

        {/* X (Twitter) */}
        <li className="icon twitter">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="focus-visible:ring-2 focus-visible:ring-teal rounded-full"
          >
            <span className="tooltip" aria-hidden="true">X</span>

            <img
              src={xDefault}
              alt="X (Twitter)"
              className="icon-default"
            />
            <img
              src={xHover}
              alt=""
              className="icon-hover"
              aria-hidden="true"
            />
          </a>
        </li>

        {/* Instagram */}
        <li className="icon instagram">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="focus-visible:ring-2 focus-visible:ring-teal rounded-full"
          >
            <span className="tooltip" aria-hidden="true">Instagram</span>

            <img
              src={instagramDefault}
              alt="Instagram"
              className="icon-default"
            />
            <img
              src={instagramHover}
              alt=""
              className="icon-hover"
              aria-hidden="true"
            />
          </a>
        </li>

      </ul>
    </div>
  );
}

export default SocialIcons;
