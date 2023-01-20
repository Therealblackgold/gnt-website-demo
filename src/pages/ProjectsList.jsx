import ProjectCard from "../components/ProjectCard";
import projects from "../data";

const ProjectsList = () => {
  return (
    <>
      <section className="container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            img1={project.image1}
            img2={project.image2}
            url={project.url}
            bg={project.bg}
            color={project.color}
          />
        ))}
      </section>
      <div className="section-spacing"></div>
    </>
  );
};

export default ProjectsList;
