import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const partners = [
  {
    name: 'bKash',
    icon: 'https://i.ibb.co.com/Z6hgv3Zy/download.png', 
    description: 'Trusted mobile financial service',
    color: 'text-pink-600',
  },
  {
    name: 'Nagad',
    icon: 'https://i.ibb.co.com/q3GyDZQt/download-1.png',
    description: 'Digital financial service by Bangladesh Post Office',
    color: 'text-orange-600',
  },
  {
    name: 'Rocket',
    icon: 'https://i.ibb.co.com/Q797Q8xY/download-3.png',
    description: 'DBBL mobile banking service',
    color: 'text-purple-600',
  },
  {
    name: 'Upay',
    icon: 'https://i.ibb.co.com/pjHt3BCF/download-2.png',
    description: 'Secure transactions with fast delivery',
    color: 'text-green-600',
  },
];

const TrustedPartners = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">Our Trusted Partners</h2>
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
    {partners.map((partner, index) => (
      <div
        key={index}
        className="border rounded-xl p-6 text-center shadow hover:shadow-lg transition duration-300 bg-white"
        data-aos="zoom-in"
        data-aos-delay={index * 100}
      >
        <div className="mb-3 flex justify-center">
          <img
            src={partner.icon} // now expects a URL or image path
            alt={`${partner.name} logo`}
            className="h-16 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
        <p className="text-gray-600">{partner.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default TrustedPartners;
