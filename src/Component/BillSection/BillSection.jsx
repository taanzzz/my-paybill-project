import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const billsData = [
  {
    id: 'electricity',
    organization: 'Desco',
    billType: 'Electricity',
    amount: 1200,
    dueDate: '10-05-2025',
    dueDay: 'Monday',
    logourl: 'https://i.ibb.co.com/1GrJRRsR/DESCO-logo.webp'
  },
  {
    id: 'gas',
    organization: 'Nesco',
    billType: 'Gas',
    amount: 850,
    dueDate: '18-05-2025',
    dueDay: 'Tuesday',
    logourl: 'https://i.postimg.cc/HLHXbWJg/nesco-logo-png-seeklogo-382775.png'
  },
  {
    id: 'water',
    organization: 'Water Supply',
    billType: 'Water',
    amount: 400,
    dueDate: '22-05-2025',
    dueDay: 'Friday',
    logourl: 'https://i.postimg.cc/WztMt9dq/chattogram-wasa-logo-png-seeklogo-362536.png'
  },
  {
    id: 'internet',
    organization: 'ISP',
    billType: 'Internet',
    amount: 1000,
    dueDate: '30-05-2025',
    dueDay: 'Saturday',
    logourl: 'https://i.postimg.cc/9MmPHXVp/isp-internet-service-provider-white-text-illustration-free-vector.jpg'
  },
  {
    id: 'recharge',
    organization: 'Mobile Carrier',
    billType: 'Recharge',
    amount: 100,
    dueDate: '27-05-2025',
    dueDay: 'Saturday',
    logourl: 'https://i.postimg.cc/tCwznHtq/product-1590939048.jpg'
  },
  {
    id: 'cable',
    organization: 'Cable TV',
    billType: 'Cable TV',
    amount: 500,
    dueDate: '25-05-2025',
    dueDay: 'Sunday',
    logourl: 'https://i.postimg.cc/wMBkLqGv/tv-tuner-black-glyph-icon-260nw-1841084629.webp'
  },
  {
    id: 'rent',
    organization: 'House Rent',
    billType: 'Rent',
    amount: 3000,
    dueDate: '01-06-2025',
    dueDay: 'Monday',
    logourl: 'https://i.postimg.cc/KYqj4mBQ/rent-home-logo-vector-32088922.jpg'
  },
  {
    id: 'garbage',
    organization: 'City Corporation Waste Management',
    billType: 'Garbage',
    amount: 300,
    dueDate: '26-05-2025',
    dueDay: 'Monday',
    logourl: 'https://i.ibb.co.com/PsbqTrXg/ccc-logo.jpg'
  }
];

const BillSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-base-100 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Manage Your Bills Effortlessly</h1>
          <p className="mt-4 text-gray-600">All your bills in one place. Stay updated and never miss a due date.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {billsData.map((bill, index) => (
            <div
              key={bill.id}
              className="card bg-white shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-body items-center text-center">
                <img src={bill.logourl} alt={`${bill.organization} logo`} className="w-16 h-16 object-contain mb-4" />
                <h2 className="card-title font-extrabold ">{bill.organization}</h2>
                <p className="text-sm text-gray-500">{bill.billType} Bill</p>
                <p className="text-lg font-semibold text-primary">৳ {bill.amount}</p>
                <p className="text-sm text-gray-400">Due: {bill.dueDate} ({bill.dueDay})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillSection;