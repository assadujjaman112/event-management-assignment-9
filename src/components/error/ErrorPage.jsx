import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl md:text-6xl text-center font-extrabold text-red-400">
          404 Not Found . . .{" "}
        </h1>
        <div className="flex justify-center mt-6">
          <Link to="/">
            <button className="btn flex justify-center bg-red-400 text-white">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
