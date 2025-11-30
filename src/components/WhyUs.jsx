import React, { useEffect, useRef, useState } from "react"; 
import { FaUserFriends, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

export default function WhyUs() {
  const features = [
    {
      icon: <FaUserFriends className="text-green-400 text-3xl" />,
      title: "Fastest 1:1 doubt support",
    },
    {
      icon: <FaChalkboardTeacher className="text-purple-400 text-3xl" />,
      title: "Stanford/IIT/MAANG faculty",
    },
    {
      icon: <FaBriefcase className="text-orange-400 text-3xl" />,
      title: "Placement assistance",
    },
  ];

  /* 🔥 VIDEO TIMER STATE */
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const [timeLeft, setTimeLeft] = useState(0);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      const current = video.currentTime;
      const total = video.duration || 1;
      setDuration(total);
      setTimeLeft(Math.ceil(total - current));
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateTime);
    video.addEventListener("ended", () => video.play());

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateTime);
    };
  }, []);

  const progress = (1 - timeLeft / duration) * 100;
  const strokeDasharray = 100;
  const strokeDashoffset = strokeDasharray - (progress / 100) * strokeDasharray;

  return (
    <section className="w-full relative py-32 bg-[#15181A] overflow-hidden">

      {/* --- SMALL GRID (32px) --- */}
      <div
        className="absolute inset-0 opacity-[0.30]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          backgroundColor: "#15181A",
        }}
      ></div>

      {/* --- MEDIUM BOX GRID (every 10 small squares = 320px) --- */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff19 1px, transparent 1px), linear-gradient(90deg, #ffffff19 1px, transparent 1px)",
          backgroundSize: "320px 320px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <div className="w-full flex justify-center mt-10">
          <svg
            width="100%"
            height="300"
            viewBox="0 0 1200 250"
            className="opacity-[0.5]"
          >
            <defs>
              <linearGradient id="whyUsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e9d79d" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7fb8d9" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              fontSize="250"
              fontWeight="900"
              fill="#141718"
              stroke="url(#whyUsGradient)"
              strokeWidth="1.8"
              strokeLinejoin="round"
            >
              WHY US
            </text>
          </svg>
        </div>

        {/* Main section content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 items-center">

          {/* Left Card */}
          <div className="flex justify-center">
            <div className="bg-[#2D2D2D] p-2 rounded-2xl border border-[#818181] shadow-md relative w-[350px]">

              {/* VIDEO */}
              <video
                ref={videoRef}
                src="https://files.codingninjas.com/stanford-iit-maang-faculty-with-subtitle-3-33140.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl w-full h-auto"
              />

              {/* SOUND TOGGLE ICON */}
              <button
                onClick={() => {
                  const video = videoRef.current;
                  if (video) {
                    video.muted = !video.muted;
                    setIsMuted(video.muted);
                  }
                }}
                className="absolute top-4 right-4 px-3 py-2 rounded-lg backdrop-blur-md transition-all bg-[#2D2D2D]"
              >
                {isMuted ? (
                  /* Muted icon (with X) — EXACT like real CN */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-6 fill-[#A5A6A7]"
                  >
                    <path d="M5 9v6h4l5 5V4L9 9H5z" />
                    <path
                      d="M16 9l4 4m0-4l-4 4"
                      stroke="#A5A6A7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  /* Unmuted icon (no X) */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-6 fill-[#A5A6A7]"
                  >
                    <path d="M5 9v6h4l5 5V4L9 9H5z" />
                    <path
                      d="M16.5 8.5a4 4 0 010 7"
                      stroke="#A5A6A7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                )}
              </button>

              {/* TIMER CIRCLE (🔥 FIXED & SYNCED) */}
              <div className="absolute bottom-4 right-4">
                <div className="relative w-12 h-12">

                  {/* Outer grey ring */}
                  <svg className="absolute inset-0" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      stroke="#151515"
                      strokeWidth="1.5"
                      fill="#1A1A1A"
                    />

                    {/* Progress ring */}
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      stroke="#818181"
                      strokeWidth="2"
                      fill="transparent"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      style={{ transition: "stroke-dashoffset 0.2s linear",
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                       }}
                    />
                  </svg>

                  {/* Time text */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#818181] text-[14px]">
                    {timeLeft}
                  </div>

                </div>
              </div>

              {/* TEXT BELOW */}
              <div className="py-4">
                <h3 className="text-orange-400 font-semibold text-[18px]">
                  Ankush Singla
                </h3>
                <p className="text-gray-400 text-[13px] ">
                  Co-Founder of Coding Ninjas | Mentor
                </p>
              </div>

            </div>
          </div>

          {/* Right side features */}
          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="
                  flex items-center justify-center gap-4
                  bg-[#131619] 
                  p-5 
                  border border-[#2a2d33] 
                  rounded-xl 
                  shadow-md 
                  backdrop-blur-sm 
                  cursor-pointer 
                  transition-all 
                  hover:bg-[#212426]
                "
              >
                {f.icon}
                <span className="text-white text-lg font-medium">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
