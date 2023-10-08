import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, title, img, price, description } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            className="h-56 w-full"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <p>{(description.length > 150)? description.slice(0, 150) : description}</p>
          <h2 className="font-bold text-lg text-red-400"><span className="text-xl font-bold">Price</span> : {price} $</h2>
          <div className="card-actions justify-end">
            <Link to={`/services/${id}`} className="w-full"><button className="btn bg-red-400 text-white hover:text-black w-full my-8">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
