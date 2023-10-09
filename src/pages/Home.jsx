import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Service from "./Service";
import Footer from "../components/footer/Footer";
import {
  SiRakuten,
  SiCocacola,
  SiIntel,
  SiSamsung,
  SiMastercard,
  SiMicrosoft,
} from "react-icons/si";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="bg-slate-100">
      <Banner></Banner>
      <h1 className="text-5xl text-center font-bold my-5">
        Our <span className="text-red-500">Services</span>
      </h1>
      <p className="text-center">
        At PlayPulse Events, we are dedicated to providing a comprehensive range
        of services tailored to <br /> enhance your gaming experience and make
        your time with us truly memorable.
      </p>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-20">
        {services?.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div>
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Our <span className="text-red-400 mb-5">Sponsors</span>
        </h1>
        <p className="text-center w-full md:w-3/5 mx-auto mt-5">
          Our sponsors and partners bring a wealth of expertise, innovation, and
          resources to the table. They are at the forefront of gaming technology
          and are dedicated to enhancing the gaming experience for players of
          all levels, from casual gamers to esports professionals. Their
          unwavering support enables us to host an event that exceeds all
          expectations.
        </p>
        <div className="mt-5 w-4/5 mx-auto flex flex-wrap justify-around items-center">
          <SiRakuten className="text-7xl my-[-10px] md:my-0"></SiRakuten>
          <SiCocacola className="text-9xl my-[-10px] md:my-0"></SiCocacola>
          <SiIntel className="text-7xl my-[-10px] md:my-0"></SiIntel>
          <SiSamsung className="text-9xl my-[-10px] md:my-0"></SiSamsung>
          <SiMastercard className="text-7xl my-[-10px] md:my-0"></SiMastercard>
          <SiMicrosoft className="text-5xl my-[-10px] md:my-0"></SiMicrosoft>
        </div>
      </div>
      <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto space-y-5 mt-5 md:mt-10 lg:mt-16 mb-5 md:mb-10 lg:mb-16">
        <h1 className="text-3xl font-bold md:text-5xl text-center mb-5  md:mb-10">
          Frequently Asked <span className="text-red-400">Questions</span>
        </h1>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            How can I register for the gaming event?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              To register for the gaming event, please visit our official
              website. On the homepage, you wll find a Register button. Click on
              it, and you wll be directed to a simple registration form. Fill in
              your details, including your name, contact information, and gaming
              preferences, then submit the form. It is that easy!
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            What games will be featured?
          </div>
          <div className="collapse-content">
            <p>
              We have an exciting lineup of games for the event, catering to a
              variety of gaming tastes. Expect to see popular titles like
              Fortnite, League of Legends, and many more. Stay tuned for the
              final list of games on our website and social media channels.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            Can I bring my own gaming equipment?
          </div>
          <div className="collapse-content">
            <p>
              Yes, participants are welcome to bring their own gaming equipment.
              Whether it is your trusty gaming laptop, console, or controller,
              feel free to bring what you are most comfortable with. However,
              please note that we will also provide equipment for those who
              prefer not to bring their own..
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
          Will there be opportunities for networking or meeting other gamers?
          </div>
          <div className="collapse-content">
            <p>
            Absolutely! We understand that gaming events are not just about competition; they are also a great opportunity to connect with like-minded individuals who share your passion for gaming. We will have designated areas within the event venue where you can relax, socialize, and meet other gamers.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            Is there parking available?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Yes, there is ample parking available near the event venue. We have
              made sure that parking is convenient for all attendees, so you
              will not have to worry about finding a spot. Just follow the event
              signs to the designated parking area.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
