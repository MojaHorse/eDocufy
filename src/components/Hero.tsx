import SplitText from "../components/splitText";
import RotatingText from "./rotatingText";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[99vh] bg-gradient-to-br from-blue-400 to-blue-600 text-white px-4 md:px-16 py-20 flex flex-col md:flex-row justify-between items-center gap-10"
    >
      {/* Left Content */}
      <div className="max-w-xl space-y-6 text-left" data-aos="fade-right">
        {/* Hero Title */}
        <SplitText
          text="Get your documents verified"
          splitType="chars"
          delay={80}
          duration={0.7}
          textAlign = "start"
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        />

        {/* Rotating Text Section */}
        <div className="flex items-center gap-2">
          <p className="text-2xl font-medium">It's</p>
          <RotatingText
            texts={['Quick', 'Simple']}
            mainClassName="px-2 bg-white text-blue-500 overflow-hidden py-1 justify-center rounded-lg"
            elementLevelClassName="text-2xl sm:text-3xl font-bold" // 👈 size here
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        {/* Description */}
        <p className="text-lg text-white/70">
          From upload to approval in minutes — experience the efficiency of our smart document verification system.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-4 bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition"
        >
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div data-aos="fade-left">
        <img
          src="/src/assets/19962851_6203999-Photoroom.png"
          alt="Document Illustration"
          className="w-72 md:w-96"
        />
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-50"
        onClick={() => {
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img
          src="/public/IconPac/angle-down.png"
          alt="Scroll down"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </div>
    </section>
  );
};

export default Hero;
