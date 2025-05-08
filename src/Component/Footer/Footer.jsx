import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-slate-900 text-slate-200 p-10">
      <nav>
        <h6 className="footer-title font-extrabold text-blue-400">Bill Services</h6>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Pay Electricity Bill</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Pay Gas Bill</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Pay Water Bill</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Pay Internet Bill</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Recharge Mobile Balance</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Pay Cable TV Bill</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Pay House Rent</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Scheduled Payments</a>
      </nav>

      <nav>
        <h6 className="footer-title font-extrabold text-blue-400">Support</h6>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Help Center</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Report a Billing Issue</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Payment Methods</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Mobile App Support</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Live Chat</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">FAQs</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Community Forum</a>
      </nav>

      <nav>
        <h6 className="footer-title font-extrabold text-blue-400">Legal & Info</h6>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Terms & Conditions</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Privacy Policy</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Refund Policy</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Service Regulations</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Cookie Policy</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Data Security</a>
        <a className="link link-hover font-semibold text-slate-300 hover:text-blue-300">Accessibility Info</a>
      </nav>
    </footer>
  );
};

export default Footer;
