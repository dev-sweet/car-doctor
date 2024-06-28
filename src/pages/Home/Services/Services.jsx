import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl font-bold  text-[#FF3811]">Services</h3>
        <h2 className="text-5xl font-bold">Our Services Area</h2>
        <p className="text-gray-500 mt-4 font-semibold">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don not look even slightly
          believable.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
