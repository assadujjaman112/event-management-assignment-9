const TeamMembers = ({ member }) => {
  const { img, title, role } = member;
  return (
    <div className="card card-compact mb-6 md:mb-16 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          className="h-72 w-full"
          alt=""
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <p className="text-lg font-serif text-red-400">{role}</p>
        
      </div>
    </div>
  );
};

export default TeamMembers;
