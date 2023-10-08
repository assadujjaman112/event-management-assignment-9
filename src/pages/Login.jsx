const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 py-16">
        <div className="card  px-6 py-8 w-4/5 lg:w-1/3 mx-auto shadow-2xl bg-base-100">
          <h1 className="text-center text-3xl mb-5 font-bold">Login Now</h1>
          <form>
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Login;
