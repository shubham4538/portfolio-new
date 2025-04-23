import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://portfolio-server-gules-mu.vercel.app/formdata",
        userDetails
      )
      .then((response) => {
        console.log(response);
        if (response.data.response) {
          alert(response.data.response);
        }
      });
  };
  return (
    <div className="min-h-screen" id="contact">
      <div className="max-w-6xl m-auto flex flex-col justify-center items-center gap-14 p-5 py-20 sm:px-10 md:px-20">
        <div className="w-max fira-semibold text-3xl md:text-4xl bg-gradient-to-r from-[#9AB2ED] to-[#C8ED79] text-transparent bg-clip-text">
          Contact
        </div>

        <div className="flex flex-col md:flex-row items-center gap-7">
          {/* Left Side */}
          <div className="w-full md:w-2/5 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:shubhamsinghvi54@gmail.com" className="text-sm">
                shubhamsinghvi54@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold">SOCIAL NETWORKS</h3>
              <div className="flex space-x-4 mt-2 text-xl">
                <a href="https://github.com/shubham4538">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.instagram.com/shubhamsinghvi31/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://t.me/shubhamsinghvi31">
                  <i className="fab fa-telegram" />
                </a>
                <a href="https://www.linkedin.com/in/shubham-singhvi-profile/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Write to Me</h3>
            <form className="space-y-4" onSubmit={formSubmit}>
              <input
                type="text"
                placeholder="Your name"
                defaultValue={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                className="w-full px-2 py-1 rounded-md bg-transparent border border-gray-500 placeholder-gray-400 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                defaultValue={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                className="w-full px-2 py-1 rounded-md bg-transparent border border-gray-500 placeholder-gray-400 focus:outline-none"
                required
              />
              <textarea
                rows="5"
                placeholder="Your message"
                defaultValue={userDetails.message}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, message: e.target.value })
                }
                className="w-full p-2 rounded-md bg-transparent border border-gray-500 placeholder-gray-400 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-cyan-600 text-white font-semibold"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
