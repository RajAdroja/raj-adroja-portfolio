import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'dark' ? checkMarkIconDark : checkMarkIconLight;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Data Engineering"/>
            <SkillList src={checkMarkIcon} skill="Machine Learning"/>
            <SkillList src={checkMarkIcon} skill="Network Engineering"/>
            <SkillList src={checkMarkIcon} skill="Web Development"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="SQL"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="Bash"/>
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Node.Js"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="Javascript"/>

        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HANA"/>
            <SkillList src={checkMarkIcon} skill="JIRA"/>
            <SkillList src={checkMarkIcon} skill="Snowflake"/>
            <SkillList src={checkMarkIcon} skill="Docket"/>
            <SkillList src={checkMarkIcon} skill="Kubernetes"/>
            <SkillList src={checkMarkIcon} skill="Github"/>
            <SkillList src={checkMarkIcon} skill="Cisco Packet Tracer"/>
        </div>
    </section>
  );
}

export default Skills;