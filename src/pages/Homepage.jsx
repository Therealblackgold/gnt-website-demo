import Intro from "../components/Intro";
import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import Services from "./Services";

const Homepage = () => {
  return (
    <div>
      <Intro />
      <ProjectsList />
      <Services />
      <Contact />
    </div>
  );
};

export default Homepage;
