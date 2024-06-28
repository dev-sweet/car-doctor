import { FcGoogle } from "react-icons/fc";
import img from "../../assets/images/login/login.svg";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    setUser((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user.email, user.password)
      .then((data) => {
        const user = data.user;
        if (user.email) {
          alert("Signin success!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="w-1/2">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="w-1/2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold pt-5 ps-5 text-center">Login</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                onChange={(e) => handleChange(e)}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn font-bold border-0 bg-[#FF3811] hover:bg-[#FF3811] text-white font-semibold mt-5 px-8 w-full"
              >
                Sing In
              </button>
            </div>
          </form>
          <div>
            <p className="text-gray-600 font-semibold text-center">
              Or Sign In With
            </p>
            <div className="flex items-center gap-5 justify-center mt-5">
              <button className="text-xl bg-gray-200 rounded-full p-2 flex items-center justify-center text-blue-500">
                <FaFacebookF />
              </button>
              <button className="text-xl bg-gray-200 rounded-full p-2 flex items-center justify-center text-blue-500">
                <FaLinkedin />
              </button>
              <button className="text-xl bg-gray-200 rounded-full p-2 flex items-center justify-center">
                <FcGoogle />
              </button>
            </div>
            <p className="mt-3 mb-5 text-center">
              Have an account?{" "}
              <Link className="text-[#FF3811]" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
