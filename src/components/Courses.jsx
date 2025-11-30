import React, { useRef, useEffect, useState} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Courses() {
  const categories = [
    "All",
    "Data Analytics",
    "Generative AI",
    "Full Stack Development",
  ];

  const workingCourses = [
    {
      img: "/course1.webp",
      logo: "/img-logo1.webp",
      title: "Professional Certification in Data Analytics with GenAI",
      org: "Vishlesan i-hub, IIT Patna",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/spark.webp",
        "/icons/mysql.webp",
        "/icons/meta.svg"
      ],
    },
    {
      img: "/course2.webp",
      logo: "/img-logo2.svg",
      title: "PG Certification in Data Analytics with GenAI",
      org: "E&ICT Academy, IIT Guwahati",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/meta.svg",
        "/icons/spark.webp",
        "/icons/mysql.webp",
      ],
    },
    {
      img: "/course3.webp",
      logo: "/img-logo3.svg",
      title: "Data Analytics Job Bootcamp with GenAI",
      org: "Coding Ninjas",
      tag: "Job Bootcamp",
      duration: "6 months",
      icons: [
        "/icons/meta.svg",
        "/icons/spark.webp",
        "/icons/python.webp",
      ],
    },
    {
      img: "/course3.webp",
      logo: "/img-logo4.webp",
      title: "Advanced Certification in GenAI & Multi Agent Systems",
      org: "Coding Ninjas",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/gpt.svg",
        "/icons/meta.svg",
        "/icons/mysql.webp",
      ],
    },
    {
      img: "/course3.webp",
      logo: "/img-logo1.webp",
      title: "Advanced Certification in GenAI & Multi Agent Systems",
      org: "Coding Ninjas",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/gpt.svg",
        "/icons/meta.svg",
        "/icons/mysql.webp",
      ],
    },
    {
      img: "/course2.webp",
      logo: "/img-logo5.svg",
      title: "Advanced Certification in GenAI & Multi Agent Systems",
      org: "Coding Ninjas",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/spark.webp",
        "/icons/mysql.webp",
        "/icons/meta.svg"
      ],
    },
    {
      img: "/course3.webp",
      logo: "/img-logo3.svg",
      title: "Advanced Certification in GenAI & Multi Agent Systems",
      org: "Coding Ninjas",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/gpt.svg",
        "/icons/meta.svg",
        "/icons/mysql.webp",
      ],
    },
    {
      img: "/course3.webp",
      logo: "/img-logo3.svg",
      title: "Advanced Certification in GenAI & Multi Agent Systems",
      org: "Coding Ninjas",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/gpt.svg",
        "/icons/meta.svg",
        "/icons/mysql.webp",
      ],
    },
    {
      img: "/course5.webp",
      logo: "/img-logo3.svg",
      title: "Advanced Certification in GenAI & Multi Agent Systems",
      org: "Coding Ninjas",
      tag: "Certification",
      duration: "6 months",
      icons: [
        "/icons/cpp.webp",
        "/icons/database.webp",
        "/icons/react.svg"
      ],
    },
  ];

  const studentCourses = [
  {
    img: "/course3.webp",
    logo: "/img-logo1.webp",
    title: "Training and Internship Certification in Data Analytics",
    org: "Vishlesan i-hub, IIT Patna",
    tag: "Certification",
    duration: "6 months",
    icons: [
      "/icons/mysql.webp",
      "/icons/python.webp",
      "/icons/spark.webp",
    ],
  },
  {
    img: "/course2.webp",
    logo: "/img-logo4.webp",
    title: "Training and Internship Certification in Full Stack Development",
    org: "IITM Pravartak, TIH IIT Madras",
    tag: "Certification",
    duration: "9 months",
    icons: [
      "/icons/react.svg",
      "/icons/node.svg",
      "/icons/database.webp",
    ],
  },
  {
    img: "/course3.webp",
    logo: "/img-logo4.webp",
    title: "Training and Internship Certification in Advanced DSA",
    org: "IITM Pravartak, TIH IIT Madras",
    tag: "Certification",
    duration: "4 months",
    icons: [
      "/icons/cpp.webp",
      "/icons/python.webp",
      "/icons/gpt.svg",
    ],
  },
  {
    img: "/course2.webp",
    logo: "/img-logo3.svg",
    title: "Training and Internship Certification in Machine Learning with Python",
    org: "IIT Guwahati",
    tag: "Certification",
    duration: "6 months",
    icons: [
      "/icons/spark.webp",
      "/icons/python.webp",
      "/icons/gpt.svg",
    ],
  },
  {
    img: "/course5.webp",
    logo: "/img-logo1.webp",
    title: "Training and Internship Certification in Web Development with React",
    org: "IITM Pravartak, TIH IIT Madras",
    tag: "Certification",
    duration: "5 months",
    icons: [
      "/icons/react.svg",
      "/icons/node.svg",
      "/icons/database.webp",
    ],
  },
];


  return (
    <section id="courses" className="mt-10 py-16">
      <h2 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-300 mb-10">
        OUR COURSES
      </h2>

      <CourseCategory
        title="For Working Professionals"
        categories={categories}
        courses={workingCourses}
      />

      <CourseCategory
        title="For College Students"
        categories={[
          "All",
          "Data Analytics",
          "Full Stack Development",
          "Data Structures and Algorithms",
          "Generative AI",
        ]}
        courses={studentCourses}
      />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                           COURSE CATEGORY SECTION                          */
/* -------------------------------------------------------------------------- */
function CourseCategory({ title, categories, courses }) {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => el && el.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // Moves one card width
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative max-w-4xl mx-auto mb-20">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      {/* Category Tabs */}
      <div className="mb-6">
        <div
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-3"
          style={{
            whiteSpace: "nowrap",
            scrollSnapType: "x mandatory",
          }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full border text-sm font-medium shrink-0 transition ${
                i === 0
                  ? "border-black text-black bg-[#F9F9F9]"
                  : "border-gray-300 text-gray-600 hover:text-black hover:border-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Thin Divider Line */}
        <div className="border-t border-gray-200 mt-2"></div>
      </div>

      {/* Scrollable Cards */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide pb-5"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {courses.map((c, i) => (
            <div
              key={i}
              className="flex-none w-[280px]  bg-white rounded-2xl border-[1.5px] border-[#E6C975] shadow-sm hover:shadow-md transition p-4 scroll-snap-align-start"
            >
              {/* image + partner logo overlay (only change made) */}
              <div className="relative mb-3">
                <img
                  src={c.img}
                  alt={c.title}
                  className="rounded-xl w-full h-28 object-cover"
                />
                {c.logo && (
                  <div className="absolute -bottom-3 left-2 bg-white rounded-lg shadow-md p-1">
                    <img
                      src={c.logo}
                      alt="partner-logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                )}
              </div>

              <h4
                className="font-semibold text-[16px] mb-8 text-[#1B1C1E] leading-snug line-clamp-2 overflow-hidden text-ellipsis"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {c.title}
              </h4>
              <p className="text-gray-500 text-xs mb-1">{c.org}</p>
              <span className="inline-block bg-amber-100 text-gray-700 text-[11px] font-medium px-3 py-0.5 rounded-full mb-5 w-fit capitalize">
                {c.tag}
              </span>
              <div className="flex justify-between items-center mt-auto border-t pt-2">
                <div className="flex items-center gap-3 mt-2">
                  {c.icons.map((icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt="tech-icon"
                      className="w-7 h-7 object-contain"
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-xs">{c.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className={`absolute bottom-[-35px] right-[80px] w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition-all duration-200 ${
            showLeft
              ? "opacity-100 hover:shadow-lg hover:scale-105"
              : "opacity-70 cursor-default"
          }`}
        >
          <ChevronLeft
            size={20}
            className={`${showLeft ? "text-[#1B1C1E]" : "text-gray-400"}`}
          />
        </button>

        <button
          onClick={() => scroll("right")}
          className={`absolute bottom-[-35px] right-0 w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition-all duration-200 ${
            showRight
              ? "opacity-100 hover:shadow-lg hover:scale-105"
              : "opacity-70 cursor-default"
          }`}
        >
          <ChevronRight
            size={20}
            className={`${showRight ? "text-[#1B1C1E]" : "text-gray-400"}`}
          />
        </button>
      </div>
    </div>
  );
}