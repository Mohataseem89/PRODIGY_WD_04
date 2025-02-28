import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Mohataseem89/Moseeqi-a-music-player"
          h3="Moseeqi"
          p="A musique player"
        />
        <ProjectCard
          src={freshBurger}
          // src={netflix}
          link="https://github.com/Mohataseem89/Netflix-UI-clone"
          h3="Netflix"
          p="Netflix-UI-Clone"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Mohataseem89/a_webpage"
          h3="A_Webpage"
          p="A Landing Page"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/taslimansari/weather-forecast-js"
          h3="weather-forecast-js"
          p="Weather App"
        />
      </div>
    </section>
  );
}

export default Projects;
