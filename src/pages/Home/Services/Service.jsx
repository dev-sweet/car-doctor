import { GoArrowRight } from "react-icons/go";

const Service = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-3xl">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold  text-[#FF3811]">Price : {price}</p>

          <button className="text-[#FF3811]">
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
