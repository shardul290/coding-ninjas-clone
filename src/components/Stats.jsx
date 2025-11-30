import { useEffect, useRef, useState } from "react";
import {
  FaUserGraduate,
  FaChartLine,
  FaBuilding,
  FaRupeeSign,
} from "react-icons/fa";

function Stats() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeLine, setActiveLine] = useState(-1);
  const [lineProgress, setLineProgress] = useState({});
  const sectionsRef = useRef([]);
  const headingRef = useRef(null);
  const headingWrapperRef = useRef(null);

  const headingLines = ["9 years of", "transforming", "tech careers"];

  const stats = [
    {
      icon: <FaUserGraduate className="text-[40px]" />,
      color: "#7C3AED",
      title: "1.5 Lac+ learners",
      subtitle: "cracked dream roles at top tech companies",
    },
    {
      icon: <FaBuilding className="text-[40px]" />,
      color: "#22C55E",
      title: "1,400 Alumni in MAANG",
      subtitle: "& more in 103/111 Unicorns",
    },
    {
      icon: <FaRupeeSign className="text-[40px]" />,
      color: "#EC4899",
      title: "1 Cr+ highest CTC",
      subtitle: "after completing the course",
    },
    {
      icon: <FaChartLine className="text-[40px]" />,
      color: "#3B82F6",
      title: "128% average hike",
      subtitle: "via our placement cell",
    },
  ];

  // --- Observe main stats (unchanged) ---
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setActiveIndex(index);
        } else if (activeIndex === index) {
          setActiveIndex(-1);
        }
      });
    }, options);

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  // --- Heading animation ---
  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const wrapper = headingWrapperRef.current;
        const heading = headingRef.current;
        if (!wrapper || !heading) {
          setActiveLine(-1);
          return;
        }

        const viewportCenter = window.innerHeight / 2;
        const wrapperRect = wrapper.getBoundingClientRect();
        const wrapperCenter = wrapperRect.top + wrapperRect.height / 2;

        const activationDistance = window.innerHeight * 0.6;
        if (Math.abs(wrapperCenter - viewportCenter) > activationDistance) {
          setActiveLine(-1);
          return;
        }

        const children = Array.from(heading.children);
        let bestIndex = -1;
        let bestDistance = Infinity;

        children.forEach((child, idx) => {
          const r = child.getBoundingClientRect();
          const childCenter = r.top + r.height / 2;
          const dist = Math.abs(childCenter - viewportCenter);
          if (dist < bestDistance) {
            bestDistance = dist;
            bestIndex = idx;
          }
        });

        setActiveLine(bestIndex);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // --- Line fill sync with scroll ---
  useEffect(() => {
    const handleScroll = () => {
      const newProgress = {};

      stats.forEach((_, i) => {
        const el = sectionsRef.current[`line-${i}`];
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate how much of the line is in view (0–100%)
        const visible = 1 - Math.min(Math.max(rect.top / viewportHeight, 0), 1);

        newProgress[i] = visible * 100;
      });

      setLineProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [stats]);

  return (
    <section className="relative w-screen flex flex-col items-center bg-[#15181A] text-center overflow-hidden">
      {/* --- Animated Heading Section  --- */}
      <div
        ref={headingWrapperRef}
        className="
          flex flex-col items-center justify-center
          min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[70vh]
          transition-all duration-700 ease-out
          mt-4 sm:mt-4 md:mt-6 lg:mt-8
          mb-4 sm:mb-4 md:mb-6 lg:mb-8
        "
      >
        <h2
          ref={headingRef}
          className="flex flex-col space-y-3 sm:space-y-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          {headingLines.map((line, i) => {
            const isActive = activeLine === i;
            return (
              <div
                key={i}
                className="transition-all duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform will-change-opacity"
                style={{
                  color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                  transform: `scale(${isActive ? 1.09 : 0.95}) translateY(${
                    isActive ? "-4px" : "0"
                  })`,
                  opacity: isActive ? 1 : 0.55,
                }}
              >
                {line}
              </div>
            );
          })}
        </h2>
      </div>

      {/* --- Stats Sections (unchanged except line animation) --- */}
      <div className="flex flex-col items-center w-full space-y-10 sm:space-y-14 md:space-y-20 lg:space-y-24">
        {stats.map((stat, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              data-index={i}
              className="flex flex-col items-center justify-center min-h-[10vh] transition-all duration-700 ease-out"
              style={{
                opacity: isActive ? 1 : 0.5,
                transform: `scale(${isActive ? 1.05 : 0.9})`,
              }}
            >
              {/* Icon */}
              <div
                className="p-6 rounded-2xl mb-16 transition-all duration-500"
                style={{
                  backgroundColor: isActive ? stat.color : "#1F1F1F",
                  color: "#fff",
                }}
              >
                {stat.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-5xl
                  lg:text-[68px]
                  font-semibold
                  mb-12
                  transition-all duration-700
                "
                style={{
                  color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                  transform: `scale(${isActive ? 1.1 : 0.95})`,
                }}
              >
                {stat.title}
              </h3>

              {/* Subtitle */}
              <p
                className="
                  text-gray-400
                  text-sm
                  sm:text-base
                  md:text-xl
                  lg:text-[26px]
                  transition-all duration-700
                "
                style={{
                  opacity: isActive ? 1 : 0.4,
                  transform: `scale(${isActive ? 1 : 0.9})`,
                }}
              >
                {stat.subtitle}
              </p>

              {/* Divider line with scroll sync */}
              {i !== stats.length - 1 && (
                <div
                  ref={(el) => (sectionsRef.current[`line-${i}`] = el)}
                  className="relative w-[3px] h-20 md:h-32 mt-6 mb-6 overflow-hidden"
                >
                  {/* Base dashed line */}
                  <div className="absolute inset-0 border-l-[2px] border-dashed border-gray-700 opacity-40"></div>

                  {/* Scroll-synced fill */}
                  <div
                    className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-gray-400 to-gray-500 transition-[opacity] duration-300 ease-linear"
                    style={{
                      height: `${Math.min(
                        Math.max(lineProgress?.[i] || 0, 0),
                        100
                      )}%`,
                      opacity: lineProgress?.[i] > 0 ? 0.9 : 0.3,
                    }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* --- Button --- */}
      <div className="w-full flex justify-center mt-20 mb-20 sm:mb-24 md:mb-28">
        <button
          onClick={() =>
            document
              .getElementById("courses")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#ff6d28] px-8 py-3 text-white text-sm font-semibold rounded-lg hover:bg-[#ff874a] transition flex items-center gap-3"
        >
          Explore offerings
          <img
            src="https://files.codingninjas.com/arrow-double-down-32073.svg"
            className="w-4 rotate-180"
          />
        </button>
      </div>
    </section>
  );
}

export default Stats;
