import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const partners = [
  {
    name: 'BillFly',
    icon: '✈️',
    description: 'Fast bill payment gateway',
    color: 'text-yellow-500',
  },
  {
    name: 'PayPen',
    icon: '✏️',
    description: 'Smart invoice tools',
    color: 'text-red-500',
  },
  {
    name: 'QuickUp',
    icon: '⬆️',
    description: 'Reliable top-up services',
    color: 'text-blue-500',
  },
  {
    name: 'PayPro',
    icon: '💳',
    description: 'Secure payment system',
    color: 'text-green-500',
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
            <div className={`text-5xl mb-3 ${partner.color}`}>{partner.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
            <p className="text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;