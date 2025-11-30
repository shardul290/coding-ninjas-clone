import React from "react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-10 lg:px-32" style={{ backgroundColor: "#281E16" }}>
      <div className="max-w-7xl mx-auto">

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">

          {/* LEFT SECTION */}
          <div className="space-y-10">
            {/* Logo */}
            <a href="#form">
              <img
                src="https://files.codingninjas.com/new-cn-logos-31142.svg"
                className="w-44"
              />
            </a>

            {/* Contact */}
            <div className="space-y-4 text-[#BBBCBD] text-sm">
              <h3 className="text-white text-sm mb-3">Contact us</h3>

              <div className="flex items-center gap-4">
                <img src="https://files.codingninjas.com/phone-31845.svg" />
                <p className="text-[15px]">1800-123-3598</p>
              </div>

              <div className="flex items-center gap-4">
                <img src="https://files.codingninjas.com/email-fill-31846.svg" />
                <p className="text-[15px]">contact@codingninjas.com</p>
              </div>
            </div>

            {/* Offerings */}
            <div>
              <h3 className="text-white text-sm mb-4">Our offerings</h3>

              <div className="flex flex-col gap-6">
                <a href="#form">
                  <img
                    src="https://files.codingninjas.in/new-cn-logos-4-31848.svg"
                    className="w-32"
                  />
                </a>

                <a
                  href="https://www.naukri.com/code360"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://files.codingninjas.com/new_cn_logos_4x-1710497457.webp"
                    className="w-32"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* CENTER SECTION */}
          <div>
            <h5 className="text-white font-semibold mb-4 text-[14px]">Coding Ninjas</h5>
            <ul className="space-y-3 text-[13px] text-[#BBBCBD]">
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
              <li>Pricing & refund policy</li>
              <li>Bug bounty</li>
              <li>Review</li>
              <li>Press release</li>
            </ul>
          </div>

          {/* RIGHT: PRODUCTS + COMMUNITY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">

            <div>
              <h5 className="text-white font-semibold mb-4 text-[14px]">Products</h5>
              <ul className="space-y-3 text-[13px] text-[#BBBCBD]">
                <li>Job Bootcamp</li>
                <li>Code 360</li>
                <li>Professional Certifications</li>
                <li>Student Certifications</li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4 text-[14px]">Community</h5>
              <ul className="space-y-3 text-[13px] text-[#BBBCBD]">
                <li>10X Club</li>
                <li>Student Chapters</li>
                <li>Hire from us</li>
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT ROW */}
        <div className="border-t border-[#463A2E] pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-xs font-[500] text-[#BBBCBD]">
              Copyright © Developed by - Shardul.
            </p>

            <div className="flex space-x-4">
              <img src="https://files.codingninjas.com/group-48095591-31840.svg" className="w-8 h-8" />
              <img src="https://files.codingninjas.com/app-facebook-1-31841.svg" className="w-8 h-8" />
              <img src="https://files.codingninjas.in/group-48095609-31842.svg" className="w-8 h-8" />
              <img src="https://files.codingninjas.in/app-twiter-31844.svg" className="w-8 h-8" />
              <img src="https://files.codingninjas.in/youtube-fill-31843.svg" className="w-8 h-8" />
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
