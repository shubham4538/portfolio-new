import React from "react";

function Footer() {
  return (
    <div className="p-5 py-10 sm:p-10">
      <div className="flex gap-8 flex-col md:flex-row">
        {/* Name — full width on mobile */}
        <div className="md:w-2/5">
          <h2 className="text-2xl font-regular tracking-tight">
            Shubham Singhvi
          </h2>
          <p className="text-sm fira-light text-gray-400">
            Developer & Creative Thinker <br /> Mumbai, India
          </p>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-8">
          {/* Links */}
          <div className="flex-1 flex flex-col gap-1 fira-light text-gray-400">
            <h3 className="fira-semibold mb-1 text-white">Links</h3>
            <a
              href="https://github.com/shubham4538"
              className="hover:text-[#9f51ff]"
              target="_blank"
            >
              <i className="fab fa-github mr-1" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-singhvi-profile"
              className="hover:text-[#9f51ff]"
              target="_blank"
            >
              <i className="fab fa-linkedin mr-1" />
              LinkedIn
            </a>
            <a
              href="https://t.me/shubhamsinghvi31"
              className="hover:text-[#9f51ff]"
              target="_blank"
            >
              <i className="fab fa-telegram mr-1" />
              Telegram
            </a>
            <a
              href="https://instagram.com/shubhamsinghvi31"
              className="hover:text-[#9f51ff]"
              target="_blank"
            >
              <i className="fab fa-instagram mr-1" />
              Instagram
            </a>
          </div>

          {/* Contact */}
          <div className="flex-1 flex flex-col gap-1 fira-light text-gray-400">
            <h3 className="fira-semibold mb-1 text-white">Contact</h3>
            <a
              href="mailto:shubhamsinghvi54@gmail.com"
              className="text-sm hover:text-[#9f51ff]"
            >
              <i className="far fa-envelope mr-1" />
              shubhamsinghvi54@gmail.com
            </a>
            <a href="tel:+919137968731" className="hover:text-[#9f51ff]">
              <i className="far fa-phone mr-1" />
              +91 9137968731
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="hover:text-[#9f51ff]"
            >
              <i className="far fa-file-lines mr-1" />
              Resume
            </a>
          </div>
        </div>
      </div>
      <hr className="my-8 opacity-20" />

      <div className="fira-light text-sm text-gray-400">
        <p>© 2026 Shubham Singhvi</p>
      </div>
    </div>
  );
}

export default Footer;
