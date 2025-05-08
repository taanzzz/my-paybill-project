import { GlobeAsiaAustraliaIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";
import 'aos/dist/aos.css';

const AboutService = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`max-w-5xl mx-auto my-12 px-4 text-center transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-center mb-4">
        <GlobeAsiaAustraliaIcon className="h-10 w-10 text-blue-600" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        Simplifying Daily Payments for Every Household
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        Our mission is to streamline bill payments and utility management for
        all Bangladeshi households.From electricity to water,rent to internet—
        we bring everything under one digital platform. No more queues,no more
        late fines—just smart,secure and hassle-free transactions.
      </p>
      <div className="flex justify-center mt-6">
        <InformationCircleIcon className="h-8 w-8 text-gray-400" />
      </div>
    </div>
  );
};

export default AboutService;