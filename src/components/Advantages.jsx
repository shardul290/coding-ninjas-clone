import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function Advantages() {
  const rows = [
    {
      title: "Structured + problem solving based",
      cn: true,
      free: false,
      other: true,
    },
    {
      title: "Fastest 1:1 doubt support",
      cn: true,
      free: false,
      other: false,
    },
    {
      title: "Integrated prep platform",
      cn: true,
      free: false,
      other: false,
    },
    {
      title: "Profiles highlighted on Naukri",
      cn: true,
      free: false,
      other: false,
    },
  ];

  /* ------------------------ Progress Animation ------------------------ */
  const sectionRef = useRef(null);
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setAnimateBars(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full pt-24 pb-40 overflow-hidden">

      {/* --- TOP → MIDDLE SOLID DARK BACKGROUND (#15181A) --- */}
      <div className="absolute inset-0 bg-[#15181A]"></div>

      {/* --- BOTTOM BLUE GRADIENT (#171830) --- */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-[#171830] pointer-events-none"></div>

      {/* --- SMALL GRID (32px) --- */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* --- LARGE GRID (320px) --- */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff19 1px, transparent 1px), linear-gradient(90deg, #ffffff19 1px, transparent 1px)",
          backgroundSize: "320px 320px",
        }}
      ></div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <h2 className="text-lg font-semibold text-[#0077FF] text-center mb-12">
          The Coding Ninjas advantage
        </h2>

        {/* Outer Box */}
        <div className="rounded-2xl border-2 border-[#2a2d33] p-10 bg-[#15181A]">

          {/* Header Row */}
          <div
            className="
              grid
              grid-cols-[1.6fr_0.8fr_0.8fr_0.8fr]
              sm:grid-cols-[2fr_1fr_1fr_1fr]
              text-[11px] sm:text-sm
              font-semibold text-gray-300
              pb-4 sm:pb-6
              border-b border-[#2a2d33]
            "
          >
            <div></div> {/*empty column title*/}
            <div className="text-gray-300 text-[13px] sm:text-[15px] font-medium leading-tight">
              <img
                src="https://files.codingninjas.com/new-cn-logos-32028.svg"
                className="w-7 mx-auto"
              />
            </div>

            <div className="text-center text-[12px] sm:text-sm">Free resources</div>
            <div className="text-center text-[12px] sm:text-sm">Other courses</div>
          </div>

          {/* Rows */}
          <div className="mt-4 space-y-3">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`
                  grid grid-cols-[2fr_1fr_1fr_1fr] items-center rounded-xl
                  px-3 py-3 sm:px-5 sm:py-5
                  ${i % 2 === 0 ? "bg-[#15181A]" : "bg-[#141414]"}
                `}
              >
                {/* Row title */}
                <div className="text-gray-300 text-[12px] sm:text-[14px] md:text-[15px] font-medium leading-tight">
                  {row.title}
                </div>


                {/* CN */}
                <div className="flex justify-center">
                  {row.cn ? (
                    <img
                      src="https://files.codingninjas.com/check-fill-32029.svg"
                      className="w-4 sm:w-5"
                    />
                  ) : (
                    <span className="text-red-400 text-base sm:text-lg">✕</span>
                  )}
                </div>

                {/* Free */}
                <div className="flex justify-center">
                  {row.free ? (
                    <img
                      src="https://files.codingninjas.com/check-fill-32029.svg"
                      className="w-4 sm:w-5"
                    />
                  ) : (
                    <span className="text-red-400 text-base sm:text-lg">✕</span>
                  )}
                </div>

                {/* Other */}
                <div className="flex justify-center">
                  {row.other ? (
                    <img
                      src="https://files.codingninjas.com/check-fill-32029.svg"
                      className="w-4 sm:w-5"
                    />
                  ) : (
                    <span className="text-red-400 text-base sm:text-lg">✕</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="mt-16 space-y-12">

            {/* CN Progress */}
            <div>
              <div
                className="
                  flex flex-col sm:flex-row
                  items-start sm:items-center
                  justify-start sm:justify-between
                  text-gray-300
                  text-xs sm:text-sm
                  gap-1 sm:gap-0
                  mb-2 sm:mb-3
                "
              >
                <div className="flex items-center gap-2">
                  <img
                    src="https://files.codingninjas.com/new-cn-logos-31142.svg"
                    className="w-auto"
                  />
                </div>

                <span
                  className="
                    text-transparent 
                    bg-clip-text 
                    bg-gradient-to-r 
                    from-[#d414f9] 
                    via-[#ff39b0] 
                    to-[#ff9b22]
                    text-xs sm:text-sm
                    mt-1 sm:mt-0
                  "
                >
                  Your dream role, faster and with confidence! ⚡
                </span>
              </div>

              <div className="h-1 bg-[#202225] rounded-full overflow-hidden">
                <div
                  className="
                    h-full 
                    bg-gradient-to-r 
                    from-pink-500 
                    to-yellow-400 
                    transition-all 
                    duration-[1800ms]
                    rounded-full
                  "
                  style={{ width: animateBars ? "100%" : "0%" }}
                ></div>
              </div>
            </div>

            {/* Others Progress */}
            <div>
              <div
                className="
                  flex flex-col sm:flex-row
                  items-start sm:items-center
                  justify-start sm:justify-between
                  text-gray-300
                  text-sm sm:text-base     /* increased text size */
                  gap-1 sm:gap-0
                  mb-2 sm:mb-3
                  mt-2 sm:mt-0            /* top margin for small devices */
                "
              >
                <span className="font-medium">Others</span>

                <span className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-0">
                  Average role, under-confident
                </span>
              </div>

              <div className="h-1 bg-[#202225] rounded-full overflow-hidden">
                <div
                  className="
                    h-full 
                    bg-gray-500 
                    transition-all 
                    duration-[1800ms]
                    rounded-full
                  "
                  style={{ width: animateBars ? "75%" : "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTON OUTSIDE THE BOX */}
        <div className="w-full flex justify-center mt-12">
          <button
            onClick={() =>
              document
                .getElementById("courses")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#ff6d28] px-10 py-5 text-white text-xl font-semibold rounded-lg hover:bg-[#ff874a] transition flex items-center gap-3">
            Explore offerings
            <img
              src="https://files.codingninjas.com/arrow-double-down-32073.svg"
              className="w-6 rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
