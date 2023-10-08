import { useLoaderData } from "react-router-dom";
import Event from "./Event";
import Footer from "../components/footer/Footer";

const Events = () => {
  const events = useLoaderData();
  return (
    <div>
      <div className="w-4/5 mx-auto my-20">
        <h1 className="text-2xl md:text-5xl text-center font-extrabold mb-5">
          Upcoming <span className="text-red-400">Events</span>
        </h1>
        <p className="text-red-400 text-center w-3/5 mx-auto">
          Get ready for a year filled with excitement and adventure as we
          prepare to unveil a diverse range of upcoming events that cater to
          your interests and passions.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {events?.map((event) => (
            <Event key={event.id} event={event}></Event>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Events;
