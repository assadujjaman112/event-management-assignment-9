import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Service from "./Service";
import Footer from "../components/footer/Footer";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="bg-slate-100">
      <Banner></Banner>
      <h1 className="text-5xl text-center font-bold my-5">
        Our <span className="text-red-500">Services</span>
        
      </h1>
      <p className="text-center">At PlayPulse Events, we are dedicated to providing a comprehensive range of services tailored to <br /> enhance your gaming experience and make your time with us truly memorable.</p>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 lg:my-20">
        {services?.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
