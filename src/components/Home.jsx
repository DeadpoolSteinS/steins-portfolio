import profile from "../img/profile.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div id="home">
      <div className="flex justify-between items-center py-16">
        <div className="mr-8">
          <p className="my-4 text-4xl font-bold">
            Not Competition Only Collaboration
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo
            quae laudantium itaque?
          </p>
          <button className="bg-[#032aef] flex items-center text-white px-6 py-2 rounded-3xl">
            <p className="mr-2">Digital Analytics</p>
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="flex items-center relative min-w-[360px] h-80">
          <img
            src={profile}
            alt=""
            className="h-52 w-52 object-cover rounded-xl"
          />
          <div className="w-80 h-80 absolute right-0 -z-10 bg-gradient-to-tr from-blue-800 via-pink-500 to-amber-500 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
