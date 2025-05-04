import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-slate-900 text-slate-200 py-16 px-6 sm:px-12 lg:px-20 mt-[5px] mb-[5px] ">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-8">
            For queries about your electricity,gas or water bills,our support team is here to assist you 7 days a week.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-400 w-6 h-6 mt-1" />
              <div>
                <p className="text-slate-300 font-medium">Call Us</p>
                <p className="text-slate-400">+880 1700 000 000</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-400 w-6 h-6 mt-1" />
              <div>
                <p className="text-slate-300 font-medium">Email Support</p>
                <p className="text-slate-400">support@paybill.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-400 w-6 h-6 mt-1" />
              <div>
                <p className="text-slate-300 font-medium">Office</p>
                <p className="text-slate-400">Level 5,Gulshan Tower,Dhaka</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm text-slate-300">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-slate-300">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-slate-300">Your Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
