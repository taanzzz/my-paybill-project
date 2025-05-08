import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const services = {
  electricity: {
    title: "Electricity Connection",
    description: "Apply or manage your DESCO electricity services easily.",
    logo: "https://i.ibb.co.com/1GrJRRsR/DESCO-logo.webp"
  },
  gas: {
    title: "Gas Connection",
    description: "New gas line application and reconnection support via NESCO.",
    logo: "https://i.postimg.cc/HLHXbWJg/nesco-logo-png-seeklogo-382775.png"
  },
  water: {
    title: "Water Supply",
    description: "WASA water supply and pipeline service requests.",
    logo: "https://i.postimg.cc/WztMt9dq/chattogram-wasa-logo-png-seeklogo-362536.png"
  },
  internet: {
    title: "Internet Setup",
    description: "Connect to local ISP services for fast and reliable internet.",
    logo: "https://i.postimg.cc/9MmPHXVp/isp-internet-service-provider-white-text-illustration-free-vector.jpg"
  },
  recharge: {
    title: "Mobile Recharge",
    description: "Prepaid/postpaid top-up for all major mobile operators.",
    logo: "https://i.postimg.cc/tCwznHtq/product-1590939048.jpg"
  },
  cable: {
    title: "Cable TV Connection",
    description: "Setup cable TV line or resolve service issues.",
    logo: "https://i.postimg.cc/wMBkLqGv/tv-tuner-black-glyph-icon-260nw-1841084629.webp"
  },
  rent: {
    title: "House Rent Support",
    description: "Submit complaints or apply for rent assistance.",
    logo: "https://i.postimg.cc/KYqj4mBQ/rent-home-logo-vector-32088922.jpg"
  },
  garbage: {
  "title": "Garbage Collection",
  "description": "Request garbage pickup or report unattended waste in your area via local city corporation.",
  "logo": "https://i.ibb.co.com/PsbqTrXg/ccc-logo.jpg"
}
};

const BillServiceCards = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto text-center mb-10" data-aos="fade-down">
        <h2 className="text-4xl font-bold text-blue-800">Essential Public Services</h2>
        <p className="text-gray-600 mt-2">Connect with trusted providers across Bangladesh</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(services).map(([key, service], index) => (
          <div
            key={key}
            className="card bg-base-100 border border-blue-100 shadow-sm hover:shadow-xl transition-all rounded-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <figure className="p-6">
              <img src={service.logo} alt={service.title} className="w-16 h-16 object-contain" />
            </figure>
            <div className="px-6 pb-6 text-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BillServiceCards;