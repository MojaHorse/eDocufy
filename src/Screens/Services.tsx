import React from "react";
import Header from "../components/Header";


const services = [
  {
    title: "Document Upload Portal",
    description:
      "Citizens can scan and submit their documents using our intuitive web or mobile interface. No more waiting in long lines.",
    image: '/public/IconPac/uploadImg.png',
  },
  {
    title: "Automated Verification",
    description:
      "Our system securely cross-checks submitted documents with official government databases using leading OCR and cloud-based technologies such as Google Vision API and Azure Cognitive Services.",
    image: '/public/IconPac/verificationImg.png',
  },
  {
    title: "Digital Certification",
    description:
      "Verified documents are digitally certified and sent back to the user quickly, safely and transparently.",
    image: '/public/IconPac/certifiedImg.png',
  },
];


const ServicesPage = () => {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto mt-16">
      <Header />
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        Our Services
      </h1>

      <p className="mb-10 text-center text-gray-700 max-w-3xl mx-auto">
        Our platform replaces slow, manual procedures with a secure and fully
        automated digital system.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white cursor-pointer transition duration-300 hover:shadow-lg"
          >
            <img src={service.image} alt={service.title} className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-sm text-blue-900">
        © 2025 Document Verification Platform
      </footer>
    </section>
  );
};

export default ServicesPage;
