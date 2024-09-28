import styles from './ProjectStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/projectcard'
import freshBurger from '../../assets/fresh-burger.png'
import fitLift from '../../assets/fitlift.png'
import projectphoto from '../../assets/projectphoto.png'
import getsettravellogo from '../../assets/getsettravellogo.png'
import golangicon from '../../assets/golangicon.png'
import dockerlogo from '../../assets/dockerlogo.png'
import crudlogo from '../../assets/CRUDlogo.png'

function Projects() {
  return (
    <seciton id="projects" className={styles.container}>
        <h1 className="sectionTitle">Academic Projects</h1>
        <div className={styles.projectContainer}>
          <ProjectCard src={viberr} link={"https://github.com/RajAdroja/Automatic-colorization-using-auto-encoder"} h3={"DL Project"} p={"Automatic Colorization"}/>
          <ProjectCard src={projectphoto} link={"https://github.com/RajAdroja/Sentiment-Analysis"} h3={"ML Project"} p={"Sentiment Analysis"}/>
          <ProjectCard src={fitLift} link={"https://www.vpropel.in/"} h3={"V-PROPEL portal"} p={"Coding Platform"}/>
          <ProjectCard src={getsettravellogo} link={"https://github.com/RajAdroja/GetSetTravel"} h3={"GetSetTravel"} p={"Frontend website"}/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="sectionTitle">Learning Projects</h1>
        <div className={styles.projectContainer}>
        <ProjectCard src={golangicon} link={"https://github.com/RajAdroja/Go"} h3={"Golang"} p={"Exporing Golang"}/>
        <ProjectCard src={dockerlogo} link={"https://github.com/RajAdroja/CMPE272-Assignment-1-Hello-Service"} h3={"Hello World "} p={"Docker Kubernetes practice"}/>
        <ProjectCard src={crudlogo} link={"https://github.com/RajAdroja/CMPE272-Assignment-2-Building-serverless-application"} h3={"Serverless App"} p={"Simple CRUD"}/>
        </div>
    </seciton>
    
  )
}

export default Projects