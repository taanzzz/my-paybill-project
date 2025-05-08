import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import {ArrowDownTrayIcon, ChatBubbleLeftRightIcon, GlobeAltIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import Aos from "aos";
import CountUp from "react-countup";

const Counting = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const statsData = [
    {
      icon: "GlobeAltIcon",
      number: 1203,
      suffix: "K",
      title: "Transactions",
      animation: "fade-up",
    },
    {
      icon: "UserGroupIcon",
      number: 321,
      suffix: "K",
      title: "Users",
      animation: "fade-up",
    },
    {
      icon: "ArrowDownTrayIcon",
      number: 3250,
      title: "App Downloads",
      animation: "fade-up",
    },
    {
      icon: "ChatBubbleLeftRightIcon",
      number: 4023,
      title: "App Reviews",
      animation: "fade-up",
    },
  ];

  const iconMap = {
    GlobeAltIcon,
    UserGroupIcon,
    ArrowDownTrayIcon,
    ChatBubbleLeftRightIcon,
  };

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-cyan-700 to-cyan-400 text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={index}
              data-aos={item.animation}
              data-aos-delay={index * 150}
              className="p-4"
            >
              <IconComponent className="h-10 w-10 mx-auto text-white" />
              <h3 className="text-4xl font-bold mt-2">
                {startCount ? <CountUp end={item.number} duration={3} /> : "0"}
                {item.suffix || ""}
              </h3>
              <p className="mt-2 text-lg">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counting;
