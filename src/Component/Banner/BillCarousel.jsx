import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';


const bills = [
  {
    title: "Pay Electricity Bill",
    desc: "Never miss a due date again.Pay your electricity bill on time.",
    img: "https://i.ibb.co.com/p6XDQyTm/electric-background-t7jhuccoiprq0bih.jpg",
    link: "/pay/electricity",
  },
  {
    title: "Pay Gas Bill",
    desc: "Ensure uninterrupted gas service.Pay safely and easily.",
    img: "https://i.postimg.cc/5tTwFDGM/5659588fd72479571bba891159c71bbb.jpg",
    link: "/pay/gas",
  },
  {
    title: "Pay Water Bill",
    desc: "Keep the water running.Settle your bill in seconds.",
    img: "https://i.ibb.co.com/1t3Lydjt/pexels-photo-416528.webp",
    link: "/pay/water",
  },
  {
    title: "Pay Internet Bill",
    desc: "Stay connected without interruptions.Pay your internet bill with ease.",
    img: "https://i.ibb.co.com/8nZYc65Z/300053-internet-wallpaper-top-free-internet-background.jpg",
    link: "/pay/internet",
  },
  {
    title: "Recharge Mobile Balance",
    desc: "Top-up anytime,anywhere.Keep your phone active and running.",
    img: "https://i.ibb.co.com/C56dhWW1/digital-futuristic-mobile-technology-concept-background-1017-25464.jpg",
    link: "/pay/recharge",
  },
  {
    title: "Pay Cable TV Bill",
    desc: "Enjoy uninterrupted entertainment.Settle your cable bill now.",
    img: "https://i.ibb.co.com/8LgR9b3v/modern-living-room-with-large-tv-couch-plants-9975-33221.jpg",
    link: "/pay/cable",
  },
  {
    title: "Pay House Rent",
    desc: "Make your monthly rent payments safe and simple,directly from your account.",
    img: "https://i.ibb.co.com/1YJdBNvp/isometric-smart-city-background-52683-7533.jpg",
    link: "/pay/rent",
  },
];



const BillCarousel = () => {
  return (
    <div className="w-full h-auto">
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
      >
        {bills.map((bill, idx) => (
          <SwiperSlide key={idx}>
            <div
  className="w-full min-w-0 h-[500px] sm:h-[350px] md:h-[450px] lg:h-[630px] bg-cover bg-center bg-blend-overlay  shadow-xl relative flex items-center justify-center"
  style={{ backgroundImage: `url(${bill.img})` }}
>
  <div className="absolute inset-0 bg-black/50 "></div>
  <div className="text-white z-10 px-4 sm:px-6 text-center max-w-xs sm:max-w-md md:max-w-lg">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{bill.title}</h2>
    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">{bill.desc}</p>
    <Link
      to={bill.link}
      className="bg-blue-500 hover:bg-blue-600 transition px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base text-white font-medium"
    >
      Pay Now
    </Link>
  </div>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BillCarousel;
