import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import Footer from "../components/footer/Footer";

const Register = () => {
  const [regError, setRegError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setRegError("");
    if (password.length < 6) {
      setRegError("Password must have at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password must have at least one uppercase character");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setRegError("Password must have one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal("Success!", "Successfully Registered!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setRegError(regError);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-16">
      <div className="card  px-6 py-8 w-4/5 lg:w-1/3 mx-auto shadow-2xl bg-base-100">
        <h1 className="text-center text-3xl mb-5 font-bold">Register Now</h1>
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
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
        {regError && <p className="text-red-600">{regError}</p>}
        <p className="mt-7 text-center">
          Already have an account?
          <Link className="text-red-400 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
