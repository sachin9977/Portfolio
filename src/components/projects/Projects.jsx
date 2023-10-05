import Heading from "../common/Heading";
import SwiperSlider from "../common/SwiperSlider";
import { projectsData } from "../common/data";
import { projectsDataapp } from "../common/data";
import "./Projects.css";

const Projects = () => {
  const projectItems = projectsData.map(({ imgSrc, title, desc }) => (
    <>
      <div className="project__item-image">
        <img src={imgSrc} alt="Project Preview" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {/* <div className='project__item-cta'>
        { github && <a href={ github } className='btn' target='_blank' rel='noreferrer'>GitHub</a> }
        { demo && <a href={ demo } className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a> }
      </div> */}
    </>
  ));

  const appprojectItems = projectsDataapp.map(({ imgSrc, title, desc }) => (
    <>
      <div className="project__item-image1">
        <img src={imgSrc} alt="Project Preview" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {/* <div className='project__item-cta'>
        { github && <a href={ github } className='btn' target='_blank' rel='noreferrer'>GitHub</a> }
        { demo && <a href={ demo } className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a> }
      </div> */}
    </>
  ));

  return (
    <>
      <section id="projects">
        <Heading main="Portfolio" intro="My Recent Work (Web Development)" />

        <SwiperSlider
          swiperClass="projects__container"
          itemClass="project__item"
          minWidth={700}
          content={projectItems}
        />
      </section>

      <section id="projects">
        <Heading main="" intro="My Recent Work (App Development)" />

        <SwiperSlider
          swiperClass="projects__container"
          itemClass="project__item"
          minWidth={700}
          content={appprojectItems}
        />
      </section>
    </>
  );
};

export default Projects;
