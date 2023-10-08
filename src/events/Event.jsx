const Event = ({ event }) => {
  const { title, img, description, prize } = event;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          className="h-60 w-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl text-red-400">
          {title}
        </h2>
        <p>{description}</p>
        <h2 className="text-xl font-bold text-red-400">Prize Pool : {prize} $</h2>
      </div>
    </div>
  );
};

export default Event;
