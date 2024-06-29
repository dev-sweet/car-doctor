import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-3xl">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold  text-[#FF3811]">Price : {price}</p>

          <Link to={`/checkout/${_id}`} className="text-[#FF3811]">
            <GoArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
