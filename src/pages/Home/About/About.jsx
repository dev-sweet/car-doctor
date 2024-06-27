import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2 relative">
          <img src={person} className="rounded-lg shadow-2xl w-4/5" />
          <img
            src={parts}
            className="w-1/2 absolute top-1/2 left-1/2 rounded-lg border-xl border-white shadow-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold text-orange-500">About Us</h3>
          <h2 className="py-6 text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p className="text-gray-500 font-semibold">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-gray-500 mt-4 font-semibold">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5 px-8">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
