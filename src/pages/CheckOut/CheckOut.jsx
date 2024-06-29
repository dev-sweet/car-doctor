import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, service_id, img, price } = service;
  const { user } = useContext(AuthContext);
  console.log(user);
  const [orderInfo, setOrderInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: user?.email,
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      title,
      service_id,
      img,
      price,
      ...orderInfo,
    };
    fetch("http://localhost:9000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const hanldeChange = (e) => {
    setOrderInfo((prevInfo) => {
      return { ...prevInfo, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="py-20">
      <h1>Checkout : ${title}</h1>
      <div className="w-3/4 mx-auto bg-gray-100 p-10 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                value={orderInfo.firstName}
                placeholder="First Name"
                onChange={hanldeChange}
                className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:border-[#FF3811]"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                value={orderInfo.lastName}
                placeholder="Last Name"
                onChange={hanldeChange}
                className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:border-[#FF3811]"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                value={orderInfo.customerPhone}
                placeholder="Your Phone"
                onChange={hanldeChange}
                className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:border-[#FF3811]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={orderInfo.customerEmail}
                onChange={hanldeChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:border-[#FF3811]"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={orderInfo.message}
              onChange={hanldeChange}
              placeholder="Your Message"
              className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:border-[#FF3811]"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 mt-4 font-semibold text-white bg-[#FF3811] rounded-md hover:bg-[#FF3811] focus:outline-none focus:bg-[#FF3811]"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
