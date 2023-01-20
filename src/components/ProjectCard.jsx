const ProjectCard = ({ title, desc, img1, img2, url, bg, color }) => {
  return (
    <div
      className="work-container mb-5"
      style={{ backgroundColor: bg, color: color }}
    >
      <div className="row">
        <div className="col d-flex align-items-center sm-screen-margin">
          <div>
            <h5>{title}</h5>
            <h6>{desc}</h6>
            <a
              className="btn project-btn"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col sm-screen-margin">
              <img className="center-hero" src={img1} alt="" />
            </div>
            <div className="col">
              <img className="center-hero" src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
