const steps = [
  {
    id: 1,
    title: "Smart Verification Begins",
    desc: "Select and upload your ID, certificate, or form from any device.",
    image: "/IconPac/undraw_files-uploading_qf8u.png",
  },
  {
    id: 2,
    title: "AI Checks Instantly",
    desc: "Our AI analyzes and checks the document for authenticity and accuracy in seconds.",
    image: "/IconPac/undraw_document-analysis_3c0y.png",
  },
  {
    id: 3,
    title: "Get Results Instantly",
    desc: "Receive verified results instantly—ready to download, share, or store.",
    image: "/IconPac/undraw_my-files_yynz.png",
  },
];

const Steps = () => {
  return (
    <section id="about" className="py-12 px-4 text-center bg-white">
      <h3 className="text-xl md:text-2xl font-semibold mb-8" data-aos="fade-up">
        How it works? In just 3 easy steps
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {/* Image */}
            <img
              src={step.image}
              alt={`Step ${step.id}`}
              className="w-36 h-36 mx-auto mb-6 object-contain"
            />

            {/* Step Number */}
            <div className="text-blue-600 text-3xl font-bold mb-2">{step.id}</div>

            {/* Title */}
            <h4 className="font-semibold text-lg mb-2">{step.title}</h4>

            {/* Description */}
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
