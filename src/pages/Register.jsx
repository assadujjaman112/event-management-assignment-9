import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from 'sweetalert';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    

    createUser(email,password)
    .then(result => {
        console.log(result.user);
        swal("Success!", "Successfully Registered!","success");
        navigate("/")
    })
    .catch(error => {
        console.error(error);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-16">
      <div className="card  px-6 py-8 w-4/5 lg:w-1/3 mx-auto shadow-2xl bg-base-100">
        <h1 className="text-center text-3xl mb-5 font-bold">Register Now</h1>
        <form onClick={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-400 text-white hover:text-black">
              Register
            </button>
          </div>
        </form>
        <p className="mt-7 text-center">
          Already have an account?
          <Link className="text-red-400 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
