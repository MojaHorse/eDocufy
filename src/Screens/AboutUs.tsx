import React from "react";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div className="font-sans text-[#1A1A1A] bg-white">
      <Header />
      {/* Hero-like banner */}
      <section className="bg-blue-500 text-white py-20 px-6 md:px-12 rounded-br-[50px] max-w-7xl mx-auto pt-40">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl leading-relaxed max-w-3xl">
          Bug Slayers, a dedicated group of third-year students, are using tech to solve real-world problems. Our latest project, built with Boxfusion – South Africa’s leading public sector software vendor – aims to revolutionize how citizens interact with government services.
        </p>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-8 text-[18px] text-gray-800 leading-relaxed max-w-4xl">
          <p>
            Founded in 2008, Boxfusion has led South Africa’s digital government shift. Known for secure, citizen-focused platforms, they simplify service delivery and reduce red tape.
          </p>
          <p>
            Inspired by Boxfusion’s mission, Bug Slayers are building a next-gen document verification system to eliminate long queues and outdated paper processes at places like Home Affairs and municipalities.
          </p>
          <p>
            Our vision: to bring public services online — fast, smart, and accessible for all. Because digital transformation isn’t just cool... it's necessary.
          </p>
        </div>

        {/* Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl">
            Our platform modernizes document verification in South Africa, making it secure and fully digital.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Key Features</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Document Upload Portal</strong> – Citizens scan and upload via web/mobile. No queues.</li>
            <li><strong>Automated Verification</strong> – Documents are checked with OCR & AI (Google Vision, Azure).</li>
            <li><strong>Digital Certification</strong> – Verified docs are securely sent back, ready to use.</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Why It Matters</h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>No More Queues:</strong> It's digital, instant, and smooth.</li>
            <li><strong>Safe & Tamper-Proof:</strong> Top-level security = peace of mind.</li>
            <li><strong>Efficient:</strong> Cuts down on admin time and errors at offices.</li>
            <li><strong>Accessible to All:</strong> No matter where you are, you can use it.</li>
          </ul>
        </div>

        {/* Team */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet the Bug Slayers</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-[120px] h-[120px] bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold"
              >
                Photo
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-base">
            Together with Boxfusion, we’re not just building a site—we’re shaping the future of South Africa’s digital government.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
