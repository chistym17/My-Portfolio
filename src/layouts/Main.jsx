import { Outlet } from 'react-router-dom'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectSection'
import EmailSection from '../components/EmailSection'
import Footer from "../components/Footer"
import Skills from '../components/SkillsSection/Skills'
import SkillsSection from '../components/SkillsSection/Newskills'
import MyPortfolio from '../components/Projects/projectsnew'
import ZoomIn from '../Animation/ZoomIn'
import ViewAllProjectsButton from '../components/Projects/projectsbtn'
import Secondproject from '../components/Projects/secproject'
import SlideInFromLeft from '../Animation/SlideLeft'
import YouVidProject from '../components/Projects/Thirdproject'
import MyProjectsButton from '../components/Projects/projectbtn'
import SlideInFromRight from '../Animation/SlideRight'
const Main = () => {
  return (
    <div className='px-3 md:px-16  '>
      {/* <Navbar></Navbar> */}
      <div className='pt-5 pb-5 mb-10'>
        <Outlet />
      </div>
      <AboutSection></AboutSection>
      {/* <SkillsSection></SkillsSection> */}
      {/* <Skills></Skills> */}
      {/* <Secondproject></Secondproject> */}
      <MyProjectsButton></MyProjectsButton>
      <div className='h-[500px]'>

        <SlideInFromLeft>
          <MyPortfolio></MyPortfolio>

        </SlideInFromLeft>


      </div>
      <div className='h-[500px]'>

      <SlideInFromRight>
      <YouVidProject></YouVidProject>

      </SlideInFromRight>
       


      </div>
      <ViewAllProjectsButton></ViewAllProjectsButton>
      {/* <ProjectsSection></ProjectsSection> */}
      <SkillsSection></SkillsSection>

      <EmailSection></EmailSection>
      <Footer></Footer>
    </div>
  )
}

export default Main
