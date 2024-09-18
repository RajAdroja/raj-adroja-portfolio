import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/projectcard'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'

function Projects() {
  return (
    <seciton id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectContainer}>
            <ProjectCard src={viberr} link={"https://github.com/RajAdroja/Automatic-colorization-using-auto-encoder"} h3={"DL Project"} p={"Automatic colorization"}/>
            <ProjectCard src={freshBurger} link={"https://github.com/RajAdroja/Automatic-colorization-using-auto-encoder"} h3={"ML Project"} p={"sentimental analysis"}/>
            <ProjectCard src={hipsster} link={"https://github.com/RajAdroja/Automatic-colorization-using-auto-encoder"} h3={"project title"} p={"project desc"}/>
            <ProjectCard src={fitLift} link={"https://github.com/RajAdroja/Automatic-colorization-using-auto-encoder"} h3={"project title"} p={"project desc"}/>

        </div>
    </seciton>
  )
}

export default Projects