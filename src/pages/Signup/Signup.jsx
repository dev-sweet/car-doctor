import { FcGoogle } from "react-icons/fc";
import img from "../../assets/images/login/login.svg";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Signup = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const referenceLocation = useRef(location);
  console.log(referenceLocation);
  const handleChange = (e) => {
    setUserForm((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userForm.email, userForm.password)
      .then((data) => {
        if (data?.user?.email) {
          axios
            .post("http://localhost:9000/jwt", userForm.email)
            .then((res) => {
              console.log(res.data);

              alert("Signup success");
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((data) => {
        const user = { email: data?.user?.email };
        if (data?.user?.email) {
          axios
            .post("http://localhost:9000/jwt", user, {
              withCredentials: true,
            })
            .then((res) => {
              if (res.data.success) {
                console.log(res);
                navigate("/login");
                alert("Signup success");
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="w-1/2">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="w-1/2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold pt-5 ps-5 text-center">Sign Up</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5 px-8 w-full"
              >
                Sing Up
              </button>
            </div>
          </form>
          <div>
            <p className="text-gray-600 font-semibold text-center">
              Or Sign Up With
            </p>
            <div className="flex items-center gap-5 justify-center mt-5">
              <button className="text-xl bg-gray-200 rounded-full p-2 flex items-center justify-center text-blue-500">
                <FaFacebookF />
              </button>
              <button className="text-xl bg-gray-200 rounded-full p-2 flex items-center justify-center text-blue-500">
                <FaLinkedin />
              </button>
              <button
                onClick={handleGoogleLogin}
                className="text-xl bg-gray-200 rounded-full p-2 flex items-center justify-center"
              >
                <FcGoogle />
              </button>
            </div>
            <p className="mt-3 mb-5 text-center">
              Have an account?{" "}
              <Link className="text-[#FF3811]" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
