import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="h-[600px] w-full rounded-xl " />
          <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0 right-0 bottom-0 flex items-center h-full">
            <div className="text-white md:w-1/2 p-10">
              <h1 className="text-5xl font-bold leading-12">
                Affordable <br />
                Price For Car
                <br /> Servicing
              </h1>
              <p className="mt-5 text-gray-100 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iste voluptatum quisquam facere eum beatae dolorum, voluptatibus
                impedit suscipit minima.
              </p>
              <div className="flex gap-5">
                <button className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5">
                  Discover More
                </button>
                <button className="font-bold bg-[#00000001] border-2 text-white rounded-md font-semibold mt-5 py-2 px-6">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex gap-10">
            <a
              href="#slide6"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowRight />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="h-[600px] w-full rounded-xl " />
          <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0 right-0 bottom-0 flex items-center h-full">
            <div className="text-white md:w-1/2 p-10">
              <h1 className="text-5xl font-bold leading-12">
                Affordable <br />
                Price For Car
                <br /> Servicing
              </h1>
              <p className="mt-5 text-gray-100 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iste voluptatum quisquam facere eum beatae dolorum, voluptatibus
                impedit suscipit minima.
              </p>
              <div className="flex gap-5">
                <button className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5">
                  Discover More
                </button>
                <button className="font-bold bg-[#00000001] border-2 text-white rounded-md font-semibold mt-5 py-2 px-6">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex gap-10">
            <a
              href="#slide1"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowRight />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="h-[600px] w-full rounded-xl " />
          <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0 right-0 bottom-0 flex items-center h-full">
            <div className="text-white md:w-1/2 p-10">
              <h1 className="text-5xl font-bold leading-12">
                Affordable <br />
                Price For Car
                <br /> Servicing
              </h1>
              <p className="mt-5 text-gray-100 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iste voluptatum quisquam facere eum beatae dolorum, voluptatibus
                impedit suscipit minima.
              </p>
              <div className="flex gap-5">
                <button className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5">
                  Discover More
                </button>
                <button className="font-bold bg-[#00000001] border-2 text-white rounded-md font-semibold mt-5 py-2 px-6">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex gap-10">
            <a
              href="#slide2"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowRight />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="h-[600px] w-full rounded-xl " />
          <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0 right-0 bottom-0 flex items-center h-full">
            <div className="text-white md:w-1/2 p-10">
              <h1 className="text-5xl font-bold leading-12">
                Affordable <br />
                Price For Car
                <br /> Servicing
              </h1>
              <p className="mt-5 text-gray-100 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iste voluptatum quisquam facere eum beatae dolorum, voluptatibus
                impedit suscipit minima.
              </p>
              <div className="flex gap-5">
                <button className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5">
                  Discover More
                </button>
                <button className="font-bold bg-[#00000001] border-2 text-white rounded-md font-semibold mt-5 py-2 px-6">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex gap-10">
            <a
              href="#slide3"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowRight />
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="h-[600px] w-full rounded-xl " />
          <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0 right-0 bottom-0 flex items-center h-full">
            <div className="text-white md:w-1/2 p-10">
              <h1 className="text-5xl font-bold leading-12">
                Affordable <br />
                Price For Car
                <br /> Servicing
              </h1>
              <p className="mt-5 text-gray-100 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iste voluptatum quisquam facere eum beatae dolorum, voluptatibus
                impedit suscipit minima.
              </p>
              <div className="flex gap-5">
                <button className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5">
                  Discover More
                </button>
                <button className="font-bold bg-[#00000001] border-2 text-white rounded-md font-semibold mt-5 py-2 px-6">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex gap-10">
            <a
              href="#slide4"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowRight />
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="h-[600px] w-full rounded-xl " />
          <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] left-0 top-0 right-0 bottom-0 flex items-center h-full">
            <div className="text-white md:w-1/2 p-10">
              <h1 className="text-5xl font-bold leading-12">
                Affordable <br />
                Price For Car
                <br /> Servicing
              </h1>
              <p className="mt-5 text-gray-100 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                iste voluptatum quisquam facere eum beatae dolorum, voluptatibus
                impedit suscipit minima.
              </p>
              <div className="flex gap-5">
                <button className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5">
                  Discover More
                </button>
                <button className="font-bold bg-[#00000001] border-2 text-white rounded-md font-semibold mt-5 py-2 px-6">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-10 bottom-10 flex gap-10">
            <a
              href="#slide5"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowLeft />
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-gray-700 font-bold border-0 hover:bg-[#FF3811] text-white"
            >
              <GoArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
