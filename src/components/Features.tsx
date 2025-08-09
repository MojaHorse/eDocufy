import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section id="services" className="bg-white py-14 px-4 md:px-16 flex flex-col-reverse md:flex-row items-center gap-10">
      <div className="md:flex-1" data-aos="fade-right">
        <p className="text-2xl md:text-3xl font-bold">
          Experience <span className="text-blue-500">faster approvals</span>,{" "}
          <span className="text-blue-700">AI-driven accuracy</span>, and{" "}
          <span className="text-purple-500">secure digital verification</span>, all in one place.
        </p>
        <Link to="/signup">
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
      <div className="md:flex-1 flex justify-center" data-aos="fade-left">
        <img src="/src/assets/6193234_3129525.jpg" alt="AI Verification" className="w-64 md:w-96 transform hover:scale-105 transition duration-300" />
      </div>
    </section>
  );
};

export default Features;
