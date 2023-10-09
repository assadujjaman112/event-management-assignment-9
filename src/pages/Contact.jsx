import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import Footer from "../components/footer/Footer";
const Contact = () => {
  return (
    <div>
      <div
        className="px-5 py-20 bg-cover opacity-70"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/male-hand-holding-smart-mobile-phone-with-phone-icon-call-now-business-communication-support-center-customer-service-technology-concept-neon-red-blue-light-background_150455-10009.jpg?w=1380)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Contact <span className="text-red-400">Us</span>
            </h1>
            <p className="mb-5">
              Our Representative Will Respond You As Soon As possible.
            </p>
            <div className="flex flex-col md:flex-row gap-6 mb-10">
              <h2 className="flex items-center gap-5 mt-2">
                {" "}
                <AiOutlineMail className="text-2xl"></AiOutlineMail> Email :
                playpulseevent@gamil.com{" "}
              </h2>
              <h2 className="flex items-center gap-5 mt-2">
                <AiFillPhone className="text-2xl"></AiFillPhone> Phone :
                +880123456783
              </h2>
              <h2 className="flex items-center gap-5 mt-2 ">
                <FaLocationDot className="text-2xl"></FaLocationDot> Address :
                Dhanmondi, Dhaka-1209
              </h2>
            </div>
            <form action="">
              <input
                type="text"
                className="mb-3 w-4/5 md:w-1/2 px-4 py-2 rounded-lg"
                name=""
                id=""
                placeholder="Your name"
              />
              <br />
              <input
                type="text"
                className="mb-3 w-4/5 md:w-1/2 px-4 pt-2 pb-24 rounded-lg"
                name=""
                id=""
                placeholder="Your message"
              />
              <br />
              <button className="btn bg-red-400 border-none text-white hover:text-black">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
