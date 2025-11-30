import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#15181A] text-white pt-10 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-10 z-10">
        
        {/* LEFT TEXT SECTION */}
        <div className="lg:w-[43%] text-left sm:text-center lg:text-left mt-2 sm:mt-4 lg:mt-0 flex flex-col items-center lg:items-start w-full">

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c23a] to-[#C6FF4D] font-semibold text-xs sm:text-sm lg:text-lg mb-5 sm:mb-8">
            Restricted by opportunities?
          </p>

          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white mb-12 sm:mb-20 lg:mb-32 leading-snug">
            Get the tech career <br />
            you deserve. <span className="text-white">Faster.</span>
          </h1>

          <div className="mt-6 sm:mt-10 space-y-6 sm:space-y-10 w-full">
            {[
              {
                text: (
                  <>
                    <span className="text-white font-semibold">128% average hike</span> via our placement cell
                  </>
                ),
              },
              {
                text: (
                  <>
                    <span className="text-white font-semibold">1.5 Lac+ learners</span> cracked top tech companies
                  </>
                ),
              },
              {
                text: (
                  <>
                    <span className="text-white font-semibold">1,400+ alumni in MAANG</span> & 103 unicorn startups
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-start gap-4 bg-[#15181A] px-5 py-4 sm:px-7 sm:py-5 border-t border-[#2d2d2d] hover:bg-[#1a1a1a] transition shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
              >
                <img src="/check.svg" alt="check" className="h-4 w-4 sm:h-5 sm:w-5" />
                <div className="w-px h-5 sm:h-6 bg-[#3a3a3a]"></div>
                <p className="text-gray-300 text-sm sm:text-[15px] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* RIGHT FORM SECTION */}
        <div id="form" className="relative w-full sm:w-[85%] md:w-[70%] lg:w-[45%] mx-auto flex justify-center">

          {/* Outer Glow */}
          <div className="absolute inset-0 flex justify-center pointer-events-none pb-4 pt-4 z-0">
            <div className="w-[92%] max-w-sm h-full rounded-[2rem]
              bg-gradient-to-b from-[#CBB997] via-[#CBB997] to-[#08405F] opacity-40 blur-2xl">
            </div>

          </div>

          {/* Solid Dark Background */}
          <div className="absolute w-[92%] max-w-sm h-full rounded-[2rem] bg-[#15181A] z-0"></div>

          {/* Visible Thick Border */}
          <div className="absolute w-[92%] max-w-sm h-full rounded-[2rem] 
              border-[12px] border-[#15181A] pointer-events-none z-30">
          </div>

          {/* White Form */}
          <div className="relative bg-white text-gray-800 rounded-[2.1rem] shadow-lg 
              p-6 sm:p-8 max-w-sm w-[90%] mx-auto border-none z-10">


            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Let's find the right course for you
            </h2>

            <p className="text-xs text-gray-700 mb-2">Experience</p>

            <div className="space-y-2 mb-4">
              {[
                "Working Professional - Technical Roles",
                "Working Professional - Non Technical",
                "College Student - Final Year",
                "College Student - 1st to Pre-final Year",
                "Others",
              ].map((option) => (
                <label key={option} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="experience" className="accent-black" />
                  {option}
                </label>
              ))}
            </div>

            <label className="text-xs sm:text-sm text-gray-700">
              Select topic of interest
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 mt-1 text-xs sm:text-sm mb-3">
              <option>Select your options/choices</option>
              <option>Full Stack Development</option>
              <option>Data Analytics</option>
              <option>Data Structures & Algorithms</option>
            </select>

            {["Name", "Phone Number", "Email"].map((label) => (
              <div key={label} className="mb-3">
                <label className="text-xs sm:text-sm text-gray-700">{label}</label>
                <input
                  type="text"
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 text-xs sm:text-sm"
                />
              </div>
            ))}

            <button className="w-full bg-[#F26A21] text-white py-2.5 sm:py-3 rounded-md 
              font-medium hover:bg-[#e45f1c] transition mt-1 sm:mt-2 text-sm sm:text-base">
              Find your course
            </button>

            <p className="text-[6px] sm:text-[7px] text-gray-500 mt-3 leading-snug">
              I authorise Coding Ninjas to contact me with course updates & offers via
              Email/SMS/Whatsapp/Call. I have read and agree to{" "}
              <a href="#" className="text-orange-600 underline">Privacy Policy</a> &{" "}
              <a href="#" className="text-orange-600 underline">Terms of use</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
