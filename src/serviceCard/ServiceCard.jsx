import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = () => {
  const [service, setService] = useState({});

  const { id } = useParams();
  const idInt = parseInt(id);

  const services = useLoaderData();

  useEffect(() => {
    const findService = services?.find((service) => service.id === idInt);
    setService(findService);
  }, [idInt, services]);
  return (
    <div className="card  bg-base-100 shadow-xl my-10 md:my-20 w-4/5 mx-auto space-y-2">
      <figure>
        <img
          src={service.img}
          className=" w-full h-[85vh]"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title md:text-4xl font-bold">{service.title}</h2>
        <p>{service.description}</p>
        <h2 className="font-bold text-lg text-red-400"><span className="text-xl font-bold">Price</span> : {service.price} $</h2>
        <button className="btn w-52 bg-red-400 mx-2 mt-14 text-white hover:text-black">Book Now <FaArrowRight className="ml-3"></FaArrowRight></button>
        
      </div>
      
    </div>
  );
};

export default ServiceCard;
