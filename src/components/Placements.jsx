import React, { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

export default function Placements() {
  const sliderRef = useRef(null);

  const placements = [
    {
      company: "Optum",
      image: "https://files.codingninjas.com/naveen_optum-32719.png",
      logo: "https://files.codingninjas.com/optum-32664.png",
      tag: "Non-CS/IT",
    },
    {
      company: "Uber",
      image: "https://files.codingninjas.com/sonu_uber-32695.png",
      logo: "https://files.codingninjas.com/uber-32669.png",
      tag: "Tier 2/3 college",
    },
    {
      company: "Microsoft",
      image: "https://files.codingninjas.com/shourya_microsoft-32693.png",
      logo: "https://files.codingninjas.com/microsoft-32663.png",
      tag: "CS/IT",
    },
    {
      company: "Persistent",
      image: "https://files.codingninjas.com/pradeep_persistent-32689.png",
      logo: "https://files.codingninjas.com/persistent-32668.png",
      tag: "Tier 2/3 college",
    },
    {
      company: "PayPal",
      image: "https://files.codingninjas.com/amitesh_paypal-32683.png",
      logo: "https://files.codingninjas.com/paypal-32667.png",
      tag: "CS/IT",
    },
    {
      company: "Google",
      image: "https://files.codingninjas.com/kashish_google-32687.png",
      logo: "https://files.codingninjas.com/google-32675.png",
      tag: "CS/IT",
    },
    {
      company: "AWS",
      image: "https://files.codingninjas.com/yash_aws-32699.png",
      logo: "https://files.codingninjas.com/amazon-web-service-32671.png",
      tag: "Service to Product",
    },
  ];

  // Duplicate list for smooth infinite scroll
  const repeatedList = [...placements, ...placements];

  // Auto-scrolling logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let current = 0;

    function scroll() {
      current += 1.2; // speed (same as Coding Ninjas)
      slider.scrollLeft = current;

      // Restart when end reached
      if (current >= slider.scrollWidth - slider.clientWidth) {
        current = 0;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  }, []);

  return (
    <section id="placements" className="w-full mt-20 select-none mb-0">
      {/* Header */}
      <div className="relative w-full px-6 md:px-16 flex items-center justify-center">
        <h2 className="text-[17px] font-[600] text-[#141414] text-center">
          Our Ninjas at top tech companies
        </h2>

        {/* Desktop button (show above 850px) */}
        <button className="absolute right-0 hidden max-[850px]:hidden md:flex items-center gap-2 text-[#ff6d28] text-sm font-[500] hover:opacity-80 transition">
          <FaDownload /> Download placement report
        </button>
      </div>

      {/* Continuous Auto-Scrolling Row */}
      <div
        ref={sliderRef}
        className="mt-4 w-full overflow-hidden flex gap-8 whitespace-nowrap p-6 md:px-10"
      >
        {repeatedList.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden min-w-[160px] bg-white 
                      rounded-b-2xl rounded-t-2xl shadow-lg p-2 
                      text-center flex flex-col items-center"
          >
            {/* Border effect */}
            <div
              className="absolute inset-0 rounded-b-2xl rounded-t-2xl pointer-events-none"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "transparent",
                borderTopColor: "white",
              }}
            ></div>

            <div className="flex flex-col items-center gap-[0px]">
              <img
                src={item.image}
                className="w-16 h-16 rounded-full object-cover shadow-md"
                alt=""
              />

              <img
                src={item.logo}
                className="w-[100px] h-[90px]"
                alt={item.company}
              />

              <p className="text-[12px] font-semibold text-[#838485] leading-[0] mb-2">
                {item.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile button (below 850px only) */}
      <button className="flex max-[850px]:flex md:hidden items-center gap-2 text-[#ff6d28] text-sm font-[500] hover:opacity-80 transition mx-auto mt-4">
        <FaDownload /> Download placement report
      </button>

    </section>
  );
}