import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="py-7 md:py-16 w-4/5 mx-auto  flex flex-col md:flex-row justify-center items-center gap-5">
      <div className="flex-1">
        <img
          className="bg-transparent w-2/3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          src={bannerImg}
          alt=""
        />
      </div>
      <div className="flex-1"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      >
        <p className="text-2xl md:text-3xl">ORGANIZE </p>
        <br />
        <p className="text-2xl md:text-5xl font-extrabold my-[-20px] md:my-[-5px]">
          YOUR GAMING <span className="text-red-500"> EVENT</span>
        </p>
        <br />
        <p className="text-2xl md:text-3xl">WITH US</p>
        <p className="mt-3">
          Get ready for an unforgettable gaming event! Join us in an
          action-packed day of competition and camaraderie. Dive into thrilling
          tournaments, win awesome prizes, and make lasting gaming memories. Do
          not miss out on this epic gaming extravaganza - RSVP now!
        </p>
        <Link to="/contact">
          <button className="btn bg-red-400 my-3 md:my-6 text-white hover:text-black">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
