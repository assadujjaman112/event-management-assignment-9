import { useLoaderData } from "react-router-dom";
import Footer from "../components/footer/Footer";
import TeamMembers from "../components/teamMembers/TeamMembers";

const About = () => {
    const members = useLoaderData();
  return (
    <div className="bg-slate-100">
      <div className=" pt-7 md:pt-16 w-4/5 mx-auto">
        <h1 className="text-center font-extrabold text-3xl md:text-5xl">
          About <span className="text-red-400">Us</span>
        </h1>
        <p className="text-center mt-5 w-full lg:w-3/4 mx-auto">
          Welcome to PlayPulse Events Where Gaming Dreams Come to Life! <br />
          At PlayPulse Events, we are passionate about one thing: gaming. We
          understand that gaming is more than just a hobby; it is a way of life,
          a source of inspiration, and a bridge that connects people from all
          walks of life. That is why we have dedicated ourselves to creating
          unforgettable gaming experiences that bring the community together,
          celebrate the artistry of game development, and showcase the limitless
          potential of the gaming world. PlayPulse Events offers a wide array of gaming experiences, from thrilling eSports tournaments that push the boundaries of competition to engaging panel discussions that delve into the art and science of game development.
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mt-5 md:mt-16 ">Meet Our <span className="text-red-400">Team</span></h1>
        <p className="text-center mt-3 w-full lg:w-2/3 mx-auto">Meet the faces behind PlayPulse Events who are here to ensure everything runs smoothly, from the exciting eSports tournaments to the informative panel discussions, and everything in between. We are gamers, just like you,  and we are thrilled to share our passion with yo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-16">
            {
                members?.map(member => <TeamMembers key={member.id} member= {member}></TeamMembers>)
            }

        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default About;
