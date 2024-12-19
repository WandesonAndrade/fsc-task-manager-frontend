import Tasks from "../components/Tasks";
import Sidebar from "../components/Sidebar";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default Home;
