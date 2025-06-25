import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const bills = [
  {
    title: "Pay Electricity Bill",
    desc: "Never miss a due date again. Pay your electricity bill on time.",
    img: "https://i.ibb.co.com/p6XDQyTm/electric-background-t7jhuccoiprq0bih.jpg",
    link: "/pay/electricity",
  },
  {
    title: "Pay Gas Bill",
    desc: "Ensure uninterrupted gas service. Pay safely and easily.",
    img: "https://i.postimg.cc/5tTwFDGM/5659588fd72479571bba891159c71bbb.jpg",
    link: "/pay/gas",
  },
  {
    title: "Pay Water Bill",
    desc: "Keep the water running. Settle your bill in seconds.",
    img: "https://i.ibb.co.com/1t3Lydjt/pexels-photo-416528.webp",
    link: "/pay/water",
  },
  {
    title: "Pay Internet Bill",
    desc: "Stay connected without interruptions. Pay your internet bill with ease.",
    img: "https://i.ibb.co.com/8nZYc65Z/300053-internet-wallpaper-top-free-internet-background.jpg",
    link: "/pay/internet",
  },
  {
    title: "Recharge Mobile Balance",
    desc: "Top-up anytime, anywhere. Keep your phone active and running.",
    img: "https://i.ibb.co.com/C56dhWW1/digital-futuristic-mobile-technology-concept-background-1017-25464.jpg",
    link: "/pay/recharge",
  },
  {
    title: "Pay Cable TV Bill",
    desc: "Enjoy uninterrupted entertainment. Settle your cable bill now.",
    img: "https://i.ibb.co.com/8LgR9b3v/modern-living-room-with-large-tv-couch-plants-9975-33221.jpg",
    link: "/pay/cable",
  },
  {
    title: "Pay House Rent",
    desc: "Make your monthly rent payments safe and simple, directly from your account.",
    img: "https://i.ibb.co.com/1YJdBNvp/isometric-smart-city-background-52683-7533.jpg",
    link: "/pay/rent",
  },
];

const BillCarousel = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        speed={700}
        effect="slide"
        touchRatio={1.2}
        threshold={5}
        loop={true}
        className="relative"
      >
        {bills.map((bill, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              className="w-full min-w-0 h-[450px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-blend-overlay shadow-2xl relative flex items-center justify-center rounded-2xl overflow-hidden"
              style={{ backgroundImage: `url(${bill.img})` }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
              <motion.div
                className="text-white z-10 px-6 sm:px-8 text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight drop-shadow-md">
                  {bill.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light leading-relaxed drop-shadow-md">
                  {bill.desc}
                </p>
                <Link
                  to={bill.link}
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Pay Now
                </Link>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BillCarousel;