import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Service from "./Service";
import Footer from "../components/footer/Footer";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="">
      <Banner></Banner>
      <h1 className="text-5xl text-center font-bold my-5">
        Our <span className="text-red-500">Services</span>
      </h1>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
        {services?.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
